import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import LogtengDevLogoLight from '@/assets/lotengdev-logo-light.svg';
import LogtengDevLogoDark from '@/assets/lotengdev-logo-dark.svg';

export function Brand({ url, onClick }) {
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const brandRef = useRef(null);

  useEffect(() => {
    if (brandRef.current) {
      const backgroundColor = window.getComputedStyle(brandRef.current).backgroundColor;
      const rgb = backgroundColor.match(/\d+/g);

      if (rgb) {
        const brightness = (0.299 * rgb[0]) + (0.587 * rgb[1]) + (0.114 * rgb[2]);
        setIsDarkBackground(brightness < 128); 
      }
    }
  }, []);

  return (
    <div className="pr-10 lg:border-r border-solid border-grey">
      <Link to={url} onClick={onClick}>
        <img
          className="h-7 lg:h-11"
          src={isDarkBackground ? LogtengDevLogoDark : LogtengDevLogoLight}
          alt="LogtengDev Logo"
        />
      </Link>
    </div>
  );
}

Brand.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDarkBackground: PropTypes.bool
};
