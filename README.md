# 타입스크립트 쇼핑몰 앱

<a href="https://h-m-shop.netlify.app/" target="_blank"><img src="https://raw.githubusercontent.com/hyemin12/2022_portfolio/master/public/assets/tsc-shop.webp" alt="쇼핑몰" style="background-color:#ccc;" /></a>

<p>이미지를 클릭하면 사이트로 이동합니다.</p>

<br>

---

## @설명

#### 타입스크립트로 제작된 프로젝트입니다. 장바구니에 상품을 담고, 삭제할 수 있는 기능을 가지고 있습니다.

#### createSlice()를 사용하여 리듀서를 생성하였고, 각 리듀서의 state와 action을 관리하였습니다. 장바구니가 비어있을 때, 장바구니 state에 해당 아이템의 존재여부를 확인하고 존재할 경우 갯수가 추가되고 장바구니에 해당 아이템이 존재하지 않으면 장바구니에 추가하도록 설정했습니다. 또한 useSelector를 이용하여 state를 가져왔고, 생성한 action을 useDispatch를 사용하여 발생시켰습니다.

---

## @package

- react<br>
- typescript<br>
- react-router-dom
- redux<br>
- reduxjs/toolkit<br>
- netlify

---

## @기능

- 필터 기능을 이용한 아이템 정렬
- 장바구니에 아이템 추가
- 장바구니에서 수량 추가 및 삭제

<hr>
<br>
<br>

### @공부한 내용

### redux toolkit을 사용한 store 생성

#### 1. configureStore()

```js
"src/modules/store.ts";
const store = configureStore({
  reducer: {
    stock: stock.reducer,
    cart: cart.reducer,
  },
});

export default store;
```

> 만약 createStore()를 사용하고 싶다면 하단 내용 작성 후 사용하기

```js
import {legacy createstore as createstore} from 'redux'
```

<br><hr>
<br>

#### 2. createSlice()

<br>

사용방법

```js
"src/modules/store.ts";

// 기본값설정
const initialState= {}

// const 적지 않고 바로 createSlice()해도 됨
const 리듀서이름 = cretateSlice({
  name: '리듀서이름',
  initialState: '기본값설정'
  reducers: {
    // 액션 작성
  }
})

// 액션 사용을 위한 export
export const {액션명} = 리듀서이름.actions;

// store에 리듀서 저장
const store = configureStore({
  reducer:{
    리듀서이름: 리듀서이름.reducer
  }
})
export default store
```
