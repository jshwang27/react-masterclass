import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// 여러개에 한번에 적용
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function AsAttrs() {
  return (
    <Father as="header">
      {/*Father를 header로 변경*/}
      {/*
      버튼을 a 태그로 변경해 주면서 스타일은 그대로 사용.
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>
      */}

      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default AsAttrs;
