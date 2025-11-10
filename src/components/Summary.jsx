export default function Summary({ totalIncome, totalExpense, balance }) {
  return (
    <div className="summary">
      <div>
        <p>총 수입</p>
        <span className="income">{totalIncome.toLocaleString()}원</span>
      </div>
      <div>
        <p>총 지출</p>
        <span className="expense">{totalExpense.toLocaleString()}원</span>
      </div>
      <div>
        <p>잔액</p>
        <span className="balance">{balance.toLocaleString()}원</span>
      </div>
    </div>
  );
}
