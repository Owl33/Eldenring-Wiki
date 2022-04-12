import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import List from "./components/list/list";
import Selectgrid from "./components/selectgrid/selectgrid";

function App({ eldenring }) {
  const [selectCategory, setSelectCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.pathname;
  const getCategory = (data) => {
    setSelectCategory(data.category);
  };
  const pagedata = locationData.replace(/\//g, "");

  useEffect(() => {
    if (selectCategory != null) {
      navigate(`/${pagedata}/${selectCategory}`);
    }
  }, [selectCategory]);
  return (
    <div className="App">
      <Header pagedata={pagedata} />
      <Routes>
        <Route path="/" exact element={<Home eldenring={eldenring} />} />
        <Route path="/home" element={<Home eldenring={eldenring} />} />
        <Route
          path="/:pagedata"
          element={
            <List
              eldenring={eldenring}
              selectCategory={selectCategory}
              onGetCategory={getCategory}
            />
          }
        />
        <Route
          path="/:pagedata/:selectCategory"
          element={<Selectgrid eldenring={eldenring} pagedata={pagedata} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
