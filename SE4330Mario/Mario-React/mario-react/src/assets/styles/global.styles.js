import { create as createJss } from 'jss';
import preset from 'jss-preset-default';

const jss = createJss(preset());

const styles = {
  /*
 * Global styles only
 */
  '@global': {
    [`html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
    big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul,
    li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td`]: {
      margin: 0,
      padding: 0,
      border: 0,
      outline: 0,
      fontWeight: 'inherit',
      fontStyle: 'inherit',
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '100%',
      verticalAlign: 'baseline',
    },

    '*, :after, :before': {
      boxSizing: 'border-box',
    },
  },
};

jss.createStyleSheet(styles).attach();
export { jss };
