import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

export default () => (
  <Container>
    <StatusBar barStyle="light-content" translucent={false} />
    <Logo />
  </Container>
);
