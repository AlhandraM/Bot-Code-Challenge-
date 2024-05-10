import React from "react"; // Importing React library for building UI components
import BotsPage from "./BotsPage"; // Importing BotsPage component from the './BotsPage' file

function App() { // Define a functional component named App
  return (
    <div className="App"> {/* Start of the root container div with class name 'App' */}
      <BotsPage /> {/* Render the BotsPage component */}
    </div> {/* End of the root container div */}
  );
}

export default App; // Export the App component as default

