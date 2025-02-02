import { dynamics } from 'config';
import { WRAP_PATH, WRAP_UNWRAP_PATH } from 'config/urls';
import { Wallet } from 'features/wsteth/shared/wallet';
import { WrapForm } from 'features/wsteth/wrap/wrap-form/wrap-form';
import { Switch } from 'shared/components/switch';
import NoSsrWrapper from 'shared/components/no-ssr-wrapper';

import { WrapFaq } from './shared/wrap-faq/wrap-faq';
import { UnwrapForm } from './unwrap/unwrap-form';
import { GoerliSunsetBanner } from 'shared/banners/goerli-sunset';

const NAV_ROUTES = [
  { name: 'Wrap', path: WRAP_PATH },
  { name: 'Unwrap', path: WRAP_UNWRAP_PATH },
];

type WrapUnwrapLayoutProps = {
  mode: 'wrap' | 'unwrap';
};

export const WrapUnwrapTabs = ({ mode }: WrapUnwrapLayoutProps) => {
  const isUnwrapMode = mode === 'unwrap';
  return (
    <>
      <NoSsrWrapper>
        <Switch checked={isUnwrapMode} routes={NAV_ROUTES} />
        <GoerliSunsetBanner />
        <Wallet />
        {isUnwrapMode ? <UnwrapForm /> : <WrapForm />}
      </NoSsrWrapper>
      {!dynamics.ipfsMode && <WrapFaq />}
    </>
  );
};
