import { Communication } from "../../characters/components/communication";
import { List } from "../../characters/components/list";

function App() {
  return (
    <>
      <div>
        <List></List>
      </div>
      <div className="comunications">
        <Communication></Communication>
      </div>
    </>
  );
}

export default App;
