import React, { useState } from "react";

import { Button } from "../../components/forms/Button";
import { Input } from "../../components/forms/Input";
import { TransactionTypeButton } from "../../components/forms/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  const handleTransactionsTypeSelect = (type: "up" | "down") => {
    setTransactionType(type);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Fields>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsType>
            <TransactionTypeButton
              isActive={transactionType === "up"}
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect("up")}
            />
            <TransactionTypeButton
              isActive={transactionType === "down"}
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect("down")}
            />
          </TransactionsType>
        </Form>
        <Button title="Enviar" />
      </Fields>
    </Container>
  );
}
