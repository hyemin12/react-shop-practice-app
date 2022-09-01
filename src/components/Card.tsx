import { useSelector } from "react-redux";
import { ItemProps } from "../modules/stock";

function Card() {
  const data = useSelector((state: ItemProps[]) => state);
  return (
    <div className="cards_container">
      {data.map((item) => (
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
              <button className="btn_cart">
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
