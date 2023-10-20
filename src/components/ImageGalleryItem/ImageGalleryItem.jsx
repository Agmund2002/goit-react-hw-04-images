import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Img, ModalBtn } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalBtn type="button" onClick={toggleModalOpen}>
      <Img src={url} alt={alt} loading="lazy" />
      <Modal
        src={src}
        alt={alt}
        isOpen={isOpen}
        handlerClose={toggleModalOpen}
      />
    </ModalBtn>
  );
};