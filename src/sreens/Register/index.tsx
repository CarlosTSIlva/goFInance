import React from "react";

import { Button } from "../../components/forms/Button";
import { Input } from "../../components/forms/Input";

import { Container, Header, Title, Form, Fields } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Fields>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Form>
        <Button title="Enviar" />
      </Fields>
    </Container>
  );
}
