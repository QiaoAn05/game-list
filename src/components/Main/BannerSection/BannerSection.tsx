import styled from "styled-components";
import banner from "/assets/images/banner-bg.png"
import bellIcon from "/assets/svg/bellIcon.svg"

export default function BannerSection() {
  return (
    <BannerSectionStyled>
        <img src={banner} alt="image banner" />
        <span>
            <img src={bellIcon} alt="bell icon" />
            ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </span>
    </BannerSectionStyled>
  )
}

const BannerSectionStyled = styled.section`
  /* background-color: blue; */
  height: 35%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    border-radius: 10px;
    width: 100%;
    height: 80%;
  }

  span {
    display: flex;
    gap: 5px;
    font-size: 0.8rem;
    color: #00a6ff;
    img {
        width: 15px;
        height: 15px; 
    }
  }
`;