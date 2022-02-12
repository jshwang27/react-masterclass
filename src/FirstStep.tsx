import styled from "styled-components";

//백틱 (``) 을 사용하여 내부에 css를 설정.
const Father = styled.div`
  display: flex;
`;

// props를 받아 하나에서 처리. 태그의 props (bgColor) 와 이름을 같게 해야 함.
// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// 각각 설정 시.
// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;

const Text = styled.span`
  color: white;
`;

// Box의 전체를 가져온 후 radius만 추가. bgColor도 그대로 설정 가능.
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

function FirstStep() {
  return (
    <Father>
      {/* <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato" />
      <Circle bgColor="skyblue" /> */}
    </Father>
  );
}

export default FirstStep;
