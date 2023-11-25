import { Box, Grid, Typography,FormControl,TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect,useRef } from "react";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SearchLanding = (props) => {
  const navigate = useNavigate();

  const [caseLawdata, setCaseLawdata] = useState([]);
  const [pageOriData, setPageOriData] = useState([]);
  const intialCount = 10;
  const [prevCount, setPrevCount] = useState(1);
  const [nextCount, setNextCount] = useState(10);
  const [page,setPage] = useState(0);
  const [refineData,setRefineData] = useState("");
  const [refineItem,setRefineItem] = useState("")
  //const { data, error } = useQuery(['GetDynamicNewsData'], () => notificationDynamicdata(apipath), { enabled: true, retry: false })

  function handleClick(e) {
    setRefineData(e.target.value);
    var newArray = props?.searchData?.data.filter(function (item) {
      return item.author.toLowerCase().includes(e.target.value.toLowerCase())
       || item.headlines.toLowerCase().includes(e.target.value.toLowerCase())
       || item.place.toLowerCase().includes(e.target.value.toLowerCase())   
    });
    setRefineItem(newArray);
  }
  useEffect(() => {
    if (props) {
      setPageOriData(props?.searchData?.data);
      setCaseLawdata(
        props?.searchData?.data?.filter((o, i) => i <= intialCount)
      );
    }
  }, [props]);

  useEffect(() => {
    if (refineItem) {
      setPageOriData(refineItem);
      setCaseLawdata(
        refineItem?.filter((o, i) => i <= intialCount)
      );
    }
  }, [refineItem]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageChange = (e,value) => {
    setPage(value)
    const targetCount = value;
    const Prev = (parseInt(targetCount) - 1) * intialCount + 1;
    setPrevCount(Prev)
    const Next =  parseInt(targetCount * intialCount);;
    setNextCount(Next)
    const localArray = pageOriData.slice(Prev-1, Next);
    setCaseLawdata(localArray)
}

  const rowDataClickandler = (item) => {
    if (item?.caselawUrl?.indexOf("GetCaselawById") > 0) {
      const pageType = "caselaws_details";
      navigate(`/${pageType}?page=${btoa(item?.caselawUrl)}`);
    } else if (item?.news_Url?.indexOf("GetNewsById") > 0) {
      const pageType = "news_details";
      navigate(`/${pageType}?page=${btoa(item?.news_Url)}`);
    } else if (item?.url?.indexOf("GetNewsSearchById") > 0) {
      const pageType = "news_details";
      navigate(`/${pageType}?page=${btoa(item?.url)}`);
    } else {
      navigate("/notification/details", { state: item });
    }
  };
  if (caseLawdata?.length && caseLawdata.length > 0) {
    return (
      <Box>
        <Grid container>
        <Grid container justifyContent="flex-end"
           
            xs={12}
            
           // spacing={3}
          >
            <FormControl >
            <TextField
              label=" Refine Search"
              name="keyword"
              variant="outlined"
             // xs={3}
             onChange={e =>
              handleClick(e)
            }
              id="keyword"
            />
            </FormControl>
          </Grid>
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
                        <Pagination count={Math.ceil((pageOriData?.length) / 10)} page={page} onChange={pageChange} />
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
                          {item?.date} {item?.author ? `| ${item.author}`:''} {item?.place ? `| ${item.place}`:''}
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
                          {item?.notification_Number}
                        </Typography>
                        <Typography
                          style={{
                            textAlign: "justify",
                            padding: "5px 0px",
                            fontSize: "13px",
                          }}
                        >
                        {item?.headlines || item?.headlines}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          {pageOriData?.length > intialCount &&
            <Grid item xs='12'>
                <Box style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0px 10px 0px" }}>
                    <Pagination count={Math.ceil((pageOriData?.length) / 10)} page={page} onChange={pageChange} />
                </Box>
            </Grid>}
        </Grid>
      </Box>
    );
  }
};