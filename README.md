# 타입스크립트 쇼핑몰 앱

<a href="https://h-m-shop.netlify.app/" target="_blank"><img src="https://github.com/hyemin12/portfolio_renewal/blob/master/public/assets/tsc-shop.png?raw=true" alt="쇼핑몰" style="background-color:#ccc;" /></a>

<p>이미지를 클릭하면 사이트로 이동합니다.</p>

<br>
<hr>
<br>

## - 패키지

-react<br>
-typescript<br>
-react-redux<br>
-reduxjs/toolkit<br>
<br>

<hr>
<br>

## - redux toolkit을 사용한 store 생성

### 1. configureStore()

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

### 2. createSlice()

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
