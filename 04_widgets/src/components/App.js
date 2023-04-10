import React, { useState } from "react";
// import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
// import Search from "./Search";

export default () => {
  const options = [
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Red",
      value: "red",
    },
  ];

  const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      {/* <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        label="Select a color"
      /> */}
      <Translate />
    </div>
  );
};
