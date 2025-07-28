const downloadFile = (fileName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${fileName} loaded`);
    }, Math.random() * 100);
  });
};

export {
  downloadFile,
}