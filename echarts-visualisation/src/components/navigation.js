import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PieChart from '../components/pie-chart.js';
import BarChart from '../components/bar-chart.js';
import ScatterChart from '../components/scatter-chart.js';


const navigationSelection = Object.freeze({
  pie: 'pie',
  bar: 'bar',
  scatter: 'scatter',
});

const Navigation = () => {

    const [value, setValue] = React.useState(navigationSelection.pie);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    

    return(
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab label="Pie" value={navigationSelection.pie} />
            <Tab label="Bar" value={navigationSelection.bar} />
            <Tab label="Scatter" value={navigationSelection.scatter} />
          </TabList>
        </Box>
        <TabPanel value={navigationSelection.pie}><PieChart/></TabPanel>
        <TabPanel value={navigationSelection.bar}><BarChart/></TabPanel>
        <TabPanel value={navigationSelection.scatter}><ScatterChart/></TabPanel>
      </TabContext>
)};

export default Navigation;