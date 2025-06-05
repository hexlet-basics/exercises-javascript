import { downloadFile } from "./api";

// BEGIN
export const downloadAll = (files) => {
  const tasks = files.map(downloadFile);
  return Promise.all(tasks);
};
// END

export default downloadAll;