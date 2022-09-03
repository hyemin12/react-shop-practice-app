import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  minusCount,
  removeItem,
  removeAll,
  RootState,
} from "../modules/store";

function Cart() {
  const state = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  /* 총금액 계산 */
  const handleTotal = () => {
    let priceArr: number[] = [];
    state.map((order) => {
      const result = order.price * order.quan;
      // setTotalPrice(result)
      priceArr.push(result);
      const total = priceArr.reduce((a, b) => a + b);
      setTotalPrice(total);
    });
  };
  useEffect(() => {
    handleTotal();
  }, [state]);

  function handleOrder() {
    if (state.length === 0) {
      alert("장바구니가 비어있습니다.");
    } else {
      alert("준비중인 서비스입니다.");
    }
  }
  if (state.length === 0) {
    return (
      <aside>
        <div className="cart_container">
          <div>
            <h4 className="cart_title">장바구니가 비어있습니다.</h4>
            <p className="cart_subtitle">
              플러스 버튼을 눌러 장바구니에 추가해보세요.
            </p>
          </div>
        </div>
      </aside>
    );
  }
  return (
    <aside>
      <div className="cart_container">
        <div className="cart_list">
          {state &&
            state.map((item, i) => {
              const { thumbnail, title, id, price, quan } = item;
              return (
                <div key={i} className="cart_item_wrapper">
                  <div className="row_start">
                    <div className="cart_thumnail">
                      <video
                        src={thumbnail}
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <p>{title}</p>
                  </div>
                  <div className="row quan_price">
                    <div className="quan_wrapper">
                      <div
                        className="btn_quan"
                        onClick={() => {
                          dispatch(addCount(id));
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </div>
                      <p>{quan}</p>
                      <div
                        className="btn_quan"
                        onClick={() => {
                          dispatch(minusCount(id));
                        }}
                      >
                        <i className="fas fa-minus"></i>
                      </div>
                    </div>
                    <p>$ {price && quan && price * quan}</p>
                  </div>

                  <div
                    className="btn_delete position"
                    onClick={() => {
                      dispatch(removeItem(id));
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="total row">
          <h4>전체금액</h4>

          <div className="row_start">
            <p>$ {totalPrice}</p>
            <div
              className="btn_delete"
              onClick={() => {
                dispatch(removeAll());
              }}
            >
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </div>
        <button className="btn_order" onClick={handleOrder}>
          주문하기
        </button>
      </div>
    </aside>
  );
}

export default Cart;
