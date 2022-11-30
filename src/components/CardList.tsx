import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/store";
import Card from "./Card";
import Modal from "./Modal";

const CardList = () => {
  const initState = useSelector((state: RootState) => state.stock);
  const [state, setState] = useState(initState);
  const [isModal, setIsModal] = useState<boolean>(false);

  const filters = ["이름순", "가격순"];
  // filter 함수
  const handleFilter = (filter: string) => {
    const newArr = [...state];
    if (filter === "가격순") {
      newArr.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (filter === "이름순") {
      newArr.sort(function (a, b) {
        const upperCaseA = a.title.toUpperCase();
        const upperCaseB = b.title.toUpperCase();
        if (upperCaseA > upperCaseB) return 1;
        if (upperCaseA < upperCaseB) return -1;
        return 0;
      });
    }
    setState(newArr);
  };

  return (
    <div className="card_container">
      {isModal && (
        <Modal text={"장바구니에 추가되었습니다."} setIsModal={setIsModal} />
      )}
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
          <Card {...item} setIsModal={setIsModal} />
        ))}
      </div>
    </div>
  );
};
export default CardList;
