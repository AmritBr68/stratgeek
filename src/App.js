// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import ContributionsTable from './ContributionsTable';
import CustomPieChart from './CustomPieChart';

const App = () => {
  // Dummy data for demonstration
  const contributionsData = [
    { contributor: 'User1', lineChanges: 100, fileChanges: 50, prs: 5 },
    { contributor: 'User2', lineChanges: 150, fileChanges: 70, prs: 8 },
    // Add more contributors as needed
  ];

  const prsCreatedData = {
    User1: 10,
    User2: 8,
    // Add more contributors as needed
  };

  const prsReviewedData = {
    User1: 5,
    User2: 12,
    // Add more contributors as needed
  };

  return (
    <div>
      <h1>GitHub Metrics Dashboard</h1>
      <ContributionsTable data={contributionsData} />
      <CustomPieChart/>
      {/* <PieChart data={prsCreatedData} title="Distribution of PRs Created" /> */}
      {/* <PieChart data={prsReviewedData} title="Distribution of PRs Reviewed" /> */}
    </div>
  );
};

export default App;
