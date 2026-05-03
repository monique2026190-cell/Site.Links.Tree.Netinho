"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEvent = void 0;
const metaAdsService_1 = require("../services/metaAdsService");
const crypto_1 = __importDefault(require("crypto"));
const axios_1 = __importDefault(require("axios")); // Import axios
// Função para obter localização do endereço IP
function getLocationFromIp(ip) {
    return __awaiter(this, void 0, void 0, function* () {
        // Não buscar IPs de localhost ou inválidos
        if (!ip || ip === '::1' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
            return {};
        }
        try {
            // Usando um serviço de geolocalização de IP gratuito (substitua se tiver um preferido)
            const response = yield axios_1.default.get(`http://ip-api.com/json/${ip}?fields=status,message,region,city`);
            if (response.data.status === 'success') {
                return {
                    st: response.data.region, // Estado (Region)
                    ct: response.data.city, // Cidade (City)
                };
            }
            else {
                console.warn(`Não foi possível geolocalizar o IP ${ip}: ${response.data.message}`);
                return {};
            }
        }
        catch (error) {
            console.error(`Erro durante a geolocalização do IP ${ip}:`, error);
            return {};
        }
    });
}
function hashData(data) {
    return crypto_1.default
        .createHash('sha256')
        .update(data.trim().toLowerCase())
        .digest('hex');
}
const handleEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const payload = req.body;
    if (!payload.eventName || !payload.eventSourceUrl) {
        return res.status(400).json({ message: 'eventName e eventSourceUrl são obrigatórios.' });
    }
    const ipHeader = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ip = Array.isArray(ipHeader) ? ipHeader[0] : ipHeader === null || ipHeader === void 0 ? void 0 : ipHeader.split(',')[0].trim();
    // Obter localização a partir do IP
    const locationData = yield getLocationFromIp(ip || '');
    const userData = Object.assign(Object.assign(Object.assign({}, payload.userData), { client_ip_address: ip, client_user_agent: req.headers['user-agent'], fbp: payload.fbp, fbc: payload.fbc, external_id: (_a = payload.userData) === null || _a === void 0 ? void 0 : _a.external_id, subscription_id: (_b = payload.userData) === null || _b === void 0 ? void 0 : _b.subscription_id }), locationData);
    if (userData.em && typeof userData.em === 'string') {
        userData.em = hashData(userData.em);
    }
    if (userData.email) {
        delete userData.email;
    }
    const serverEvent = {
        event_name: payload.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: payload.eventSourceUrl,
        action_source: 'website', // Correção para o tipo literal
        event_id: payload.eventId,
        user_data: userData,
        custom_data: payload.customData,
    };
    // Remover quaisquer campos user_data que sejam undefined ou null
    Object.keys(serverEvent.user_data).forEach(key => {
        if (serverEvent.user_data[key] === undefined || serverEvent.user_data[key] === null) {
            delete serverEvent.user_data[key];
        }
    });
    try {
        yield (0, metaAdsService_1.sendServerEvent)(serverEvent);
        res.status(200).json({ message: `Evento '${payload.eventName}' processado com sucesso.` });
    }
    catch (error) {
        console.error(`Falha ao processar o evento '${payload.eventName}':`, error);
        res.status(500).json({ message: 'Erro interno no servidor.' });
    }
});
exports.handleEvent = handleEvent;
