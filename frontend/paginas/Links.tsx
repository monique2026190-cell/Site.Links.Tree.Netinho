import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaTiktok,
  FaStore,
  FaVideo,
  FaYoutube,
} from 'react-icons/fa';
import { links } from '../app.links';
import avatar from '../assets/avatar.jpg';

const iconMapping: { [key: string]: React.ElementType } = {
  EBOOK: FaStore,
  INSTAGRAM: FaInstagram,
  TIKTOK: FaTiktok,
  KWAI: FaVideo,
  YOUTUBE: FaYoutube,
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
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#EAEAEA',
    fontWeight: '600',
    marginTop: '2rem',
    marginBottom: '1rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid #555',
    width: '90%',
    maxWidth: '680px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    width: '100%',
    maxWidth: '680px',
  },
  link: {
    backgroundColor: '#1E1E1E',
    margin: '1rem 0',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out',
    border: '1px solid #444',
    textDecoration: 'none',
    fontSize: '1.3rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#EAEAEA',
  },
  icon: {
    marginRight: '10px',
  },
};

const Links: React.FC = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
  };

  return (
    <div style={styles.container}>
      <img src={avatar} alt="Avatar" style={styles.avatar} />
      <h2 style={styles.name}>Netinho Branquinho</h2>
      <p style={styles.subtitle}>Redes Sociais</p>
      <div style={styles.linkList}>
        {Object.entries(links)
        .filter(([key]) => key !== 'KIWIFY')
        .map(([text, url], index) => {
          const displayText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
          const IconComponent = iconMapping[text.toUpperCase()];
          const isInternalLink = url.startsWith('/');

          const linkContent = (
            <>
              {IconComponent && <IconComponent style={styles.icon} />} {displayText}
            </>
          );

          return isInternalLink ? (
            <Link
              key={index}
              to={url}
              style={styles.link}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {linkContent}
            </Link>
          ) : (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {linkContent}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
