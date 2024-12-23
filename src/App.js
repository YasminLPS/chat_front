import React, { useState } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";

const App = () => {
  const [userName, setUserName] = useState(null);

  return (
    <div>
      {userName ? (
        <Chat userName={userName} />
      ) : (
        <Login onLogin={(name) => setUserName(name)} />
      )}
    </div>
  );
};

export default App;
