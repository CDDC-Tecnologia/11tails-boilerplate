// https://www.aleksandrhovhannisyan.com/blog/useful-11ty-filters/
const isDev = process.env.ELEVENTY_PRODUCTION === false;

// const baseUrl = isDev ? `localhost:port` : `https://www.your-domain.com/`;
const provider = isDev ? `localhost:8080` : `https://wsrv.nl/?url=`;
const bucket = `https://pubbr.raszio.com/betimcard.com`;
const url = `${provider}${bucket}`

const cdn = {
  url
}

module.exports = cdn;