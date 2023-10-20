import { RotatingLines } from 'react-loader-spinner';
import { FlexContainer } from './Loader.styled';

export const Loader = ({visible}) => {
  return (
    <FlexContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={visible}
      />
    </FlexContainer>
  );
};
