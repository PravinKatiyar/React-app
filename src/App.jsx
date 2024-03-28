import PropsComponent from "./Component/PropsComponent.jsx";
import DynamicAttributeComponent from "./Component/DynamicAttributeComponent.jsx";
import RandomValueGenerator from "./Component/RandomValueGenerator.jsx";

export default function App() {
  return (
    <>
      <RandomValueGenerator />
      <DynamicAttributeComponent />
      <PropsComponent />
    </>
  );
}
