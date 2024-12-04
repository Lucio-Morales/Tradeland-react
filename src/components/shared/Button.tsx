import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'primary',
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold focus:ring-2';
  const typeStyles =
    type === 'primary'
      ? 'bg-primary text-white hover:bg-primary-dark'
      : 'border border-primary text-primary hover:bg-primary-light hover:text-white';

  return (
    <button onClick={onClick} className={`${baseStyles} ${typeStyles}`}>
      {text}
    </button>
  );
};
