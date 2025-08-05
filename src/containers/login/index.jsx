import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import Logo from "../../assets/logoxp.png";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from "./styles";

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Hey, esse email não é válido 😭")
        .required("Vish, esqueceu do email"),
      password: yup
        .string()
        .min(6, "Hey, falta caracteres nessa senha 😭")
        .required("Vish, esqueceu da senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Tudo certo, aproveite 👌🤤",
        error: "Verifique seus dados 🤯",
      },
    );

    console.log(response);
  };

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

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>

        <Link>
          Não possui conta? <span>Clique aqui!</span>
        </Link>
      </RightContainer>
    </Container>
  );
}
