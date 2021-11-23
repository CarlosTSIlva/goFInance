import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryCar } from '../../components/HistoryCar';

import { Container, Header, Title, Content } from './styles';
import { useFocusEffect } from '@react-navigation/core';
import { categories } from '../../utils/categories';

interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface TotalByCategoryProps {
  name: string;
  total: string;
  color: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<
    TotalByCategoryProps[]
  >([]);

  const loadData = async () => {
    const collectionKey = '@gofinance:transactions';

    const response = await AsyncStorage.getItem(collectionKey);

    const responseFormatted = response ? JSON.parse(response) : [];
    const expensives = responseFormatted.filter(
      (expensive: TransactionData) => expensive.type === 'negative'
    );

    const totalByCategory = [] as TotalByCategoryProps[];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (category.name === expensive.category) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        const total = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        totalByCategory.push({
          name: category.name,
          color: category.color,
          total,
        });
      }
    });
    setTotalByCategories(totalByCategory);
  };
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Title>Resulmo por categoria</Title>
      </Header>
      <Content>
        {totalByCategories.map((totalByCategory) => (
          <HistoryCar
            key={totalByCategory.name}
            title={totalByCategory.name}
            amount={totalByCategory.total}
            color={totalByCategory.color}
          />
        ))}
      </Content>
    </Container>
  );
}
