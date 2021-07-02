import xml2js from 'xml2js';
const xmlParser = new xml2js.Parser({ explicitArray: false });

export const normalizePackagesData = (data) => {
  return data.map((info) => {
    if (info?.tampons && typeof info.tampons === 'string') {
      xmlParser.parseString(info.tampons, function (err, result) {
        info.tampons = result.tapons.tampon?.length ? [...result.tapons.tampon] : [result.tapons.tampon];
      });
    }

    if (info?.tapons && typeof info.tapons === 'string') {
      xmlParser.parseString(info.tapons, function (err, result) {
        info.tapons = result.tapons.tampon?.length ? [...result.tapons.tampon] : [result.tapons.tampon];
      });
    }

    return info;
  });
};
