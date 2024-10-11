import React from "react";
import { Paper, Tabs, Tab } from "@mui/material";

export interface TabProp {
  id: string;
  label: string;
  disabled: boolean;
}

interface Props {
  tabs: TabProp[];
}

const CustomTab: React.FC<Props> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);
 
  // 将tabs.length加入依赖项，确保每次 tabs 数组变化时重新创建 handleChange 函数。
  const handleChange = React.useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      if (tabs.length === 0) {
        console.warn("No tabs available");
        return;
      }

      if (newValue >= tabs.length || newValue < 0) {
        console.warn("Invalid tab index:", newValue);
        return;
      }
      setValue(newValue);
    },
    [tabs.length]
  );

  if (tabs.length === 0) {
    return <div>No tabs available</div>;
  }

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {tabs.map((tab) => (
          <Tab key={tab.id} label={tab.label} disabled={tab.disabled} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default React.memo(CustomTab);
