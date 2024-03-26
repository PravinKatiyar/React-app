import "./Tabutton.css";

export default function TabButton({ children, onSelect }) {
  return (
    <button className="button" onClick={onSelect}>
      {children}
    </button>
  );
}
