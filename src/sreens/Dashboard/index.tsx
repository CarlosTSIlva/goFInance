import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Potho,
  User,
  UserGreting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transaction,
  Title,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Potho
              source={{ uri: "https://github.com/CarlosTeixeira615.png" }}
            />
            <User>
              <UserGreting>Ola,</UserGreting>
              <UserName>John Doe</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="entrou ontem"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.000,00"
          lastTransaction="entrou ontem"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="entrou ontem"
          type="total"
        />
      </HighlightCards>
      <Transaction>
        <Title>Listagem</Title>
        <TransactionCard />
      </Transaction>
    </Container>
  );
}
