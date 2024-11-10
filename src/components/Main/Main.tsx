import styled from 'styled-components';
import GameSection from './GameSection/GameSection';
import BannerSection from './BannerSection/BannerSection';

export default function Main() {
  return (
    <MainStyled>
      <BannerSection />
      <GameSection />
    </MainStyled>
  )
}

const MainStyled = styled.main`
  flex: 1;
  padding: 10px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
`;