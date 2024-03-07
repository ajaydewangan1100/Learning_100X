import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const refElem = useRef(null);
  useEffect(() => {
    refElem.current.focus();
  }, [refElem]);

  const handleButtonClick = () => {
    refElem.current.focus();
  };

  return (
    <div>
      <input type="text" ref={refElem} placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
