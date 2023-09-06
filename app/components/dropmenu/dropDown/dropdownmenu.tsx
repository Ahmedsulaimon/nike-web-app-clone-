const DropDown = (props: any) => {
  return (
    <div className=" ml-4 mb-4 leading-10">
      <button onClick={props.toggle} className=" font-normal ">
        <span>{props.title}</span>
      </button>
      <div className=" ml-6 text-neutral-500">
        {props.isOpen && <div className="p-2">{props.content}</div>}
      </div>
    </div>
  );
};
export default DropDown;
