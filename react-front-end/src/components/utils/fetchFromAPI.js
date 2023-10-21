async function fetchFromAPI(originCode, destCode, originSkyId, destSkyId, departureDate, returnDate) {
  try {
    let url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originSkyId=${originCode}&destinationSkyId=${destCode}&originEntityId=${originSkyId}&destinationEntityId=${destSkyId}&date=${departureDate}`;

    if (returnDate && returnDate !== '') {
      url += `&returnDate=${returnDate}`;
    }

    url += `&adults=1&currency=USD&market=en-US&countryCode=US`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchFromAPI;
