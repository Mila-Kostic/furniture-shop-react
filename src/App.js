import React from "react";
import SectionT from "./components/section-top/SectionT";
import SectionD from "./components/section-down/SectionD";

function App() {
  return (
    <div className="app-container">
      <div>
        <SectionT />
      </div>
      <div>
        <SectionD />
      </div>
    </div>
  );
}

export default App;
