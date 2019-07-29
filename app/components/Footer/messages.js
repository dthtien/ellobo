/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: `Data based on {bdsUrl}`,
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}
    `,
  },
});
