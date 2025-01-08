// CRIO_SOLUTION_START_MODULE_ONE
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
// CRIO_SOLUTION_END_MODULE_ONE
//it is the basic code of app.js provided be react
//you can change it accoriding to your need

// import React from 'react';
// import './App.css'; // Optional: Add component-specific styles here

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to React</h1>
//         <p>Edit <code>App.js</code> and save to reload.</p>
//       </header>
//     </div>
//   );
// }

// export default App;
