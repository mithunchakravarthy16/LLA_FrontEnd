import * as React from "react";
import { useState, useEffect, createRef } from "react";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";
import useStyles from "./styles";

const INF_Tooltip: React.FC<any> = (props) => {
  const { rootContainer } = useStyles();
  const tipRef = createRef<any>();

  const [inView, setInView] = useState(false);

  const cb = (entries: any) => {
    const [entry] = entries;
    entry.isIntersecting ? setInView(true) : setInView(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
    };
    const ref = tipRef.current;
    const observer = new IntersectionObserver(cb, options);

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [tipRef]);

  const {
    tooltipValue,
    children,
    placement,
    offset,
    fontSize,
    padding,
    componentName,
    marginTop,
    pageName
  } = props;

  return (
    <div style={{ cursor: "pointer", display: "flex",  height: pageName === "markerCallout" ? "1.3vh" : pageName === "assetTable" ? "1.8vh" : "3vh" }}>
      <Tooltip
        className="tooltipTest"
        arrow
        placement={placement ? placement : "bottom"}
        ref={tipRef}
        title={tooltipValue}
        disableInteractive
        TransitionComponent={Zoom}
        PopperProps={{
          sx: {
            display: inView ? "block" : "none",
            zIndex: "99999 !important",
          },
          modifiers: [
            {
              name: "offset",

              options: {
                offset: offset ? offset : [0, -13],
              },
            },
          ],
        }}
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "#000",
              "& .MuiTooltip-arrow": {
                color: "#000",
              },
              color: "white",
              fontSize: fontSize ? fontSize : "12px",
              borderRadius: 2,
              padding: padding ? padding : 2,
              marginTop: marginTop && "1vw",
            },
          },
        }}>
        <div>{children}</div>
      </Tooltip>
    </div>
  );
};

export default INF_Tooltip;
