import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuBarComp from "../menubar";
import { sidebarArr2 } from "../menubar/constant";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";


function Sidebar() {

    const [updateArray, setUpdateArray] = useState([])

    useEffect(() => {
        var localArray = setArrowInNestedArray(sidebarArr2)
        setUpdateArray(localArray)
    }, []);

    const setArrowInNestedArray = (_subMenuItems) => {
        return _subMenuItems?.length > 0 ? _subMenuItems.map((item) => commonLogic(item)) : []
    }

    const commonLogic = (item) => {
        return item?.subMenuItems?.length > 0 ?
            { ...item, "ExpandLess": ExpandLess, "ExpandMore": ExpandMore, subMenuItems: setArrowInNestedArray(item?.subMenuItems) }
            : item
    }

    return (
        <>
            <Grid container>
                <Box width={1} sx={{ borderRight: 1, height: "calc(100vh - 32px)" }} >
                    {
                        updateArray.map((option, index) => <MenuBarComp key={index} currentIndex={index} {...option} />)
                    }
                </Box>
            </Grid>
        </>
    );
}

export default Sidebar;
