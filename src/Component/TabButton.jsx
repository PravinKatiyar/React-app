import "./Tabutton.css";

export default function TabButton({ children, onSelect ,isSelected}) {
  return (
    <button className={isSelected ? 'active' : 'inactive'} onClick={onSelect}>
      {children}
    </button>
  );
}
