import React, { useEffect, useState } from "react";
import BotsCollection from "./BotCollection";
import BotArmy from "./YourBotArmy";
import SortBar from "./SortBar";

function BotsPage() {
  // State for all bots
  const [bots, setBots] = useState([]);
  // State for sorted bots
  const [sortedBots, setSortedBots] = useState([]);
  // State for the selected sorting option
  const [sortOption, setSortOption] = useState(null);

  // Fetch bots data when component mounts
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => {
        // Set bots and sorted bots initially
        setBots(data);
        setSortedBots(data);
      });
  }, []);

  // State for enlisted bot classes
  const [enlistedClasses, setEnlistedClasses] = useState([]);

  // Add a bot to the army
  const addBot = (bot) => {
    // Check if the bot is not already enlisted and its class is not enlisted
    if (!bot.army && !enlistedClasses.includes(bot.bot_class)) {
      // Update bot's army status
      setBots((prevBots) =>
        prevBots.map((b) => (b.id === bot.id ? { ...b, army: true } : b))
      );
      // Add bot's class to enlisted classes
      setEnlistedClasses((prevClasses) => [...prevClasses, bot.bot_class]);
    }
  };

  // Remove a bot from the army
  const removeBot = (bot) => {
    // Update bot's army status
    setBots((prevBots) =>
      prevBots.map((b) => (b.id === bot.id ? { ...b, army: false } : b))
    );
    // Remove bot's class from enlisted classes
    setEnlistedClasses((prevClasses) =>
      prevClasses.filter((className) => className !== bot.bot_class)
    );
  };

  // Delete a bot from the list
  const deleteBot = (bot) => {
    // Remove bot from the bots list
    setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
    // Remove bot's class from enlisted classes
    setEnlistedClasses((prevClasses) =>
      prevClasses.filter((className) => className !== bot.bot_class)
    );
  };

  // Handle sorting of bots
  const handleSort = (option) => {
    // Set the selected sorting option
    setSortOption(option);
    // Sort bots based on the selected option
    if (option === "health") {
      setSortedBots([...bots].sort((a, b) => a.health - b.health));
    } else if (option === "damage") {
      setSortedBots([...bots].sort((a, b) => a.damage - b.damage));
    } else if (option === "armor") {
      setSortedBots([...bots].sort((a, b) => a.armor - b.armor));
    }
  };

  return (
    <div>
      {/* Component to display enlisted bots */}
      <BotArmy
        bots={bots.filter((b) => b.army)}
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      {/* Component for sorting options */}
      <SortBar handleSort={handleSort} />
      {/* Component to display all bots */}
      <BotsCollection
        bots={sortOption ? sortedBots : bots}
        addBot={addBot}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default BotsPage;

