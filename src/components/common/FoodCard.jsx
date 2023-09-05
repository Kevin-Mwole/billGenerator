import { useContext, useState } from "react";
import Counter from "./Counter";
import Price from "./Price";
import { MainContext } from "../../App";

export default function FoodCard({

  basePrice = 1000,
  img = "",
  title = "",

}) {
  const [count, setCount] = useState(0);
  const { setTotalPrice } = useContext(MainContext);


  function handleOnDec(value) {
    setCount(value);
    setTotalPrice((totalPrice) =>totalPrice - basePrice);
  }

  function handleOnInc(value) {
    setCount(value);
    setTotalPrice((totalPrice) =>totalPrice + basePrice);
  }

  return (
    <li className="food-card">
      <img src={img} alt="food" />

      <div className="food-card--info">
        <p>{title}</p>
        <Price price={basePrice} />
        <div className="food-card--total">
          <Counter
            value={count}
            handleOnDec={handleOnDec}
            handleOnInc={handleOnInc}
          />

          <Price price={count * basePrice} />
        </div>
      </div>
    </li>
  );
}
