const initialState = {
  globalData: null,
  allStateData: null,
  singleStateData: null,
  chartData: null,
  singleChartData: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_DATA":
      return {
        ...state,
        globalData: action.res.globalData,
        allStateData: action.res.stateData,
        singleStateData: action.res.globalData,
        chartData: action.res.stateWiseDailyData,
      };
    case "GET_ALL_STATE_DATA":
      return {
        ...state,
        allStateData: action,
      };
    case "GET_SINGLE_STATE_DATA":
      return {
        ...state,
        singleStateData: action.data,
      };
    case "SET_SINGLE_STATE_CHART":
      return {
        ...state,
        singleChartData: action.stateDailyData,
      };
    default:
      return state;
  }
};

export default Reducer;
