import React, { useState } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({ bots, addBot, deleteBot }) {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleEnlist = (bot) => {
    addBot(bot);
  };

  const handleViewDetails = (bot) => {
    setSelectedBot(bot);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  return (
    <div>
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          handleEnlist={handleEnlist}
          handleGoBack={handleGoBack}
        />
      ) : (
        <div className="ui four column grid">
          <div className="row">
            {bots.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                clickEvent={handleViewDetails}
                deleteBot={deleteBot}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BotCollection;
