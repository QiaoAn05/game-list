import styled from 'styled-components';
import navMenu from "/assets/svg/navMenu.svg"
import wallet from "/assets/svg/wallet.svg"
import userHead from "/assets/svg/userHead.svg"
import logo from "/assets/logos/F1M5_Logo.webp"

export default function Header() {
  return (
    <HeaderStyled>
        <div className='header-left'>
        <img src={navMenu} alt="nav menu"/>
        <img src={logo} alt="logo" />
        </div>
        <div  className='header-right'>
        <img src={wallet} alt="wallet icon" />
        <span>$1,990.6</span>
        <span>|</span>
        <img src={userHead} alt="user head icon" />
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