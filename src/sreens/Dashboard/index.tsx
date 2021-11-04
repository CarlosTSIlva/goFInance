import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
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
  TransactionsList,
} from "./styles";

export function Dashboard() {
  const data = [
    {
      title: "desenvolvimento",
      amount: "R$ 13.000,00",
      category: { icons: "dollar-sign", name: "Comida" },
      date: "20/05/2020",
    },
    {
      title: "desenvolvimento",
      amount: "R$ 13.000,00",
      category: { icons: "dollar-sign", name: "Comida" },
      date: "20/05/2020",
    },
    {
      title: "desenvolvimento",
      amount: "R$ 13.000,00",
      category: { icons: "dollar-sign", name: "Comida" },
      date: "20/05/2020",
    },
    {
      title: "desenvolvimento",
      amount: "R$ 13.000,00",
      category: { icons: "dollar-sign", name: "Comida" },
      date: "20/05/2020",
    },
  ];

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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() }}
          renderItem={({ item }) => <TransactionCard data={item} />}
        ></TransactionsList>
      </Transaction>
    </Container>
  );
}
