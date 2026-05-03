import React from 'react';
import { useNavigate } from 'react-router-dom';
import { links } from '../app.links';
import C1Image from '../assets/c1.jpg';

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
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#33373a',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    border: '1px solid #444',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
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
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  author: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#D1D5DB',
    marginBottom: '1.5rem',
    borderLeft: '3px solid #28a745',
    paddingLeft: '1rem',
  },
  checklist: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '2rem',
    textAlign: 'left',
  },
  checklistItem: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#EAEAEA',
    marginBottom: '0.8rem',
    display: 'flex',
    alignItems: 'center',
  },
  checkIcon: {
    color: '#28a745',
    marginRight: '10px',
    fontSize: '1.2rem',
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
  const navigate = useNavigate();

  const handleBuyButtonHover = (e: React.MouseEvent<HTMLAnchorElement>, isHovering: boolean) => {
    e.currentTarget.style.transform = isHovering ? 'scale(1.05)' : 'scale(1)';
    e.currentTarget.style.boxShadow = isHovering ? '0 6px 20px rgba(40, 167, 69, 0.5)' : '0 4px 15px rgba(40, 167, 69, 0.4)';
  };

  const handleBackButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isHovering: boolean) => {
    e.currentTarget.style.backgroundColor = isHovering ? '#28a745' : '#33373a';
    e.currentTarget.style.transform = isHovering ? 'scale(1.1)' : 'scale(1)';
  };

  return (
    <div style={styles.container}>
      <button
        style={styles.backButton}
        onClick={() => navigate(-1)}
        onMouseEnter={(e) => handleBackButtonHover(e, true)}
        onMouseLeave={(e) => handleBackButtonHover(e, false)}
      >
        ←
      </button>
      <div style={styles.card}>
        <div style={styles.imageColumn}>
          <img
            src={C1Image}
            alt="Capa do Ebook"
            style={styles.coverImage}
          />
        </div>
        <div style={styles.contentColumn}>
          <h1 style={styles.title}>
            <span style={{ color: '#FFFFFF', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Como Montar</span><br />
            <span style={{ color: '#28a745', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Seu Jardim.</span>
          </h1>
          <p style={styles.author}>Aprenda com as dicas do netinho.</p>
          <ul style={styles.checklist}>
    <li style={styles.checklistItem}><span style={styles.checkIcon}>✔️</span>Técnicas de jardinagem para iniciantes.</li>
    <li style={styles.checklistItem}><span style={styles.checkIcon}>✔️</span>Como escolher as plantas certas para seu espaço.</li>
    <li style={styles.checklistItem}><span style={styles.checkIcon}>✔️</span>Dicas de manutenção e cuidado com o solo.</li>
    <li style={styles.checklistItem}><span style={styles.checkIcon}>✔️</span>Soluções para hortas em pequenos apartamentos.</li>
</ul>
          <div style={styles.ctaContainer}>
            <p style={styles.deliveryInfo}>✔️ Receba imediatamente por E-mail</p>
            <a
              href={links.KIWIFY}
              style={styles.buyButton}
              onMouseEnter={(e) => handleBuyButtonHover(e, true)}
              onMouseLeave={(e) => handleBuyButtonHover(e, false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Adquirir Ebook R$14,90
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
