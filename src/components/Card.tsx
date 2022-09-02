import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCart, RootState } from "../modules/store";

function Card() {
  const state = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();
  return (
    <div className="cards_container">
      {state.map((item) => (
        <div className="card" key={item.id}>
          <a href={item.pieUrl} target="_blank" rel="noreferrer">
            <video src={item.thumbnail} autoPlay loop className="card_video" />
          </a>
          <div className="card_body">
            <div className="card_title_wrapper">
              <div>
                <h4 className="card_title">{item.title}</h4>
                <p className="card_price">$ {item.price}</p>
              </div>
              <button
                className="btn_cart"
                onClick={() => {
                  dispatch(addCart(item.id));
                }}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <p className="card_desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
