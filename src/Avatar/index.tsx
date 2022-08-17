import React from 'react';

interface AvatarProps {
  alt?: string;
  src: string;
  size: 'small' | 'medium' | 'large';
  round?: boolean;
}

export default (props: AvatarProps) => {
  const { alt, src, size = 'medium', round } = props;

  return (
    <>
      <img
        className={`nes-avatar ${round && 'is-rounded'} ${
          size && `is-${size}`
        }`}
        alt={alt}
        src={src}
        style={{ imageRendering: 'pixelated' }}
      />
    </>
  );
};
