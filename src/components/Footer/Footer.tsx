import styled from 'styled-components';
import sportsIcon from "/assets/svg/sportsIcon.svg"
import favoriteIcon from "/assets/svg/favoriteIcon.svg"
import inviteIcon from "/assets/svg/inviteIcon.svg"
import casinoLiveIcon from "/assets/svg/casinoLiveIcon.svg"
import cashierIcon from "/assets/svg/cashierIcon.svg"

export default function Footer() {
  return (
    <FooterStyled>
      <div className='footer-menu-item'>
        <img src={sportsIcon} alt="sport icon" />
        SPORTS
      </div>
      <div  className='footer-menu-item'>
      <img src={favoriteIcon} alt="favorites icon" />
        FAVORITES
      </div>
      <div  className='footer-menu-item'>
      <img src={inviteIcon} alt="invite icon" />
        INVITE
      </div>
      <div className='footer-menu-item'>
      <img src={casinoLiveIcon} alt="casino live icon" />
        CASINO LIVE
      </div>
      <div className='footer-menu-item'>
      <img src={cashierIcon} alt="cashier icon" />
        CASHIER
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: dimgray;

  .footer-menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    img {
      width: 22px;
      height: 22px;
    }
  }
`;