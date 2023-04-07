import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import LoaderSniper from "../LoaderSniper/LoaderSniper"
const Home = () => {
  // loader Sniper
  const navigation = useNavigation();

  return (
    <>
      {/* common element  */}
      <Header></Header>
      {/* sniper loader  */}
      <div className="text-center">
        {navigation.state === "loading" && <LoaderSniper></LoaderSniper>}
      </div>

      {/*  main content  */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
