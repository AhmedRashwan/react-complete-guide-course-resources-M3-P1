import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import { Header } from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
