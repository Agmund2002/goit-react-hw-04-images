import styled from 'styled-components';

export const FlexContainer = styled.div`
display: flex;
justify-content: center;
`

export const LoadMoreBtn = styled.button`
  width: 130px;
  height: 50px;

  color: #fff;
  background-color: ${p => p.theme.colors.mainBg};
  border-radius: 5px;

  cursor: pointer;
`;
