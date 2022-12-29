import { Container, Logo } from './styles';
import { CaretLeft } from 'phosphor-react-native';
import logoImg from '@assets/logo.png';

export function Header() {
  return (
    <Container>
      <CaretLeft color="#ffffff" size={40} />
      <Logo source={logoImg} />
    </Container>
  );
}