import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, removeItem, RootState } from "../modules/store";

function Cart() {
  const state = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {}, [state]);
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
                <div key={i}>
                  <div className="row_start">
                    <div className="cart_thumnail">
                      <video
                        src={thumbnail}
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <p>{title}</p>
                  </div>
                  <div className="row">
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

                  <div className="row_right">
                    <div
                      className="btn_delete"
                      onClick={() => {
                        dispatch(removeItem(id));
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="total row">
          <h4>전체금액</h4>

          <div className="row_start">
            <p>$</p>
            <div className="btn_delete">
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </div>
        <button className="btn_order">주문하기</button>
      </div>
    </aside>
  );
}

export default Cart;
