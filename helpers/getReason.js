const axios = require('axios')

const getReasonInfo = async (diseaseDetail) => {
  try {
    const apiKey = 'DTTrBqcxJ608OaH6U3vFNANKcI2APp5Fc04LBdmJbWuN37gJ4a';
    const token = diseaseDetail.accessToken;
    const response = await axios.get(`https://plant.id/api/v3/identification/${token}?details=common_names%2Curl%2Cdescription%2Ctaxonomy%2Crank%2Cgbif_id%2Cinaturalist_id%2Cimage%2Csynonyms%2Cedible_parts%2Cwatering%20&language=en`, {
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': apiKey,
      },
    });
    const accessToken = response.data.access_token;
    const images = response.data.input.images[0]
    const is_plant = response.data.result.is_plant;
    const suggestions = response.data.result.classification.suggestions[0]
    const details = response.data.result.classification.suggestions[0].details
    return { accessToken, images, is_plant, suggestions, details };
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getReasonInfo }