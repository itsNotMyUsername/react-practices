import React, { useRef, useEffect, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [visible, setVisible] = useState(false);
  const uiFormRef = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (uiFormRef.current.contains(event.target)) {
        return;
      }
      setVisible(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={uiFormRef}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${visible ? "visible active" : ""}`}
          onClick={() => setVisible(!visible)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${visible ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
