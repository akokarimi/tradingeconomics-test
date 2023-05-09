import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useNavigate } from "react-router-dom";

export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        fontSize: "1.4rem",
        marginBottom: "2.4rem",
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          sx={{
            fontSize: "1.4rem",
          }}
          label="Sweden 🇸🇪"
          onClick={() => {
            navigate("/sweden");
          }}
        />
        <Tab
          sx={{
            fontSize: "1.4rem",
          }}
          label="Mexico 🇲🇽"
          onClick={() => {
            navigate("/mexico");
          }}
        />
        <Tab
          sx={{
            fontSize: "1.4rem",
          }}
          label="Thailand 🇹🇭"
          onClick={() => {
            navigate("/thailand");
          }}
        />
      </Tabs>
    </Box>
  );
}
