import React from "react";

export const ModalWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      <div className="flex h-full w-full flex-col gap-4 rounded-md bg-slate-900 p-4 shadow-xl sm:h-min sm:w-min sm:min-w-[400px]">
        {children}
      </div>
    </div>
  );
};
