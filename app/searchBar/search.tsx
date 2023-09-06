import { useMemo, useRef, useState, useEffect } from "react";
export default function Search() {
  const [items, setItems] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  //const inputRef = useRef();
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (typeof item === "string") {
        return item.toLowerCase().includes(query.toLowerCase());
      }
      return false;
    });
  }, [items, query]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    let value = inputRef.current?.value;
    let x = value;
    if (!value || value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    //need to clear input field after submission
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <>
      search
      <input type="search" onChange={handleChange} value={query} />
      <form onSubmit={handleSubmit}>
        New Item:
        <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>items</h3>
      {filteredItems.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}
