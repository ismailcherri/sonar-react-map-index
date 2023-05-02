export default function Items() {
  const items = [
    { name: "item 1" },
    { name: "item 2" },
    { name: "item 3" },
    { name: "item 4" },
    { name: "item 5" },
    { name: "item 6" },
  ];

  const mappedItems = items.map((item, index) => {
    return { ...item, id: index };
  });

  return (
    <>
      {mappedItems.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
}
