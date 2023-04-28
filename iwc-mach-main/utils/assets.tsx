import Link from "next/link";
import styled from "styled-components";
import Flex from "../components/Flex";
import theme from "../theme";

export const ArLink = styled(Link)`
  display: flex;
  color: inherit;
`;

export const ArText = styled.span`
  margin: 0 0 0 10px;
`;

export const ExperienceSection = styled.section`
  background: ${theme.color.blackShade2};
`;

export const NewsletterLabel = styled.label`
  font-size: 14px;
  line-height: 20px;
  margin: 0px 43px 0px 0px;
  letter-spacing: 2px;
  width: auto;
  max-width: 100%;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
`;

export const NewsletterInput = styled.input`
  display: block;
  margin: 0px 0px 15px;
  border-width: 0px 0px 1px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: white;
  border-image: initial;
  border-radius: 0px;
  padding: 0px;
  color: rgb(225, 225, 225);
  background: transparent;
  border-bottom: 0px;
  height: auto;
  margin-left: 8px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  margin-bottom: 21px;
  outline: 0px;
  &::placeholder {
    color: white;
  }
`;

export const CountrySpan = styled.span`
  text-transform: uppercase;
  margin-left: 20px;
  line-height: 27px;
`;

export const CountryDiv = styled.div`
  font-size: 0.875rem;
  margin-right: 30px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const ServiceMenus = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const ServiceMenusList = styled.li`
  padding: 0px 15px;
  list-style: none;
`;

export const ListView = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  li {
    display: inline-block;
    max-width: 195px;
    margin: 0 15px 0 0;
    text-align: center;
    transition: transform 0.5s ease 0s;
    p {
      border-bottom: 1px solid rgb(162, 142, 83);
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 767px) {
      margin: 0 0 30px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const ProductCollectionSection = styled.section`
  background: ${theme.color.blackShade2};
`;

export const SliderFlexStyleOverride = styled(Flex)`
  flex: 1;
`;

export const ListMenusUl = styled.ul`
  display: flex;
  padding: 3px 10px 0px;
`;

export const ListMenus = styled.li`
  list-style: none;
  font-size: 0.875rem;
  line-height: 1.42857;
  letter-spacing: 1px;
  font-weight: 500;
  padding: 0px 14px;
`;
