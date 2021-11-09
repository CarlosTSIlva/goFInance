import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { Button } from "../../components/forms/Button";
import { CategorySelectButton } from "../../components/forms/CategorySelectButton";
import { Input } from "../../components/forms/Input";
import { TransactionTypeButton } from "../../components/forms/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";

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
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const handleTransactionsTypeSelect = (type: "up" | "down") => {
    setTransactionType(type);
  };

  const handleSelectCategoryModal = () => {
    setCategoryModalOpen(!categoryModalOpen);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Fields>
        <Form>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Nome"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="nome"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Preço"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
            name="amount"
            defaultValue=""
          />
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
          <CategorySelectButton
            onPress={handleSelectCategoryModal}
            title={category.name}
          />
        </Form>
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </Fields>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
