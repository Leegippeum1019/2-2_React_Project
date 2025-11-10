import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Summary from "./components/Summary";
import AccountList from "./components/AccountList";
import "./App.css";

export default function App() {
  const [accounts, setAccounts] = useState(() => {
    return JSON.parse(localStorage.getItem("accounts")) || [];
  });
  const [filter, setFilter] = useState("all");

  // 💾 LocalStorage 자동 저장
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  // ✅ 추가 기능
  const addAccount = (description, amount, type) => {
    if (!description || !amount) return alert("내용과 금액을 입력해주세요!");

    const newAccount = {
      id: Date.now(),
      description,
      amount: Number(amount),
      type: type === "income", // true: 수입, false: 지출
      date: new Date().toLocaleDateString(),
    };

    setAccounts((prev) => [...prev, newAccount]);
  };

  const deleteAccount = (id) => {
    setAccounts((prev) => prev.filter((a) => a.id !== id));
  };

  // 🔍 필터링
  const filteredAccounts = useMemo(() => {
    if (filter === "all") return accounts;
    return accounts.filter((a) => (filter === "income" ? a.type : !a.type));
  }, [filter, accounts]);

  // 💰 총계 계산
  const totalIncome = useMemo(
    () => accounts.filter((a) => a.type).reduce((sum, a) => sum + a.amount, 0),
    [accounts]
  );

  const totalExpense = useMemo(
    () => accounts.filter((a) => !a.type).reduce((sum, a) => sum + a.amount, 0),
    [accounts]
  );

  const balance = totalIncome - totalExpense;

  return (
    <div className="container">
      <Header balance={balance} />
      <InputForm onAdd={addAccount} />
      <div className="list-buttons">
        {["all", "income", "expense"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "전체" : f === "income" ? "수입" : "지출"}
          </button>
        ))}
      </div>
      <Summary totalIncome={totalIncome} totalExpense={totalExpense} balance={balance} />
      <AccountList records={filteredAccounts} onDelete={deleteAccount} />
    </div>
  );
}
