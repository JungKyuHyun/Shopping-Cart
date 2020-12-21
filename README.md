# :open_book: Shopping-Cart Project 

[![TypeScript-v3.7.5](https://img.shields.io/badge/TypeScript-v3.7.5-007ACC.svg)](https://www.typescriptlang.org/)
[![React-v16.12.0](https://img.shields.io/badge/React-v16.12.0-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Redux-v4.0.5](https://img.shields.io/badge/Redux-v4.0.5-764ABC.svg?logo=redux)](https://redux.js.org/)
[![Webpack-v4.41.5](https://img.shields.io/badge/Webpack-v4.41.5-8DD6F9.svg?logo=webpack)](https://webpack.js.org/)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-007ACC.svg)](https://code.visualstudio.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-181717.svg?logo=github)](https://github.com/JungKyuHyun/Shopping-Cart/pulls)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/JungKyuHyun/Shopping-Cart/blob/master/LICENSE)



- 상품 목록 페이지에서 상품을 보고, 장바구니에 상품을 추가할 수 있으며 장바구니 페이지에서 그 목록을 볼 수 있다. <br />
- 상품 목록 페이지에서는 `4개`의 상품씩 `페이징` 처리를 한다. <br />
- 장바구니에는 `최대 3개`의 상품만 담을 수 있다. <br />
- 장바구니에 담긴 상품은 브라우저를 `새로고침(reload)`해도 유지된다. <br />
- 상품은 최소한 `1개`의 수량을 가지고 있으며, 그 이상으로 설정할 수 있다. <br />
- 상품에는 쿠폰을 적용할 수 있는 상품과 없는 상품이 존재한다. <br />
- 만약 쿠폰 적용이 가능한 상품이라면, `자동으로 해당 쿠폰을 적용`한 화면을 보여준다. <br />
- 자동으로 쿠폰을 적용했더라도, 소비자는 쿠폰을 선택할 수 있다. <br />
- `정액 쿠폰`과 `정률 쿠폰`의 할인액이 같을 경우, `정액 쿠폰`으로 처리한다. <br />
- 모바일 이용자를 고려하여 버튼, 페이지네이션 등을 전체 UI를 유지하는 선에서 `오른쪽`에 위치시킨다. <br />
- 모달, 툴팁, 아이콘 등을 이용하여 `UX`를 향상 시킨다.


## :clock3: Project Period

2020.01.17 ~ 2020.01.23 (총 7일)

## :hammer: Installation

```javascript
npm i
```

## :bell: Usage

```javascript
npm start
```

If you enter `npm start` or `npm run start`, your browser open `http://localhost:3001/products`.

## :mag_right: Directory Structure

```
└── src
    ├── components
    ├── containers
    ├── models
    ├── pages
    ├── reducers
    ├── routes
    └── services
```

- 컴포넌트의 경우 `Atomic Design`을 간소화시켜 (`components`, `containers` / `PascalCase`)
- `models`에는 `entity model` 정의
- `pages`는 라우팅이 되는 가장 최상위 컴포넌트를 정의(`kebab-case`)
- `reducers`는 `reducer`, `action`, `selector` 정의(`camelCase`)
- `routes`는 라우팅 정의, 라우팅 관련 상수 정의
- `services`는 데이터에 대한 비즈니스 로직 처리(`camelCase`), `dummy data` 위치


## :penguin: Preview
#### 1-1. 상품 목록 페이지
![image](https://user-images.githubusercontent.com/42884032/72910546-078ad700-3d7c-11ea-8b4c-833f70a42cc2.png)


#### 1-2. 상품 목록 페이지 - 상품 장바구니에 넣기/빼기
![2020-01-23_01-04-38 (1)](https://user-images.githubusercontent.com/42884032/72910868-7f590180-3d7c-11ea-9c21-f1657ed4a895.gif)


#### 2-1. 장바구니 페이지 - 상품이 없을 경우
![image](https://user-images.githubusercontent.com/42884032/72911007-b6c7ae00-3d7c-11ea-9c1d-31245d9907d1.png)


#### 2-2. 장바구니 페이지 - 상품이 있을 경우
![image](https://user-images.githubusercontent.com/42884032/72911783-f642ca00-3d7d-11ea-8e57-48917e6c750c.png)


#### 2-3. 장바구니 페이지 - 상품 수량 수정
![2020-01-23_01-20-10 (1)](https://user-images.githubusercontent.com/42884032/72912282-c34d0600-3d7e-11ea-8778-e38380952791.gif)


#### 2-4. 장바구니 페이지 - 쿠폰 적용 불가 상품 선택(체크)시, 최종 결제 금액 변경 및 쿠폰 미적용(선택 불가)
![2020-01-23_01-25-07 (1)](https://user-images.githubusercontent.com/42884032/72912667-5128f100-3d7f-11ea-9385-c25ca5e371fd.gif)


#### 2-5. 장바구니 페이지 - 쿠폰 적용 상품 선택(체크)시, 최종 결제 금액 변경 및 할인 높은 쿠폰 자동 적용
![2020-01-23_01-28-40 (1)](https://user-images.githubusercontent.com/42884032/72912999-d8766480-3d7f-11ea-8e30-779b9de3af56.gif)


#### 2-6. 장바구니 페이지 - 쿠폰 적용/미적용 상품 같이 선택(체크)시, 쿠폰은 적용 가능 상품에만 적용
![image](https://user-images.githubusercontent.com/42884032/72913416-75390200-3d80-11ea-89eb-aa0e3afc0da8.png)


## :mag: Technical Skills

- 메인 라이브러리: React
- 메인 언어 및 문법: Typescript, RxJS, Javascript ES6+, JSX
- 상태 관리: redux, redux-observable
- 서버: webpack-dev-server
- UI Library: Ant Design
- 기타: git, Babel, eslint, prettier, lodash, local storage

## :pray: Contributing

Please PR.

## :trident: Collaboraters

정규현([JungKyuHyun](https://github.com/JungKyuHyun))

## :eyes: See also

My Development Blog: https://code-masterjung.tistory.com

## :copyright: License

[MIT](LICENSE)
