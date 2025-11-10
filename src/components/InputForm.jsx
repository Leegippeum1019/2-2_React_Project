import React, { useState } from "react";

export default function InputForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = () => {
    onAdd(description, amount, type);
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <div className="list-input">
        <input
          type="text"
          placeholder="내용을 입력하세요(예: 점심값, 월급)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="금액을 입력하세요"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="input-buttons">
        <button
          className={type === "income" ? "btn-income active" : "btn-income"}
          onClick={() => setType("income")}
        >
          수입
        </button>
        <button
          className={type === "expense" ? "btn-expense active" : "btn-expense"}
          onClick={() => setType("expense")}
        >
          지출
        </button>
      </div>

      <button id="list-add-btn" className="btn-add" onClick={handleSubmit}>
        추가하기
      </button>
    </div>
  );
}
