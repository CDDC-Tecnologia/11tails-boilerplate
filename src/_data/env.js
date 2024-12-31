const isDev = process.env.ELEVENTY_PRODUCTION === false;
const baseUrl = isDev ? `localhost:port` : `https://betimcard.com/`;
const site = {
  baseUrl,
}
module.exports = site;
