export default function AccountList({ records, onDelete }) {
  if (records.length === 0) {
    return (
      <div className="empty-state">
        <p>가계부가 없습니다</p>
      </div>
    );
  }

  return (
    <ul id="account-list" className="account-list">
      {records.map((a) => (
        <li key={a.id} className="account-item">
          <div className="account-info">
            <span className="date">{a.date}</span>
            <span className="description">{a.description}</span>
          </div>
          <span className={a.type ? "income-amount" : "expense-amount"}>
            {a.type ? "+" : "-"}
            {a.amount.toLocaleString()}원
          </span>
          <button className="delete-btn" onClick={() => onDelete(a.id)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
