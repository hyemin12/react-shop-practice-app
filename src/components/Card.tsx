import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, RootState } from "../modules/store";

function Card() {
  const initState = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();
  const [state, setState] = useState(initState);
  const filters = ["이름순", "가격순"];
  function handleFilter(filter: string) {
    const copyArr = [...state];
    if (filter === "가격순") {
      copyArr.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (filter === "이름순") {
      copyArr.sort(function (a, b) {
        const upperCaseA = a.title.toUpperCase();
        const upperCaseB = b.title.toUpperCase();
        if (upperCaseA! > upperCaseB!) return 1;
        if (upperCaseA! < upperCaseB!) return -1;
        return 0;
      });
    }
    setState(copyArr);
    console.log(copyArr);
  }
  return (
    <div className="card_container">
      <ul className="fiter_wrapper">
        {filters.map((filter) => (
          <li
            onClick={() => {
              handleFilter(filter);
            }}
            key={filter}
          >
            {filter}
          </li>
        ))}
      </ul>
      <div className="card_list">
        {state.map((item) => (
          <div className="card" key={item.id}>
            <a href={item.pieUrl} target="_blank" rel="noreferrer">
              <div className="card_video">
                <img src={item.thumbnail} alt={item.title} />
              </div>
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
                    dispatch(addItem(item));
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
    </div>
  );
}

export default Card;
