import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { addItem, ItemProps } from "../modules/store";

interface CardProps {
  id: string;
  pieUrl: string;
  title: string;
  thumbnail: string;
  price: number;
  desc: string;
  quan: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}
function Card({
  id,
  pieUrl,
  title,
  thumbnail,
  price,
  desc,
  quan,
  setIsModal,
}: CardProps) {
  const item = {
    id,
    pieUrl,
    title,
    thumbnail,
    price,
    desc,
    quan,
  };
  console.log(item);
  const dispatch = useDispatch();

  return (
    <div className="card" key={id}>
      <a href={pieUrl} target="_blank" rel="noreferrer">
        <div className="card_video">
          <img src={thumbnail} alt={title} />
        </div>
      </a>
      <div className="card_body">
        <div className="card_title_wrapper">
          <div>
            <h4 className="card_title">{title}</h4>
            <p className="card_price">$ {price}</p>
          </div>
          <button
            className="btn_cart"
            onClick={() => {
              dispatch(addItem(item));
              setIsModal(true);
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <p className="card_desc">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
