import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 80px; // Match the Navbar height
  display: flex;
  justify-content: center;
  align-items: center; // Center content vertically
  background-color: ${({theme}) => theme.card_light}; // Match Navbar background
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center; // Center content horizontally
  align-items: center;
  padding: 0 24px;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>© 2023 NexZap. All rights reserved</Logo>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;