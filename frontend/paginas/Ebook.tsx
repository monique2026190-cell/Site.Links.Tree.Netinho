import React from 'react';
import { links } from '../app.links';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    background: 'linear-gradient(to right, #232526, #414345)',
    minHeight: '100vh',
    color: '#EAEAEA',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#33373a',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    maxWidth: '900px',
    width: '100%',
    overflow: 'hidden',
    border: '1px solid #444',
  },
  imageColumn: {
    flex: '1 1 300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: '#232526',
  },
  coverImage: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
  },
  contentColumn: {
    flex: '2 1 400px',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 1.2,
    marginBottom: '0.5rem',
  },
  author: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#D1D5DB',
    marginBottom: '1.5rem',
    borderLeft: '3px solid #28a745',
    paddingLeft: '1rem',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: 1.7,
    marginBottom: '2rem',
    color: '#EAEAEA',
  },
  ctaContainer: {
    backgroundColor: '#232526',
    borderRadius: '10px',
    padding: '1.5rem',
    textAlign: 'center',
    border: '1px solid #444',
  },
  deliveryInfo: {
    fontSize: '1rem',
    color: '#D1D5DB',
    margin: '0.2rem 0',
  },
  buyButton: {
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    borderRadius: '50px',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '1rem',
    boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
};

const Ebook: React.FC = () => {
  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>, isHovering: boolean) => {
    e.currentTarget.style.transform = isHovering ? 'scale(1.05)' : 'scale(1)';
    e.currentTarget.style.boxShadow = isHovering ? '0 6px 20px rgba(40, 167, 69, 0.5)' : '0 4px 15px rgba(40, 167, 69, 0.4)';
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageColumn}>
          <img 
            src="https://i.pravatar.cc/400?img=3" 
            alt="Capa do Ebook" 
            style={styles.coverImage} 
          />
        </div>
        <div style={styles.contentColumn}>
          <h1 style={styles.title}>
            Como Montar<br />Seu Jardim.
          </h1>
          <p style={styles.author}>Aprenda com as dicas do netinho.</p>
          <p style={styles.description}>
            Ensinamentos completos para você criar e manter um jardim incrível, mesmo com pouco espaço ou experiência.
          </p>
          <div style={styles.ctaContainer}>
            <p style={styles.deliveryInfo}>✔️ Receba imediatamente por E-mail</p>
            <a 
              href={links.KIWIFY}
              style={styles.buyButton}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar por R$14,90
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
