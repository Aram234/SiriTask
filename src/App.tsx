import { CustomSelect } from "./ui";

const OPTIONS = Array.from(new Array(10)).map((_, index) => ({
  id: `${index}`,
  title: `Option - ${index}`,
}));

export default function App() {
  // const loaders = useSelectorsOptionsLoadersContext();

  return (
    <div>
      <CustomSelect options={OPTIONS} />
    </div>
  );
}
