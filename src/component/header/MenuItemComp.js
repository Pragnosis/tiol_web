
import React from 'react'
import {
  Menu,
  MenuItem,
} from '@mui/material';
import NestedMenuItem from "material-ui-nested-menu-item";


const MenuItemComp = ({ item, position, routeTo, handleItemClickhandler, ref }) => {
  let { subMenuItems, title, } = item;
  return (
    <>
      {subMenuItems.length > 0 ? (
        <NestedMenuItem
          ref={ref}
          label={title}
          parentMenuOpen={position}
          onClick={handleItemClickhandler}

        >
          {subMenuItems.map((option) => (
            <MenuItemComp
              ref={ref}
              item={option}
              position={position}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              handleItemClickhandler={() => handleItemClickhandler(option, routeTo)}
            />
          ))}
        </NestedMenuItem>
      ) : (
        <MenuItem onClick={handleItemClickhandler}>{title}</MenuItem>
      )}
    </>
  );
};


export default MenuItemComp