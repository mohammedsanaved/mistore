import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers";
import StarProduct from "./components/StarProduct.js";
import Heading from "./components/Heading.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer";
import NavOptios from "./components/NavOptios.js";
// import HotItemCard from "./components/HotItemCard";
// CSS
import "./App.css";
import "./styles/PreNavbar.css";
import "./styles/Navbar.css";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptios
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={"STAR PRODUCT"} />
      <StarProduct starProduct={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu hotAccessories={data.hotAccessories} />
      {/* <HotItemCard /> */}
      <Routes>
        <Route path="/" element={""} />
        <Route
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          path="/lifeStyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
        {/* <Route path="/" element={}></Route> */}
      </Routes>
      <Heading text={"PRODUCT REVIEWS"} />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text={"VIDEOS"} />;
      <Videos videos={data.videos} />
      <Heading text={"INTHE PRESS"} />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
