/**
 * Turns a fraction into a percent
 * @param {number} denominator denominator of the fraction
 * @param {number} numerator  numerator of the fraction
 * @return {number} rounded percent value of the fraction (or zero if invalid)
 */
export const calculatePercent = (denominator, numerator) => {
  return (denominator === 0) ? 0 : Math.round((numerator / denominator) * 100);
};
