//@ts-nocheck
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
  // const adminPanelData = useSelector(
  //   (state: any) => state?.adminPanel?.getConfigData?.data?.body
  // );

  // useEffect(() => {
  //   document.title = "Smart Lab Tech - LLA";
  // }, []);

  // useEffect(() => {
  //   document.title = adminPanelData?.siteTitle;

  //   let link = document.querySelector("link[rel~='icon']");
  //   if (!link) {
  //     link = document.createElement("link");
  //     link.rel = "icon";
  //     document.getElementsByTagName("head")[0].appendChild(link);
  //   }
  //   link.href = `data:image/png;base64,${adminPanelData?.favIcon}`;
  // }, [adminPanelData]);

  console.warn = console.error = console.info = console.debug = () => {};
  // console.clear()

  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
};

export default App;
