const axios = require('axios');

export const getTimezoneLocations = async(area) => {
    const data = await axios.get(`${process.env.WORLD_CLOCK_APP_URL}/timezone/${area}`);
}