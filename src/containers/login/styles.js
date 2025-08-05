import styled from "styled-components";
import BackgroundLogin from "../../assets/back-galaxy.png";
import Background from "../../assets/background5.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url("${BackgroundLogin}");
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url("${Background}");
  background-size: cover;
  background-position: center;
  background-color: #999;

  p {
    font-size: 14px;
    line-height: 80%;
    height: 10px;
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 20px;

  span {
    color: rgb(241, 195, 42);
  }
`;

export const Form = styled.form`
  font-family: "Road Rage", sans-serif;
  color: rgb(241, 195, 42);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  label {
    font-size: 25px;
  }
`;

export const Link = styled.a`
  font-family: "Road Rage", sans-serif;
  color: rgba(255, 255, 255, 1);
  margin-top: 10px;

  span {
    font-family: "Road Rage", sans-serif;
    color: rgb(241, 195, 42);
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #e6b800;
    }
  }
`;
