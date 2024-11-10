import styled from 'styled-components';

export default function Main() {
  return (
    <MainStyled>Main</MainStyled>
  )
}

const MainStyled = styled.main`
  background-color: gray;
  flex: 1;
  padding: 10px;
`;