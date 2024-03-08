import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { UIStyledTab, UIStyledTabs } from "./ui";

const UITabs = ({ value, handleChange, tabArr, children, ...props }) => {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 0,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <UIStyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { display: "none" },
          }}
          className="myTabs"
          variant="scrollable"
          scrollButtons={false}
        >
          {tabArr.map((item, i) => {
            return (
              <UIStyledTab
                key={i}
                label={item.label}
                {...a11yProps(item.a11yPropsIndex)}
              />
            );
          })}
          {/* <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </UIStyledTabs>
      </Box>
      {children}
    </Box>
  );
};

export default UITabs;
