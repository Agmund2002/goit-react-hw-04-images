import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { servicePhoto } from 'api/services';
import { Notify } from 'notiflix';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

export class App extends Component {
  state = {
    images: [],
    inputValue: '',
    page: 1,
    loadMoreBtn: false,
    loader: false,
    error: false
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.addImages();
    }
  }

  async addImages() {
    try {
      const { inputValue, page } = this.state;
      this.setState({
        loader: true,
      });

      const { hits, totalHits } = await servicePhoto(inputValue, page);

      if (hits.length === 0) {
        Notify.failure('Nothing could be found for this query');
      }

      this.setState({
        images: [...this.state.images, ...hits],
        loadMoreBtn: this.state.page < Math.ceil(totalHits / 12),
      });
    } catch (_) {
      this.setState({
        error: true,
      });
    } finally {
      this.setState({
        loader: false,
      });
    }
  }

  getInputValue = value => {
    if (this.state.inputValue !== value) {
      this.setState({
        images: [],
        inputValue: value,
        page: 1,
      });
    } else {
      Notify.warning(
        'The result of this query is already displayed in front of you'
      );
    }
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, loadMoreBtn, error, loader } = this.state;

    return (
      <div>
        <Searchbar handlerSubmit={this.getInputValue} />
        {images.length > 0 && <ImageGallery data={this.state.images} />}
        {loader && <Loader visible={this.state.loader} />}
        {loadMoreBtn && <Button handlerClick={this.loadMore} />}
        {error && <ErrorMessage />}
      </div>
    );
  }
}
