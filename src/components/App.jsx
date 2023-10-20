import { useEffect, useRef, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { servicePhoto } from 'api/services';
import { Notify } from 'notiflix';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchParams, setSearchParams] = useState({
    inputValue: '',
    page: 1,
  });
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const controllerRef = useRef();

  useEffect(() => {
    if (searchParams.inputValue === '') {
      return;
    }

    async function addImages() {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      controllerRef.current = new AbortController();

      try {
        const { inputValue, page } = searchParams;
        setLoader(true);
        setLoadMoreBtn(false);

        const { hits, totalHits } = await servicePhoto(
          inputValue,
          page,
          controllerRef.current.signal
        );

        if (hits.length === 0) {
          Notify.failure('Nothing could be found for this query');
        }

        setImages([...images, ...hits]);
        setLoadMoreBtn(page < Math.ceil(totalHits / 12));
      } catch (error) {
        if (error.code === "ERR_CANCELED") {
          return;
        }
        
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    addImages();
  }, [searchParams]);

  const getInputValue = value => {
    setImages([]);
    setSearchParams({
      inputValue: value,
      page: 1,
    });
  };

  const loadMore = () => {
    setSearchParams({
      ...searchParams,
      page: searchParams.page + 1,
    });
  };

  return (
    <div>
      <Searchbar handlerSubmit={getInputValue} />
      {images.length > 0 && <ImageGallery data={images} />}
      {loader && <Loader visible={loader} />}
      {loadMoreBtn && <Button handlerClick={loadMore} />}
      {error && <ErrorMessage />}
    </div>
  );
};
