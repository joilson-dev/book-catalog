import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.75rem;
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  width: 22.5rem;
  height: 16.25rem;
`;

const Info = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  color: #1d1b20;
  text-align: center;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
`;

const Text = styled.p`
  margin: 8px 0;
  color: #666;
  font-size: 14px;
`;

export { CardContainer, Image, Info, Title, Text };
