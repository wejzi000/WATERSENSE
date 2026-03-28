import React from 'react';

export const BackgroundBeams = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob Cyan en haut à gauche */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] animate-pulse-slow" />
      {/* Blob Bleu Profond au centre droit */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse-slow delay-700" />
      {/* Blob Cyan en bas à droite */}
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-[110px] animate-pulse-slow delay-1000" />
    </div>
  );
};
