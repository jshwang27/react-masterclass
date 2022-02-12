import styled, { keyframes } from "styled-components";

/* 넘어온 테마 속성에 접근이 가능. */
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// keyframe 을 import 하여 사용
const lotateAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${lotateAnimation} 1s linear infinite;
  /* span {
    // Box component 안의 span 태그를 지정. &를 사용하여 속성 추가 부여
    // 태그에 의존한 방법.
    font-size: 30px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  } */

  // component 를 가져와 사용하는 방식.
  ${Emoji} {
    &:hover {
      font-size: 70px;
    }
  }
`;

function Selectors() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
      <Emoji>😎</Emoji>
    </Wrapper>
  );
}

export default Selectors;
