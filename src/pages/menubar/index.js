/* eslint-disable no-unreachable */
import React, { Fragment } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Link, useLocation } from "react-router-dom";

const MenuBarComp = (props) => {
    const { title, StartIcon, EndIcon, subMenuItems, ExpandMore, currentIndex, ExpandLess, apipath, ...remain } = props;

    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const location = useLocation()

    const handleClick = () => {
        setOpen(!open);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            disablePadding
        >
            {
                subMenuItems?.length == 0 ? (
                    <ListItemButton {...remain} component="a" href={apipath} target="_blank"
                        selected={location.pathname.toLowerCase() == "/" + title.toLowerCase()}
                        style={{ borderRadius: "0px !important", padding: "0px !important" }}
                        className="sidebar-list-button">
                        <ListItemText primary={title} className="sidebar-list-text" />
                    </ListItemButton>
                ) : (
                    <Fragment>
                        <ListItemButton onClick={handleClick} {...remain} className="sidebar-list-button">
                            {
                                StartIcon && <ListItemIcon><StartIcon /></ListItemIcon>
                            }
                            <ListItemText primary={title} className="sidebar-list-text" />
                            {
                                open ? (ExpandLess && <ExpandLess />) : (ExpandMore && <ExpandMore />)
                            }
                        </ListItemButton>
                        {
                            subMenuItems.length > 0 &&
                            <Collapse in={open} timeout="auto" unmountOnExit >
                                <List component="div" style={{ paddingLeft: 20 }}>
                                    {subMenuItems?.map((child, index) => (
                                        <MenuBarComp {...child} currentIndex={currentIndex + index} />
                                    ))}
                                </List>
                            </Collapse>
                        }
                    </Fragment>
                )
            }
        </List>
    );
};

export default MenuBarComp;
