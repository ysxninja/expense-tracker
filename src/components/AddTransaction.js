import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Income");

  console.log(type);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const amountchecked =
      type == "Expense" ? -Math.abs(+amount) : Math.abs(+amount);

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000000),
      text,
      amount: amountchecked,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <label htmlFor="income">Type</label>
        <select
          name="income"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Income"> Income </option>
          <option value="Expense"> Expense</option>
        </select>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
