/** @format */

import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { color } from "@mui/system";

const Sidebar = ({selected, setSelected}) => (
  <Stack
    direction={"row"}
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelected(category.name)}
        style={{
          background: category.name === selected && "#fc1503",
          color: "white",
        }}
        key={category.name}>
        <span style={{color: category.name === selected ? 'white' : 'red', marginRight: '15px'}}>{console.log(category.icon)}</span>
        <span style={{opacity: category.name === selected ? '1' : '0.8'}} >{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
