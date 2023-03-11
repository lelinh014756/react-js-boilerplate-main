/* eslint-disable prefer-regex-literals */
/**
 * Password validator for login pages
 */
import value from '@styles/sass/abstracts/_variables.module.scss';

// type
export interface StrengthStatus {
  label: string;
  color?: string;
}

// has number
const hasNumber = (val: string) => new RegExp(/[0-9]/).test(val);

// has mix of small and capitals
const hasMixed = (val: string) =>
  new RegExp(/[a-z]/).test(val) && new RegExp(/[A-Z]/).test(val);

// has special chars
const hasSpecial = (val: string) => new RegExp(/[!#@$%^&*)(+=._-]/).test(val);

// set color based on password strength
export const strengthColor = (count: number): StrengthStatus => {
  if (count < 2) return { label: 'Kém', color: value.errorMain };
  if (count < 3) return { label: 'Yếu', color: value.warningDark };
  if (count < 4) return { label: 'Bình thường', color: value.orangeMain };
  if (count < 5) return { label: 'Tốt', color: value.successMain };
  if (count < 6) return { label: 'Mạnh', color: value.successDark };
  return { label: 'Poor', color: value.errorMain };
};

// password strength indicator
export const strengthIndicator = (val: string) => {
  let strengths = 0;
  if (val.length > 5) strengths += 1;
  if (val.length > 7) strengths += 1;
  if (hasNumber(val)) strengths += 1;
  if (hasSpecial(val)) strengths += 1;
  if (hasMixed(val)) strengths += 1;
  return strengths;
};
