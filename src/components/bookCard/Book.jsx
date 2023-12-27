import {
  Autor,
  CardContainer,
  DescAutor,
  Image,
  Info,
  Title,
  Text,
} from "./BookStyled";
function book({ thebook }) {
  return (
    <CardContainer>
      <Title>{thebook.title}</Title>
      <Image src={thebook.coverImage} alt="Capa do Livro" />
      <Info>
        <Autor>Autor</Autor>
        <DescAutor>{thebook.author}</DescAutor>
        <Text>{thebook.description}</Text>
      </Info>
    </CardContainer>
  );
}

export default book;
