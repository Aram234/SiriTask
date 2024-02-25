import { CustomSelect } from "./ui";

const OPTIONS = Array.from(new Array(10)).map((_, index) => ({
  id: `${index}`,
  title: "samnfnkjsadnf - k",
}));

export default function App() {
  return (
    <div>
      <CustomSelect options={OPTIONS} />
    </div>
  );
}
