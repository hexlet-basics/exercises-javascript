// BEGIN
const normalizeUrl = (url, domain) => {
  let normalizedUrl;
  if (url.startsWith('/')) {
    normalizedUrl = url.slice(1);
  } else {
    normalizedUrl = url;
  }
  return `https://${domain}/${normalizedUrl}`;
};
// END

export default normalizeUrl;
