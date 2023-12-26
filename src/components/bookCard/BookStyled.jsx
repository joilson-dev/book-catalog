import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.75rem;
  width: 340px;
  background: #f7f2fa;
`;

const Image = styled.img`
  height: 360px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Title = styled.h2`
  display: flex;
  color: #1d1b20;
  text-align: center;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

const Text = styled.p`
  margin: 8px 0;
  color: #666;
  font-size: 14px;
`;

export { CardContainer, Image, Info, Title, Text };
