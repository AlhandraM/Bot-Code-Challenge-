import React, { useState } from "react";
import BotCard from "./BotCard"; // Importing BotCard component
import BotSpecs from "./BotSpecs"; // Importing BotSpecs component

function BotCollection({ bots, addBot, deleteBot }) { // BotCollection component with props: bots, addBot, deleteBot
  const [selectedBot, setSelectedBot] = useState(null); // State variable to manage selected bot

  // Function to handle enlisting a bot
  const handleEnlist = (bot) => {
    addBot(bot);
  };

  // Function to handle viewing details of a bot
  const handleViewDetails = (bot) => {
    setSelectedBot(bot); // Set selected bot when viewing details
  };

  // Function to handle going back from bot details view
  const handleGoBack = () => {
    setSelectedBot(null); // Reset selected bot when going back
  };

  return (
    <div>
      {selectedBot ? ( // If a bot is selected, render BotSpecs component
        <BotSpecs
          bot={selectedBot}
          handleEnlist={handleEnlist}
          handleGoBack={handleGoBack}
        />
      ) : ( // Otherwise, render the list of bots
        <div className="ui four column grid">
          <div className="row">
            {bots.map((bot) => ( // Map through the bots array and render BotCard component for each bot
              <BotCard
                key={bot.id} // Unique key for each bot
                bot={bot} // Pass bot object as prop to BotCard
                clickEvent={handleViewDetails} // Pass handleViewDetails function as prop to BotCard
                deleteBot={deleteBot} // Pass deleteBot function as prop to BotCard
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BotCollection; // Export BotCollection component

