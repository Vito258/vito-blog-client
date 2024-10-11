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

  const handleChange = React.useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      if (newValue >= tabs.length || newValue < 0) {
        console.warn("Invalid tab index:", newValue);
        return;
      }
      setValue(newValue);
    },
    []
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
