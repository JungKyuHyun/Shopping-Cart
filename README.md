# Shopping-Cart Project

- 상품 목록 페이지에서 상품을 보고, 장바구니에 상품을 추가할 수 있으며 장바구니 페이지에서 그 목록을 볼 수 있다. <br />
- 상품은 최소한 1개의 수량을 가지고 있으며, 그 이상으로 설정할 수 있다. <br />
- 상품에는 쿠폰을 적용할 수 있는 상품과 없는 상품이 존재한다. <br />
- 만약 쿠폰 적용이 가능한 상품이라면, 자동으로 해당 쿠폰을 적용한 화면을 보여준다. <br />

## :heavy_check_mark: 기존 기획에서 변경사항 또는 추가사항

- (변경사항) (기존) 상품페이지당 상품 수 5개 -> (변경) 4개 (antd에서는 column을 24로 나누기 때문에 짝수가 다루기가 더 편하다.) <br />
- (추가) 쿠폰 적용이 가능한 상품을 소비자가 선택했을 경우, `정액 할인`과 `비율 할인`중 더 할인이 많이 되는 쿠폰으로 자동 적용해준다. 물론 소비자는 쿠폰을 선택할 권리를 가지기 때문에 언제든지 수정 가능하다. <br />
- (추가) 장바구니 페이지에서 장바구니를 한번에 비울수 있도록 기능을 추가한다.

## :open_book: Introduction

This project is toy-project....

## :clock3: Project Period

2020-01-17 ~ 2020-01-23 (총 7일)

## :triangular_ruler: Installation

```javascript
npm i
```

## :bell: Usage

```javascript
npm start
```

If you enter `npm start` or `npm run start`, your browser open "http://localhost:3001/products".

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

프로젝트 규모가 작기 때문에, 아토믹 디자인 패턴을 간소화시켜 적용.

## :penguin: Preview
1-1. 상품 목록 페이지
![image](https://user-images.githubusercontent.com/42884032/72910546-078ad700-3d7c-11ea-8b4c-833f70a42cc2.png)

1-2. 상품 목록 페이지 - 상품 장바구니에 넣기/빼기
![2020-01-23_01-04-38 (1)](https://user-images.githubusercontent.com/42884032/72910868-7f590180-3d7c-11ea-9c21-f1657ed4a895.gif)

2-1. 장바구니 페이지 - 상품이 없을 경우
![image](https://user-images.githubusercontent.com/42884032/72911007-b6c7ae00-3d7c-11ea-9c1d-31245d9907d1.png)

2-2. 장바구니 페이지 - 상품이 있을 경우
![image](https://user-images.githubusercontent.com/42884032/72911783-f642ca00-3d7d-11ea-8e57-48917e6c750c.png)



## :mag: Thchnical Skills

- 메인 라이브러리: React
- 메인 언어: Typescript, RxJS, Javascript, JSX
- 상태 관리: redux, redux-observable
- 서버: webpack-dev-server
- UI-library: Ant Design
- 기타: git, Babel, eslint, prettier, lodash

## :pray: Contributing

Please PR.

## :trident: Collaboraters

정규현([JungKyuHyun](https://github.com/JungKyuHyun))

## :eyes: See also

Development Blog: https://code-masterjung.tistory.com/

## :traffic_light: License

[MIT](LICENSE)
