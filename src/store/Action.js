import { fetchAllAPI } from "../Api";

export const getAllData = () => {
  return (dispatch) => {
    fetchAllAPI()
      .then((res) => {
        if (res) {
          dispatch({
            type: "SET_ALL_DATA",
            res,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setSingleStateData = (data) => {
  return (dispatch) => {
    if (data) {
      dispatch({
        type: "GET_SINGLE_STATE_DATA",
        data,
      });
    }
  };
};

export const setChartData = (chartData, stateName) => {
  return (dispatch) => {
    const stateDailyData = {
      date: [],
      dailyRecovered: [],
      dailyConfirmed: [],
      dailyDeceased: [],
      dailyActive: [],
      culmativeRecovered: [],
      culmativeConfirmed: [],
      culmativeDeceased: [],
      culmativeActive: [],
    };

    let previousDate = true;
    chartData.map((val) => {
      if (stateDailyData.date.indexOf(val.date) === -1 || previousDate) {
        stateDailyData.date.push(val.date);
        previousDate = false;
      }
      let name = stateName.toLowerCase();
      switch (val.status) {
        case "Confirmed":
          stateDailyData.dailyConfirmed.push(parseInt(val[name]));
          if (stateDailyData.culmativeConfirmed.length) {
            stateDailyData.culmativeConfirmed.push(
              stateDailyData.culmativeConfirmed[
                stateDailyData.culmativeConfirmed.length - 1
              ] + parseInt(val[name])
            );
          } else {
            stateDailyData.culmativeConfirmed.push(parseInt(val[name]));
          }

          return true;
        case "Recovered":
          stateDailyData.dailyRecovered.push(parseInt(val[name]));
          if (stateDailyData.culmativeRecovered.length) {
            stateDailyData.culmativeRecovered.push(
              stateDailyData.culmativeRecovered[
                stateDailyData.culmativeRecovered.length - 1
              ] + parseInt(val[name])
            );
          } else {
            stateDailyData.culmativeRecovered.push(parseInt(val[name]));
          }
          return true;
        case "Deceased":
          stateDailyData.dailyDeceased.push(parseInt(val[name]));
          if (stateDailyData.culmativeDeceased.length) {
            stateDailyData.culmativeDeceased.push(
              stateDailyData.culmativeDeceased[
                stateDailyData.culmativeDeceased.length - 1
              ] + parseInt(val[name])
            );
          } else {
            stateDailyData.culmativeDeceased.push(parseInt(val[name]));
          }
          return true;
        default:
          return true;
      }
    });
    stateDailyData.dailyConfirmed.map((val, i) => {
      stateDailyData.dailyActive.push(
        stateDailyData.dailyConfirmed[i] -
          (stateDailyData.dailyRecovered[i] - stateDailyData.dailyDeceased[i])
      );
      stateDailyData.culmativeActive.push(
        stateDailyData.culmativeConfirmed[i] -
          (stateDailyData.culmativeRecovered[i] -
            stateDailyData.culmativeDeceased[i])
      );
    });
    if (stateDailyData) {
      dispatch({
        type: "SET_SINGLE_STATE_CHART",
        stateDailyData,
      });
    }
  };
};
