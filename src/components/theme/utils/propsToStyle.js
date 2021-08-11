import { breakpointsMedia } from './breakpointsMedia';

export function propsToStyle(propsName) {
  // eslint-disable-next-line func-names
  return function (props) {
    const propsValue = props[propsName];
    // vendo sé string ou numero
    if (typeof propsValue === 'string' || typeof propsValue === 'number') {
      return {
        [propsName]: propsValue,
      };
    }
    // vendo se é objeto
    if (typeof propsValue === 'object') {
      return breakpointsMedia({
        xs: { [propsName]: propsValue.xs },
        sm: { [propsName]: propsValue.sm },
        md: { [propsName]: propsValue.md },
        sl: { [propsName]: propsValue.sl },
        xl: { [propsName]: propsValue.xl },
      });
    }
    return '';
  };
}
