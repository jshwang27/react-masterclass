기존 react 프로젝트를 타입스크립트로 변경.
변경하는 과정에서 에러가 발생하여 변경이 아닌 처음부터 다시 만듬.
같은 에러 반복.
프로젝트 초기화를 몇 번하여 깃도 새로 만듬.

일단 타입스크립트의 @type/styled-components 에서 계속 에러가 발생하기 때문에
react 에서 설치한 styled-components 로 설치해보니 진행이 된다.

다시 @type/styled-components 을 설치하고
tsconfig.json 에 절대경로 구문 ("baseUrl": "src") 을 추가하였다.
일단 에러가 없이 모듈을 읽어 오는 듯 하다.
