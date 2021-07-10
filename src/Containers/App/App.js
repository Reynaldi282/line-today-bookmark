import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import Navbar from "../../Components/Navbar";
import Top from "../Pages/Top/Top";

import Intermezzo from "../Pages/Intermezzo/Intermezzo";
import Trending from "../Pages/Trending/Trending";
import Videos from "../Pages/Videos/Videos";
import Biz from "../Pages/Biz/Biz";
import Movie from "../Pages/Movie/Movie";

import Hobbies from "../Pages/Hobbies/Hobbies";

import Corona from "../Pages/Corona/Corona";

import KataGaul from "../Pages/KataGaul/KataGaul";
import English from "../Pages/English/English";

import BookmarkList from "../Pages/BookmarkList/BookmarkList";
import Loading from "./Loading";
import { fetchData } from "./redux/action";
import "@material-tailwind/react/tailwind.css";

function App() {
  const appState = useSelector((state) => state.appState);


  const dispatch = useDispatch();

  


  useEffect(() => {
    dispatch(fetchData());
    
  }, []);

  return (
    <div>
      <Helmet
        titleTemplate="%s - LINE TUDEI"
        defaultTitle="LINE TUDEI"
      ></Helmet>
      {!appState.loading ? (
        <div className="App mx-auto" style={{ maxWidth: "800px" }}>
         
          <Navbar />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route path="/TOP" component={Top} />
            <Route path="/Intermezzo" component={Intermezzo} />
            <Route path="/Trending" component={Trending} />
            <Route path="/Videos" component={Videos} />
            <Route path="/Biz" component={Biz} />
            <Route path="/Movie" component={Movie} />
            <Route path="/Hobbies" component={Hobbies} />
            <Route path="/Corona-di-RI" component={Corona} /> 
            <Route path="/Kata-Gaul" component={KataGaul} />
            <Route path="/English" component={English} />
            <Route path="/test" component={Carousel} />
            <Route path="/bookmarks" component={BookmarkList} />
          </Switch>
        </div>
      ) : (
        <div className="App mx-auto" style={{ maxWidth: "800px" }}>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default App;
