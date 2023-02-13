import React from "react";

import logo from "../../../assets/images/logo.svg";
import pvpIcon from "../../../assets/images/player-vs-player.svg";
import { Modal } from "../../../components";

type HomeModalProps = {
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HomeModal: React.FC<HomeModalProps> = ({ setShowRules }) => {
  const showRules = () => {
    setShowRules(true);
  };

  return (
    <Modal modalStyles="h-full">
      <div className="flex flex-col justify-center items-center w-full h-full gap-[79px] md:pt-[70px] px-5 md:px-10 md:pb-[60px] max-w-[480px]">
        <img src={logo} alt="logo" className="h-[52px] w-[52px]" />

        <div className="flex flex-col justify-center md:justify-end items-center w-full md:h-full gap-[30px]">
          <button className="play-btn bg-brand-yellow btn-primary h-[72px]">
            <h2 className="text-black">PLAY</h2>
            <img src={pvpIcon} alt="pvp" className="h-[46px] w-[82px] " />
          </button>
          <button
            className="rules-btn bg-white w-full btn-primary h-[72px]"
            onClick={showRules}
          >
            <h2 className="text-black">GAME RULES</h2>
          </button>
        </div>
      </div>
    </Modal>
  );
};
