import React from "react";

function BotCard({ bot, clickEvent, deleteBot, releaseBot }) {
  // Define classes for different bot types
  const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
  };

  return (
    <div className="ui column">
      {/* Bot Card */}
      <div
        className="ui card"
        key={bot.id}
        onClick={() => (releaseBot ? releaseBot() : clickEvent(bot))}
      >
        {/* Bot Image */}
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        {/* Bot Content */}
        <div className="content">
          {/* Bot Name and Type */}
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          {/* Bot Catchphrase */}
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        {/* Bot Stats */}
        <div className="extra content">
          {/* Bot Health */}
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          {/* Bot Damage */}
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          {/* Bot Armor */}
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          {/* Delete Button */}
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(bot);
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
