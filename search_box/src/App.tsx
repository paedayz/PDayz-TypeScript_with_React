import React from "react";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <div className="App">
      <h1>My Web Application</h1>
      <UserSearch limitation={10} username={"Pdayz"} />
    </div>
  );
}

export default App;
