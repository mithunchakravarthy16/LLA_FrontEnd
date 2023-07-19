//@ts-nocheck
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.body
  );

  useEffect(() => {
    document.title = adminPanelData?.siteTitle;
  }, [adminPanelData]);

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
