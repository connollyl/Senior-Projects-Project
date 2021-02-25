/**
 * Format a phone number to (###) ###-####
 * @param {string} phoneNumberStr unformatted phone number
 */
export const formatPhoneNumber = (phoneNumberStr) => {
  const cleaned = (`${phoneNumberStr}`).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};
