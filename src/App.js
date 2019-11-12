import React from "react";
import Routes from "./routes/Routes";
import { MeetingsProvider } from "./context/MeetingsContext";

function App() {
  return (
    <div className="App">
      <MeetingsProvider>
        <Routes />
      </MeetingsProvider>
    </div>
  );
}

export default App;
