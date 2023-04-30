import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

import "./Accordion.css";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    setExpandedIndex((expandedIndex) => {
      if (expandedIndex === index) {
        return -1;
      }
      return index;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={index}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
