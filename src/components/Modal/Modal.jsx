import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Modal = ({ src, alt, isOpen, handlerClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handlerClose}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      <img src={src} alt={alt} width={850} />
    </ReactModal>
  );
};
