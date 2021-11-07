import React, { useState } from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

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
  TransactionsList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const [data] = useState<DataListProps[]>([
    {
      id: "1",
      type: "positive",
      title: "desenvolvimento",
      amount: "R$ 13.000,00",
      category: { icon: "dollar-sign", name: "Comida" },
      date: "20/05/2020",
    },
    {
      id: "2",

      type: "negative",
      title: "desenvolvimento",
      amount: "R$ 13.000,00",
      category: { icon: "coffee", name: "Comida" },
      date: "20/05/2020",
    },
    {
      id: "3",

      type: "positive",
      title: "desenvolvimento",
      amount: "R$ 13.000,00",
      category: { icon: "shopping-bag", name: "Comida" },
      date: "20/05/2020",
    },
    {
      id: "4",

      type: "negative",
      title: "desenvolvimento",
      amount: "R$ 13.000,00",
      category: { icon: "dollar-sign", name: "Comida" },
      date: "20/05/2020",
    },
  ]);

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
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        ></TransactionsList>
      </Transaction>
    </Container>
  );
}
