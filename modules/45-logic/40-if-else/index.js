// BEGIN
const normalizeUrl = (url) => {
  let normalizedUrl;
  if (url.startsWith('http://')) {
    normalizedUrl = url.slice(7);
  } else {
    normalizedUrl = url;
  }
  return `https://${normalizedUrl}`;
};
// END

module.exports = normalizeUrl;
