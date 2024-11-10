import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderStyled>Header</HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background-color: blue;
  padding: 10px;
`;