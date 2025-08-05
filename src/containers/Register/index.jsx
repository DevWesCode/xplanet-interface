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

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required("Nome obrigatório"),
      email: yup
        .string()
        .email("Hey, esse email não é válido 😭")
        .required("Vish, esqueceu do email"),
      password: yup
        .string()
        .min(6, "Hey, falta caracteres nessa senha 😭")
        .required("Vish, esqueceu da senha"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais")
        .required("Cofirme sua senha"),
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
      api.post("/users", {
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Cadastro efetuado com sucesso 🙌",
        error: "Ops, algo deu errado! Tente novamente 🤯",
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
          Olá, novamente <span>Crie sua conta!</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

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

          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit">Criar Conta</Button>
        </Form>

        <Link>
          Já possui conta? <span>Clique aqui!</span>
        </Link>
      </RightContainer>
    </Container>
  );
}
