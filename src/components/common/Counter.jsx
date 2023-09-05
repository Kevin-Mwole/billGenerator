import Button from "./Button";

export default function Counter({ handleOnInc, handleOnDec, value = 0 }) {
  function handleOnDecClick() {
    if (value > 0) handleOnDec(value - 1);
  }

  function handleOnIncClick() {
    handleOnInc(value + 1);
  }
  return (
    <div className="counter-wrapper">
      <Button onClick={handleOnIncClick}>
        <i className="bi bi-plus"></i>
      </Button>
      <span>{value}</span>
      <Button onClick={handleOnDecClick}>
        <i className="bi bi-dash"></i>
      </Button>
    </div>
  );
}
