// BEGIN
const normalizeUrl = (site) => {
  if (!site.includes('https://')) {
    return `https://${site}`;
  }
  return site;
};
// END

module.exports = normalizeUrl;
