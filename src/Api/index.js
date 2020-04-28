import axios from "axios";

export const fetchAllAPI = async () => {
  try {
    const {
      data: { cases_time_series, statewise },
    } = await axios.get(`https://api.covid19india.org/data.json`);
    const {
      data: { states_daily },
    } = await axios.get(`https://api.covid19india.org/states_daily.json`);
    const ModifiedData = {
      tillDateData: cases_time_series,
      stateData: statewise,
      globalData: statewise[0],
      stateWiseDailyData: states_daily,
    };
    return ModifiedData;
  } catch (error) {
    console.log(error);
  }
};
