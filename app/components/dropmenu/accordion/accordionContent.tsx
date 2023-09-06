import { useState } from "react";
import Accordion from "./accordion";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
export default function AccordionContent() {
  const { nikeStoreData } = useFetchedData();
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const costumerService = nikeStoreData.getHelp.map((help) => (
    <ul className=" hover:text-gray-300">
      <li>
        <div>{help}</div>
      </li>
    </ul>
  ));
  const aboutUs = nikeStoreData.aboutNike.map((about) => (
    <ul className=" hover:text-gray-300">
      <li>{about}</li>
    </ul>
  ));
  const newMember = nikeStoreData.joinUs.map((join) => (
    <ul className=" hover:text-gray-300">
      <li>{join}</li>
    </ul>
  ));

  const accordions = [
    { title: "GET HELP", content: costumerService },
    { title: "ABOUT NIKE", content: aboutUs },
    { title: "JOIN US", content: newMember },
  ];
  return (
    <div className="border border-t-1 border-x-0 border-b-0 border-neutral-700 p-2 text-white w-full ">
      {accordions.map((accords, index) => (
        <Accordion
          key={index}
          title={accords.title}
          content={accords.content}
          isClicked={openAccordionIndex === index}
          toggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}
