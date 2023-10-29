import { useContext } from 'react';

import { LoadingBarContext } from '../contexts/LoadingBar';

export const useLoadingBar = () => {
  const { ref } = useContext(LoadingBarContext);
  return { ref };
};
