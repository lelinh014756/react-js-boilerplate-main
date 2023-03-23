/* eslint-disable @typescript-eslint/no-explicit-any */
const validFunction = (data: any): data is <T>(data: T) => void =>
  typeof data === 'function';

export default validFunction;
