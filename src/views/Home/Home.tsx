import React from "react";

import logo from "../../assets/images/logo.svg";
import pvpIcon from "../../assets/images/player-vs-player.svg";
import { Modal } from "../../components";

import { HomeModal, RulesModal } from "./components";

export const Home: React.FC = () => {
  const [showRules, setShowRules] = React.useState(false);

  const bgColor = showRules ? "bg-brand-purple" : "bg-brand-purple-dark";

  return (
    <div
      className={`h-screen w-full ${bgColor} flex justify-center md:justify-between items-center`}
    >
      {!showRules && <HomeModal setShowRules={setShowRules} />}
      {showRules && <RulesModal setShowRules={setShowRules} />}
    </div>
  );
};
