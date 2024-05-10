import React from "react";
import BotCard from "./BotCard"; // Importing the BotCard component

function BotArmy({ bots, clickEvent, removeBot }) {
  // Function to handle releasing a bot
  const handleRelease = (bot) => {
    removeBot(bot); // Call the removeBot function passed from parent component
  };

  return (
    // Outer div with class and styles
    <div className="ui segment inverted olive bot-army">
      {/* Grid with five columns */}
      <div className="ui five column grid">
        {/* Row to display the bot army */}
        <div className="row bot-army-row">
          {/* Heading for the bot army */}
          <strong>Your Bot Army</strong>
          {/* Mapping through the bots array to render each bot */}
          {bots.map((bot) => (
            // Each bot is wrapped in a column
            <div key={bot.id} className="column">
              {/* BotCard component with necessary props */}
              <BotCard
                bot={bot}
                deleteBot={removeBot} // Pass removeBot function as deleteBot prop
                clickEvent={clickEvent} // Pass clickEvent function as clickEvent prop
                releaseBot={() => handleRelease(bot)} // Pass handleRelease function as releaseBot prop
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BotArmy; // Export the BotArmy component

