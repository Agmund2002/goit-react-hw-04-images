import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Img, ModalBtn } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  toggleModalOpen = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  }

  render() {
    const { url, src, alt } = this.props;

    return (
      <ModalBtn type="button" onClick={this.toggleModalOpen}>
        <Img src={url} alt={alt} loading="lazy" />
        <Modal src={src} alt={alt} isOpen={this.state.isOpen} handlerClose={this.toggleModalOpen} />
      </ModalBtn>
    );
  }
}
