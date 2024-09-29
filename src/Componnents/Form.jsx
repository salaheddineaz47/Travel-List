import { useState } from "react";

export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!description.length) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItems(newItem);
    setQuantity(1);
    setDescription("");
  };
  const handleQuantity = function (e) {
    setQuantity(Number(e.target.value));
  };

  const handleDescription = function (e) {
    setDescription(e.target.value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ? 😍</h3>

      <select onChange={handleQuantity} value={quantity}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        onChange={handleDescription}
        value={description}
      />
      <button type="submit">Add</button>
    </form>
  );
}
