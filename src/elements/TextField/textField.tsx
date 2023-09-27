import { useState } from "react";
import { TextField, Tooltip } from "@mui/material";
import theme from "theme/theme";
import useStyles from "./styles";

const INF_TextField: React.FC<any> = (props: any) => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const {
    type,
    value,
    onChange,
    disabled,
    placeholder,
    fullWidth,
    tooltip,
    tooltipText,
    compName,
    onKeyDown
  } = props;
  const { inputText } = useStyles(appTheme);

  return (
    <Tooltip
      title={tooltipText ? tooltipText : ""}
      arrow
      open={tooltip ? tooltip : false}
      placement={"top"}
    >
      <TextField
        className={inputText ? inputText : ""}
        variant="outlined"
        // label={placeholder}
        value={value}
        type={type}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth={fullWidth}
        onKeyDown={compName === "pagination" && onKeyDown}
      />
    </Tooltip>
  );
};

export default INF_TextField;
