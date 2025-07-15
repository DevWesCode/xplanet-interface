import {
  Button,
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from "./styles";
import Logo from "../../assets/logoxp.png";

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-planetax" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Planeta X!</span>
          <br />
          Acesse com seu
          <span> Login e senha.</span>
        </Title>

        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Button>Entrar</Button>
        </Form>

        <Link>Não possui conta? Clique aqui!</Link>
      </RightContainer>
    </Container>
  );
}
