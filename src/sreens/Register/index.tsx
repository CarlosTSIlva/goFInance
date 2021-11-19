import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/forms/Button';
import { CategorySelectButton } from '../../components/forms/CategorySelectButton';
import { InputForm } from '../../components/forms/InputForm';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from './styles';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
});

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const handleTransactionsTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  };

  const handleSelectCategoryModal = () => {
    setCategoryModalOpen(!categoryModalOpen);
  };

  const handleRegister = (form: FormData) => {
    if (!transactionType) {
      Alert.alert('Selecione o tipo de transação');
      return;
    }

    if (category.key === 'category') {
      Alert.alert('Selecione a categoria');
      return;
    }
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.name,
    };
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Fields>
          <Form>
            <InputForm
              control={control}
              name='name'
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name='amount'
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />
            <TransactionsType>
              <TransactionTypeButton
                isActive={transactionType === 'up'}
                type='up'
                title='Income'
                onPress={() => handleTransactionsTypeSelect('up')}
              />
              <TransactionTypeButton
                isActive={transactionType === 'down'}
                type='down'
                title='Outcome'
                onPress={() => handleTransactionsTypeSelect('down')}
              />
            </TransactionsType>
            <CategorySelectButton
              onPress={handleSelectCategoryModal}
              title={category.name}
            />
          </Form>
          <Button title='Enviar' onPress={handleSubmit(handleRegister)} />
        </Fields>
        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
