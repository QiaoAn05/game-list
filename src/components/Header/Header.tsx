import styled from 'styled-components';
import navMenuIcon from "/assets/svg/navMenuIcon.svg"
import walletIcon from "/assets/svg/walletIcon.svg"
import userHeadIcon from "/assets/svg/userHeadIcon.svg"
import logo from "/assets/logos/F1M5_Logo.webp"

export default function Header() {
  return (
    <HeaderStyled>
        <div className='header-left'>
        <img src={navMenuIcon} alt="nav menu icon"/>
        <img src={logo} alt="logo" />
        </div>
        <div  className='header-right'>
        <img src={walletIcon} alt="wallet icon" />
        <span>$1,990.6</span>
        <span>|</span>
        <img src={userHeadIcon} alt="user head icon" />
        </div>

    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px 2px rgba(71, 71, 71, 0.3);

  .header-left, .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: #00a6ff;
    font-weight: bold;
  }
`;