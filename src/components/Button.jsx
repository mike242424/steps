export default function Button({ children, onClick, color, backgroundColor }) {
  return (
    <button onClick={onClick} style={{ backgroundColor, color }}>
      {children}
    </button>
  );
}
