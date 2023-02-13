import React from "react";

type ModalProps = {
  bgColor?: string;
  modalStyles?: string;
  children: React.ReactNode;
};
export const Modal: React.FC<ModalProps> = ({
  bgColor = "bg-brand-purple",
  modalStyles = "",
  children,
}) => {
  return (
    <>
      <div className="modal-backdrop hidden md:block h-full w-full relative bg-black opacity-50" />
      <div
        className={`modal-container z-10 relative md:h-auto w-full md:max-w-[480px] md:w-[480px] md:card md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 ${bgColor} ${modalStyles} flex justify-center items-center`}
      >
        {children}
      </div>
    </>
  );
};
