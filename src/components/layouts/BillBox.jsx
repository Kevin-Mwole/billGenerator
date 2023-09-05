import { useContext } from "react";
import BillPrice from "../common/BillPrice";
import Button from "../common/Button";
import OffInput from "../common/OffInput";
import Price from "../common/Price";
import { MainContext } from "../../App";

export default function BillBox() {
  const { totalPrice } = useContext(MainContext);
  return (
    <section className="bill-box">
      <BillPrice>
        <Price price={totalPrice} />
        <p>:جمع کل سفارشات</p>
      </BillPrice>

      <BillPrice>
        <Price price={totalPrice*.5} />
        <p> :حق سرویس و کارمزد </p>
      </BillPrice>

      <BillPrice>
        <Price price={0} currency="درصد" />
        <p> :تخفیف</p>
      </BillPrice>

      <OffInput />

      <span className="flex1"></span>

      <div className="bg-yellow">
        <BillPrice>
          <Price price={(totalPrice*.5)+totalPrice} />
          <p> :مبلق قابل پرداخت</p>
        </BillPrice>
      </div>

      <Button pd={10}>ثبت سفارش</Button>
    </section>
  );
}
