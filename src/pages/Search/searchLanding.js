import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SearchLanding = (props) => {
  const navigate = useNavigate();

  const [caseLawdata, setCaseLawdata] = useState([]);
  const [pageOriData, setPageOriData] = useState([]);
  const intialCount = 10;
  const [prevCount, setPrevCount] = useState(1);
  const [nextCount, setNextCount] = useState(10);

  //const { data, error } = useQuery(['GetDynamicNewsData'], () => notificationDynamicdata(apipath), { enabled: true, retry: false })

  console.warn("====data===", props);
  useEffect(() => {
    if (props) {
      setPageOriData(props?.searchData?.data);
      setCaseLawdata(
        props?.searchData?.data?.filter((o, i) => i <= intialCount)
      );
    }
  }, [props]);

  useEffect(() => {
    window.scrollTo(0, 700);
  }, []);

  const pageChange = (e) => {
    const Prev = parseInt(e.target.textContent - 1) * intialCount + 1;
    setPrevCount(Prev);
    const Next = parseInt(e.target.textContent) * intialCount;
    setNextCount(Next);
    const localArray = pageOriData?.filter((o, i) => Prev < i && i <= Next);
    setCaseLawdata(localArray);
  };

  const rowDataClickandler = (item) => {
    if (item?.caselawUrl?.indexOf("GetCaselawById") > 0) {
      const pageType = "caselaws_details";
      navigate(`/${pageType}?page=${btoa(item?.caselawUrl)}`);
    } else if (item?.news_Url?.indexOf("GetNewsById") > 0) {
      const pageType = "news_details";
      navigate(`/${pageType}?page=${btoa(item?.news_Url)}`);
    } else {
      navigate("/notification/details", { state: item });
    }
  };
  if (caseLawdata?.length && caseLawdata.length > 0) {
    return (
      <Box>
        <Grid container>
          <Grid item xs="12">
            <Grid
              container
              item
              justifyContent="space-between"
              alignItems="center"
              style={{ paddingLeft: "20px" }}
            >
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ fontSize: "13px", color: "red" }}>
                  {prevCount}
                </Typography>
                &nbsp;--
                <Typography style={{ fontSize: "13px", color: "red" }}>
                  &nbsp;{nextCount}
                </Typography>
                &nbsp;out of
                <Typography style={{ fontSize: "13px", color: "red" }}>
                  &nbsp;...{pageOriData?.length}
                </Typography>
                &nbsp;
              </Box>
              <Box style={{ padding: "10px 0px 10px 0px" }}>
                <Pagination
                  count={(pageOriData?.length - 6) / 10}
                  onChange={pageChange}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs="12">
            <Grid container item>
              {caseLawdata?.length > 0 &&
                caseLawdata?.map((item) => {
                  return (
                    <Grid
                      item
                      xs="12"
                      style={{
                        margin: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "20px",
                        padding: "10px",
                      }}
                    >
                      <Box
                        elevation={1}
                        style={{ borderRadius: "20px 20px 0px 0px" }}
                      >
                        <Typography
                          style={{
                            color: "#f86e38",
                            padding: "5px 0px",
                            cursor: "pointer",
                          }}
                          onClick={() => rowDataClickandler(item)}
                        >
                          {item?.date || item?.date || item?.date}
                        </Typography>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            textAlign: "justify",
                            padding: "5px 0px",
                            color: "rgb(85 76 76 / 90%)",
                            fontSize: "13px",
                          }}
                        >
                          {item?.notification_Number || item?.url}
                        </Typography>
                        <Typography
                          style={{
                            textAlign: "justify",
                            padding: "5px 0px",
                            fontSize: "13px",
                          }}
                        >
                          Cx - {item?.headlines || item?.headlines}23
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          <Grid item xs="12">
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px 0px 10px 0px",
              }}
            >
              <Pagination
                count={(pageOriData?.length - 6) / 10}
                onChange={pageChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
};