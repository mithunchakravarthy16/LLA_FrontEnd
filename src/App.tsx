//@ts-nocheck
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useEffect, useRef, useState } from "react";
import { UseWebSocket } from "websocketServices/useWebsocket";
export const WebsocketContext = createContext();
const App = () => {

  console.warn = console.error = console.info = console.debug = () => {};
  const clientRef = useRef<any>();
  const [
    websocketLatestAssetNotification,
    setWebsocketLatestAssetNotification,
  ] = useState<any>([]);
  const [websocketLatestAssetTrackerLive, setWebsocketLatestAssetTrackerLive] =
    useState<any>([]);

  useEffect(() => {
    UseWebSocket(
      (message: any) => {
        setWebsocketLatestAssetNotification(message);
      },
      (message: any) => {
        setWebsocketLatestAssetTrackerLive(message);
      },
      (clintReference: any) => {
        clientRef.current = clintReference;
      },
      "openWebsocket"
    );

    return () => {
      UseWebSocket(
        () => {},
        () => {},
        () => {},
        "closeWebsocket",
        clientRef.current
      );
    };
  }, []);

  return (
    <BrowserRouter>
      <WebsocketContext.Provider
        value={{
          websocketLatestAssetNotification: websocketLatestAssetNotification,
          websocketLatestAssetTrackerLive: websocketLatestAssetTrackerLive,
        }}
      >
        <Routes
          setWebsocketLatestAssetNotification={
            setWebsocketLatestAssetNotification
          }
          setWebsocketLatestAssetTrackerLive={
            setWebsocketLatestAssetTrackerLive
          }
        />
      </WebsocketContext.Provider>
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
