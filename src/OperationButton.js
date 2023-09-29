import { ACTIONS } from "./App";

export default function OperationButton({ operation, dispatch }) {
  const handleOperationClick = () => {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
  };

  return <button onClick={handleOperationClick}>{operation}</button>;
}
