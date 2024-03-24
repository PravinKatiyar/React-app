import "./Tabutton.css";

export default function TabButton({children, onSelect}) {
//   function handleClick() {
//     alert("Button is Clicked");
//   }
  return (
    <button className="button" onClick={onSelect}>
      {children}
    </button>
  );
}
