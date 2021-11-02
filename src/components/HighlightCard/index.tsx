import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LasTransaction,
} from "./styles";

interface Props {
  title: string;
  subtitle: string;
  icon: string;
}

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LasTransaction>Ultima transacao ontem </LasTransaction>
      </Footer>
    </Container>
  );
}
