import type { useUnwrapFormNetworkData } from '../hooks/use-unwrap-form-network-data';

import type { BigNumber } from 'ethers';
import type { FormControllerContextValueType } from 'features/wsteth/shared/form-controller/form-controller-context';

export type UnwrapFormInputType = {
  amount: null | BigNumber;
};

export type UnwrapFormNetworkData = ReturnType<
  typeof useUnwrapFormNetworkData
>['networkData'];

export type UnwrapFormDataContextValueType = UnwrapFormNetworkData &
  FormControllerContextValueType<UnwrapFormInputType> & {
    willReceiveStETH?: BigNumber;
  };
