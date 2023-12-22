import { CardContainer, Image, Info, Text, Title } from "./BookStyled";
function book({ thebook }) {
  return (
    <CardContainer>
      <Title>{thebook.title}</Title>
      <Image src={thebook.coverImage} alt="Capa do Livro" />
      <Info>
        <Text>
          Autor
          {thebook.author}
        </Text>
        <Text>{thebook.description}</Text>
      </Info>
    </CardContainer>
  );
}

export default book;
