const validArray = <T>(data: T) => Array.isArray(data) && data.length > 0;

export default validArray;
