import React from "react";

import checkIon from "../../../assets/images/checkIcon.svg";
import { Modal } from "../../../components";

type RulesModalProps = {
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RulesModal: React.FC<RulesModalProps> = ({ setShowRules }) => {
  const showHome = () => {
    setShowRules(false);
  };

  return (
    <Modal bgColor="bg-white" modalStyles="h-auto mx-[20px] card">
      <div className="flex flex-col items-center gap-[29px] pt-[30px] px-5 md:px-[34px] pb-[63px] md:pb-[54px]">
        <h1>RULES</h1>

        <div className="flex flex-col justify-center items-center gap-[33px]">
          <div className="flex flex-col justify-center items-center gap-[16px]">
            <h3 className="text-brand-purple self-start">OBJECTIVE</h3>
            <p className="text-gray">
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[16px]">
            <h3 className="text-brand-purple self-start">HOW TO PLAY</h3>
            <ol>
              <li className="pb-[11px]">
                <div className="flex flex-row items-center">
                  <h4 className="mr-[19px]">1</h4>
                  <p className="text-gray">Red goes first in the first game.</p>
                </div>
              </li>
              <li className="pb-[11px]">
                <div className="flex flex-row items-center">
                  <h4 className="mr-[19px]">2</h4>
                  <p className="text-gray">
                    Players must alternate turns, and only one disc can be
                    dropped in each turn.
                  </p>
                </div>
              </li>
              <li className="pb-[11px]">
                <div className="flex flex-row items-center">
                  <h4 className="mr-[19px]">3</h4>
                  <p className="text-gray">
                    The game ends when there is a 4-in-a-row or a stalemate.
                  </p>
                </div>
              </li>
              <li className="pb-[11px]">
                <div className="flex flex-row items-center">
                  <h4 className="mr-[19px]">4</h4>
                  <p className="text-gray">
                    The starter of the previous game goes second on the next
                    game.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <button
          className="bg-brand-pink hover:bg-success icon-btn h-[64px] w-[64px] absolute bottom-0 transform translate-y-1/2"
          onClick={showHome}
        >
          <img src={checkIon} className="mx-auto" />
        </button>
      </div>
    </Modal>
  );
};
