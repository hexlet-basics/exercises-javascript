// BEGIN
const normalizeUrl = (site) => {
  if (site.includes('https://') === false) {
    return `https://${site}`;
  }
  return site;
}
// END

module.exports = normalizeUrl;
