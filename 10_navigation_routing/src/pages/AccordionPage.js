import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      label: "a",
      content: "aa",
    },
    {
      label: "b",
      content: "bb",
    },
    {
      label: "c",
      content: "cc",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
