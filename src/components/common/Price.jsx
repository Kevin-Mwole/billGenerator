

export default function Price({price,currency="تومان"}) {
  return <div className="price-wrapper">
    <p>{price}</p><p>{currency}</p>
  </div>
}