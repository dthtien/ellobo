import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.licenseMessage}
          values={{
            bdsUrl: <A href="https://batdongsan.com.vn/">batdongsan</A>,
          }}
        />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/dthtien">The Tien</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
