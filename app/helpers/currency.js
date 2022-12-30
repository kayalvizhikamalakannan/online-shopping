import { helper } from '@ember/component/helper';

export default helper(function currency(positional, named = {}) {
  const [number] = positional;
  const {
    sign = 'Rs.'
  } = named;
  const rupees = Math.floor(number);
  let cents = Math.floor(number * 100 % 100);

  if (cents.toString().length === 1) {
    cents = '0' + cents;
  }
  return '${sign}${rupees}.${cents}';
});
