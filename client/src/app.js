import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavTabs from "./components/tabs";
import Info from "./components/info";

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="main__title">Trading Economics</h1>
      <NavTabs />
      <Routes>
        <Route path="/:countryname" element={<Info />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
