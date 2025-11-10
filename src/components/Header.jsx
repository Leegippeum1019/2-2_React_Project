export default function Header({ balance }) {
  return (
    <header>
      <h1>가계부</h1>
      <div className="head">현재 잔액</div>
      <div className="show">
        <span id="money">{balance.toLocaleString()}원</span>
      </div>
    </header>
  );
}
