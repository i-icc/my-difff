import * as React from "react";
import Diff from "./DiffViewer";
import './App.css'

const App: React.FC = () => {
  const [from, setFrom] = React.useState("ソーメンダンス");
  const [to, setTo] = React.useState("ラーメンダンス");

  const handleFromChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setFrom(e.currentTarget.value);
  };

  const handleToChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setTo(e.currentTarget.value);
  };

  return (
    <div className="App">
      <h1>Diff Viewer</h1>
      <div>
        <textarea value={from} onChange={handleFromChange} />
        <textarea value={to} onChange={handleToChange} />
      </div>
      <Diff from={from} to={to} />
    </div>
  );
};

export default App;
