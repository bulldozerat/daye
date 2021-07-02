import xml2js from 'xml2js';
import cloneDeep from 'lodash/cloneDeep';

const xmlParser = new xml2js.Parser({ explicitArray: false });

export const normalizePackagesData = (data) => {
  const clonedData = cloneDeep(data);

  return clonedData.map((info) => {
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

export const getAllUnique = (packagesData, type) => {
  const typeArray = [];

  packagesData.forEach(({ tapons, tampons }) => {
    const tamponsData = tapons || tampons;
    tamponsData.forEach((tampon) => typeArray.push(type === 'sizes' ? tampon.size : tampon.coating));
  });

  return new Set(typeArray);
};
