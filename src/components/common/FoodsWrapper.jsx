import { useEffect, useState } from "react";
import Service from "../../services/service";
import FoodCard from "./FoodCard";
import { createPortal } from "react-dom";
import Loading from "./Loading";

const request = new Service("http://localhost:3000/");

export default function FoodsWrapper() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const id = setTimeout(() => {
      request.get("Menu").then((results) => {
        setFoods(results);
      });

      return () => {
        clearTimeout(id);
      };
    }, 5000);
  }, []);

  return (
    <ul className="foods-wrapper">

      {foods.length === 0 && createPortal(<Loading />, document.body)}

      {foods.length > 0 &&
        foods.map((food, i) => (
          <FoodCard
            key={i}
            img={food.image}
            title={food.name}
            basePrice={food.price}
          />
        ))}
    </ul>
  );
}
