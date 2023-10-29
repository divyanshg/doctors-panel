/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import LB from 'react-top-loading-bar';

export const LoadingBarContext = React.createContext<{
  ref: React.RefObject<any> | null;
}>({
  ref: null,
});

function LoadingBar({ children }: { children: React.ReactNode }) {
  const ref = useRef<any>(null);

  return (
    <LoadingBarContext.Provider value={{ ref }}>
      <LB color="#19A2F1" shadow height={6} ref={ref} />
      {children}
    </LoadingBarContext.Provider>
  );
}

export default LoadingBar;
