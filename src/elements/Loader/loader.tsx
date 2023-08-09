import llaLoader from "assets/loader/llaLoader.gif";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
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
