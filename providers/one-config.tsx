import { PropsWithChildren, useContext, createContext } from 'react';
import invariant from 'tiny-invariant';

import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

import { dynamics } from 'config';

export const OneConfigContext = createContext<any>(null);

export const getOneConfig = () => {
  return {
    ...dynamics,
    ...serverRuntimeConfig,
    isClientSide: typeof window !== 'undefined',
  };
};

export const useOneConfig = () => {
  const context = useContext(OneConfigContext);
  invariant(context, 'Attempt to use `one config` outside of provider');
  return context;
};

export const OneConfigProvider = ({ children }: PropsWithChildren) => {
  // TODO: check object destructuring is fast or use memo?
  const contextValue = getOneConfig();

  return (
    <OneConfigContext.Provider value={contextValue}>
      {children}
    </OneConfigContext.Provider>
  );
};