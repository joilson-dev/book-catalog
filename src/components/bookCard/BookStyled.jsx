import styled from "styled-components";

const primaryColor = "#1d1b20";
const backgroundColor = "#f7f2fa";
const textColor = "#666";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.75rem;
  width: 340px;
  background: ${backgroundColor};
  color: ${textColor};
  font-size: 16px;
  padding: 16px;
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.h2`
  display: flex;
  color: ${primaryColor};
  text-align: center;
  align-items: stretch;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

const Autor = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin: 0;
`;

const DescAutor = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Text = styled.p`
  margin-top: 25px;
  margin-left: 0px;
`;

export { CardContainer, Image, Info, Title, Autor, DescAutor, Text };
