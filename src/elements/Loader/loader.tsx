import llaLoader from "assets/loader/llaLoader.gif";

const Loader = (props:any) => {
  const {isHundredVh} = props
  return (
    <div
      style={{
        width: "100%",
        height:  isHundredVh ? "100vh" : "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={llaLoader} width={"10%"} />
    </div>
  );
};

export default Loader;
