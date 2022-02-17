// BEGIN
// const buildUrl = (url, domain) => {
//   let normalizedUrl;
//   if (url.startsWith('/')) {
//     normalizedUrl = url.slice(1);
//   } else {
//     normalizedUrl = url;
//   }
//   return `https://${domain}/${normalizedUrl}`;
// };

const buildUrl = (path, domain) =>{
  if (path.startsWith("/")){
    return `https://${domain}${path}`;
  }
  return `https://${domain}/${path}`;
};
// END

export default buildUrl;
