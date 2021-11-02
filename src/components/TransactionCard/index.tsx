import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  CategoryName,
  Date,
} from "./style";

export function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento site</Title>
      <Amount>RS $ 12.000,00</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Desenvolvimento</CategoryName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  );
}
