import React from "react";
// in development right now
// import SignIn from "./components/signin";
// import Dashboard from "./components/dashboard";
import PrimarySearchAppBar from "./components/Appbar";
import Album from "./components/Album";


function App() {
  return (
  <div style={{textAlign:"center"}}>
  <PrimarySearchAppBar />
  <Album />
  </div>
  );
}

export default App;
