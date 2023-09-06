import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
const Accordion = (props: any) => {
  return (
    <div>
      <button
        onClick={props.toggle}
        className="w-full flex justify-between items-center pl-2 pt-3 pr-6 mb-10 "
      >
        <span className=" font-mono font-extrabold text-sm">{props.title}</span>
        {props.isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      <div>
        {props.isClicked && (
          <div className="px-2 pb-2 text-xs text-bold  text-neutral-500 leading-8 border border-x-0 border-t-0 border-neutral-700 ">
            {props.content}
          </div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
