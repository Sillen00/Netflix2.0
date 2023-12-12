import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledFooter = styled.footer`
  color: #fff;
  border-top: 1px solid #f2f2f2;
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;

  .footer-container {
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
    margin: 1rem 1.5rem;

    .navigation-links-box {
      display: flex;
      flex-direction: column;
      width: 130px;
    }

    .github-links-box {
      display: flex;
      flex-direction: column;
      width: 130px;
    }
  }

  a {
    max-width: 50px;
    color: #fff;
    text-decoration: none;
    :hover {
      opacity: 0.7;
    }
  }

  h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 3.5rem;
    font-weight: 500;
    white-space: nowrap;
    color: #fff;
    line-height: normal;
    @media (max-width: ${breakpoints.md}) {
      font-size: 3.25rem;
    }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 3rem;
      display: none;
    }
    @media (max-width: ${breakpoints.xs}) {
      font-size: 2.25rem;
      padding-top: 0.25rem;
    }
  }
`;
