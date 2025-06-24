import React, { useEffect, useState } from 'react';

const Alert = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className={`alert alert-${type}`}>
      {message}
      <button onClick={() => {
        setVisible(false);
        if (onClose) onClose();
      }} className="alert-close">
        &times;
      </button>
    </div>
  );
};

export default Alert;