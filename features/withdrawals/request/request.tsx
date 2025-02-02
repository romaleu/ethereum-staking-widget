import { dynamics } from 'config';
import { RequestFormProvider } from './request-form-context';
import { RequestFaq } from '../withdrawals-faq/request-faq';
import { RequestForm } from './form';
import { RequestWallet } from './wallet';

export const Request = () => {
  return (
    <RequestFormProvider>
      <RequestWallet />
      <RequestForm />
      {!dynamics.ipfsMode && <RequestFaq />}
    </RequestFormProvider>
  );
};
