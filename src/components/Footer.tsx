import React from "react";
import styled from "styled-components";

const footerDatas = [
  {
    title: "넷플릭스 소개",
    href: "#",
  },
  {
    title: "고객 센터",
    href: "#",
  },
  {
    title: "미디어 센터",
    href: "#",
  },
  {
    title: "이용약관",
    href: "#",
  },
  {
    title: "개인정보",
    href: "#",
  },
  {
    title: "회사정보",
    href: "#",
  },
  {
    title: "문의하기",
    href: "#",
  },
  {
    title: "법적 고지",
    href: "#",
  },
  {
    title: "투자 정보",
    href: "#",
  },
  {
    title: "입사 정보",
    href: "#",
  },
  {
    title: "속도 테스트",
    href: "#",
  },
  {
    title: "오직 넷플릭스에서",
    href: "#",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
          <FooterLinkContent>
            {footerDatas.map((data) => (
              <FooterLink key={data.title + data.href} href={data.href}>
                {data.title}
              </FooterLink>
            ))}
            <FooterLink></FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>Netflix Rights Reserved.</FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 3rem 0;
  border-top: 1px solid rgb(25, 25, 25);
  background-color: #000000;

  @media (max-width: 48rem) {
    padding: 1.5rem 1.5rem 1.8rem 1.5rem;
  }
`;

const FooterLinkContainer = styled.div`
  width: 35rem;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 1.1rem;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2.1rem;

  @media (max-width: 48rem) {
    margin-top: 1.6rem;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 0.8rem;
  width: 8rem;
  margin-bottom: 1rem;
  text-decoration: none;
  padding: 0.3rem 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 48rem) {
    margin-bottom: 1rem;
  }
`;
const FooterDescContainer = styled.div`
  margin-top: 1.8rem;

  @media (max-width: 48rem) {
    margin-top: 1.5rem;
  }
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 1.8rem;
  text-align: center;
`;
