/** @format */

import { IconButton, Input, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  let navigate = useNavigate();
  return (
    <Paper
      component={'form'}
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}>
      <Input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
