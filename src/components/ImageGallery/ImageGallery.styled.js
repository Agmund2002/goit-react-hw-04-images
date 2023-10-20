import styled from 'styled-components';

export const List = styled.ul`
  padding: ${p => p.theme.spacing(4)};
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(4)};
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - ${p => p.theme.spacing(4)} * (4 - 1)) / 4);
`;
