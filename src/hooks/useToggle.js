//useToggle hook
import { useState } from "react";

function useToggle(initialState = true) {
  const [value, setValue] = useState(initialState);
  function toggle() {
    setValue((preValue) => !preValue);
  }
  return [value, toggle];
}
export default useToggle;
