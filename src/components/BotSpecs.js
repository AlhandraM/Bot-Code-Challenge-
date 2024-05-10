import React from "react";

// BotSpecs component takes in props: bot, handleEnlist, handleGoBack
function BotSpecs({ bot, handleEnlist, handleGoBack }) {
  // Object containing classes for different bot types
  const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
  };

  // JSX structure for displaying bot information
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id}>
        <div className="image">
          {/* Display bot avatar */}
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {/* Display bot name and corresponding icon based on bot class */}
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            {/* Display bot catchphrase */}
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            {/* Display bot health */}
            <i className="icon heartbeat red" />
            {bot.health}
          </span>

          <span>
            {/* Display bot damage */}
            <i className="icon lightning yellow" />
            {bot.damage}
          </span>
          <span>
            {/* Display bot armor */}
            <i className="icon shield blue" />
            {bot.armor}
          </span>
        </div>
        <div className="extra content">
          {/* Button to enlist bot, calls handleEnlist with bot as parameter */}
          <button className="ui mini button" onClick={() => handleEnlist(bot)}>
            Enlist
          </button>
          {/* Button to go back, calls handleGoBack */}
          <button className="ui mini button" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;

