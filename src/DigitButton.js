import { ACTIONS } from "./App";

export default function DigitButton({ digit, dispatch }) {
  const handleDigitClick = () => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  };

  return <button onClick={handleDigitClick}>{digit}</button>;
}
