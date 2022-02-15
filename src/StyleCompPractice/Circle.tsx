import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string; //requierd
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor}; // interface 에 있기 때문에 넣어 주어야 함
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; // 없어도 됨.
  text?: string; // 기본값 설정 할 때
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [value, setValue] = useState<number | string>(0);
  setValue(2);
  setValue("hello");
  //setValue(true);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  ); // borderColor에 기본값 설정
}

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old. `;

sayHello({ name: "name", age: 12 });
// sayHello({ name: "name2", age: 22, hello: "hello" });

export default Circle;
