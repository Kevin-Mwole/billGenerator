import { createContext, useState } from "react";
import BillBox from "./components/layouts/BillBox";
import FoodMenu from "./components/layouts/FoodMenu";


export const MainContext = createContext();

function App() {

  const [totalPrice, setTotalPrice] = useState(0);
  

  return (
    <div className="app">
      <MainContext.Provider value={{ totalPrice, setTotalPrice }}>
        <BillBox />
        <FoodMenu />
      </MainContext.Provider>
    </div>
  );
}

export default App;
