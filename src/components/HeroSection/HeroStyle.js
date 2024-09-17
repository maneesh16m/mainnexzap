import styled from "styled-components";
import _default from "../../themes/themes";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0px 3px;
  z-index: 1;
`;

