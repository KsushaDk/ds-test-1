import { useState } from "react";
import "./App.css";
import "../node_modules/@ds-test/styles/dist/styles.css";
import Button from "./components/button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" className="ds-link"></a>
        <a href="https://react.dev" target="_blank" className="ds-link"></a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          variant="primary"
          size="large"
          onClick={() => setCount((count) => count + 1)}
          value={`count is ${count}`}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs ds_link">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
