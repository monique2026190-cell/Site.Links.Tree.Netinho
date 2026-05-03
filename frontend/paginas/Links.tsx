import React from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaStore,
  FaBook,
  FaVideo,
} from 'react-icons/fa';
import { links } from '../app.links';

const iconComponents: { [key: string]: React.ElementType } = {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaStore,
  FaBook,
  FaVideo,
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    background: 'linear-gradient(to right, #232526, #414345)',
    minHeight: '100vh',
    color: '#EAEAEA',
    textAlign: 'center',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '1rem',
    border: '3px solid #EAEAEA',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#D1D5DB',
    marginBottom: '2rem',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    width: '100%',
    maxWidth: '680px',
  },
  linkItem: {
    backgroundColor: '#1E1E1E',
    margin: '1rem 0',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out',
    border: '1px solid #444',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1.3rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: '10px',
  },
};

const Links: React.FC = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
  };

  return (
    <div style={styles.container}>
      <img src="https://i.pravatar.cc/150" alt="Avatar" style={styles.avatar} />
      <h2 style={styles.name}>Netinho Branquinho</h2>
      <p style={styles.subtitle}>Perfis Oficiais</p>
      <ul style={styles.linkList}>
        {links.map((link, index) => {
          const IconComponent = iconComponents[link.icon];
          return (
            <li
              key={index}
              style={styles.linkItem}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.link, color: link.color }}
              >
                {IconComponent && <IconComponent style={styles.icon} />} {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
