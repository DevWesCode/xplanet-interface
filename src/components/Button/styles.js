import styled from "styled-components";

export const ContainerButton = styled.button`
  font-family: "Road Rage", sans-serif;
  width: 100%;
  height: 52px;
  padding: 12px 20px;
  background-color: rgb(241, 195, 42);
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e6b800;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='black' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`;
