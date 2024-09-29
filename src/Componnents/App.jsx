import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = function (newItem) {
    setItems((items) => [...items, newItem]);
  };
  const handleDeleteItem = function (id) {
    setItems(items.slice().filter((item) => item.id !== id));
  };

  const handleToggleItem = function (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = function () {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
