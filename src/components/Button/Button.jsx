import { FlexContainer, LoadMoreBtn } from "./Button.styled"

export const Button = ({ handlerClick}) => {
    return (
      <FlexContainer>
        <LoadMoreBtn type="button" onClick={handlerClick}>
          Load more
        </LoadMoreBtn>
      </FlexContainer>
    );
}