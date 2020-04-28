import React, { useEffect } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CountUp from "react-countup";
import styles from "./Table.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSingleStateData, setChartData } from "../../store/Action";

const Tables = () => {
  const stateData = useSelector((state) => state.allStateData);
  const chartData = useSelector((state) => state.chartData);
  const dispatch = useDispatch();

  const CountUpComponent = (start, end) => {
    return (
      <CountUp end={parseInt(end)} separator="," start={parseInt(start)} />
    );
  };

  useEffect(() => {
    if (chartData) {
      dispatch(setChartData(chartData, "TT"));
    }
  });

  const onHover = (e, data) => {
    dispatch(setSingleStateData(data));
    dispatch(setChartData(chartData, data.statecode));
  };

  return (
    <div>
      <div className={styles.table__header}>
        <h5>
          Compiled from State Govt. numbers,
          <span> know more!</span>
        </h5>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>
              <div className={styles.heading_content}>State/UT</div>
            </td>
            <td>
              <div className={styles.heading_content}>Confirmed</div>
            </td>
            <td>
              <div className={styles.heading_content}>Active</div>
            </td>
            <td>
              <div className={styles.heading_content}>Recovered</div>
            </td>
            <td>
              <div className={styles.heading_content}>Deceased</div>
            </td>
          </tr>
        </thead>
        <tbody>
          {stateData
            ? stateData.map((val, i) => {
                return i && val.confirmed !== "0" ? (
                  <tr key={i} onMouseEnter={(e) => onHover(e, val)}>
                    <td className={styles.state}>{val.state}</td>
                    <td className={styles.confirmed} align="right">
                      {val.deltaconfirmed !== "0" ? (
                        <span className={styles.deltaConfirmed}>
                          <ArrowUpwardIcon />
                          {val.deltaconfirmed}
                        </span>
                      ) : null}
                      {val.confirmed !== "0"
                        ? CountUpComponent(val.confirmed, val.confirmed)
                        : "-"}
                    </td>
                    <td className={styles.active} align="right">
                      {val.active !== "0"
                        ? CountUpComponent(val.active, val.active)
                        : "-"}
                    </td>
                    <td className={styles.recovered} align="right">
                      {val.deltarecovered !== "0" ? (
                        <span className={styles.deltaRecovered}>
                          <ArrowUpwardIcon />
                          {val.deltarecovered}
                        </span>
                      ) : null}
                      {val.recovered !== "0"
                        ? CountUpComponent(val.recovered, val.recovered)
                        : "-"}
                    </td>
                    <td className={styles.deceased} align="right">
                      {val.deltadeaths !== "0" ? (
                        <span className={styles.deltaDeacesed}>
                          <ArrowUpwardIcon />
                          {val.deltadeaths}
                        </span>
                      ) : null}
                      {val.deaths !== "0"
                        ? CountUpComponent(val.deaths, val.deaths)
                        : "-"}
                    </td>
                  </tr>
                ) : null;
              })
            : null}
          {stateData ? (
            <tr key={0} onMouseEnter={(e) => onHover(e, stateData[0])}>
              <td className={styles.state}>{stateData[0].state}</td>
              <td className={styles.confirmed} align="right">
                {stateData[0].deltaconfirmed !== "0" ? (
                  <span className={styles.deltaConfirmed}>
                    {" "}
                    <ArrowUpwardIcon />
                    {stateData[0].deltaconfirmed}
                  </span>
                ) : null}
                {stateData[0].confirmed !== "0"
                  ? CountUpComponent(
                      stateData[0].confirmed,
                      stateData[0].confirmed
                    )
                  : "-"}
              </td>
              <td className={styles.active} align="right">
                {stateData[0].active !== "0"
                  ? CountUpComponent(stateData[0].active, stateData[0].active)
                  : "-"}
              </td>
              <td className={styles.recovered} align="right">
                {stateData[0].deltarecovered !== "0" ? (
                  <span className={styles.deltaRecovered}>
                    {" "}
                    <ArrowUpwardIcon />
                    {stateData[0].deltarecovered}
                  </span>
                ) : null}
                {stateData[0].recovered !== "0"
                  ? CountUpComponent(
                      stateData[0].recovered,
                      stateData[0].recovered
                    )
                  : "-"}
              </td>
              <td className={styles.deceased} align="right">
                {stateData[0].deltadeaths !== "0" ? (
                  <span className={styles.deltaDeacesed}>
                    {" "}
                    <ArrowUpwardIcon />
                    {stateData[0].deltadeaths}
                  </span>
                ) : null}
                {stateData[0].deceased !== "0"
                  ? CountUpComponent(
                      stateData[0].deceased,
                      stateData[0].deceased
                    )
                  : "-"}
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
