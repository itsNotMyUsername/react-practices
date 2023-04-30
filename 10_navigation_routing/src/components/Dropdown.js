import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const divEl = useRef();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    if (value && option.value === value.value) {
      return null;
    }

    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleSelected(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        onClick={handleOpen}
        className="flex justify-between items-center cursor-pointer"
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full max-w-xs w-40">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
