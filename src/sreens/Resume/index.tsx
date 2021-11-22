import React from 'react';
import { ToastAndroid } from 'react-native';
import { HistoryCar } from '../../components/HistoryCar';

import { Container, Header, Title } from './styles';

export function Resume() {
  return (
    <Container>
      <Header>
        <Title>Resulmo por categoria</Title>
      </Header>
      <HistoryCar title='compras' amount='Rs 150' color='red' />
    </Container>
  );
}
