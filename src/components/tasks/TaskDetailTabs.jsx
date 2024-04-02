import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import CommentsPanel from "./CommentsPanel";
import DependentTasks from "./DependentTasks";
import SubTasks from "./SubTasks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TaskDetailTabs = ({ task }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="Dependencies" {...a11yProps(0)} />
        <Tab label="Comments" {...a11yProps(1)} />
        <Tab label="Sub tasks" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DependentTasks task={task} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CommentsPanel task={task} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SubTasks task={task} />
      </TabPanel>
    </Box>
  );
};

export default TaskDetailTabs;
