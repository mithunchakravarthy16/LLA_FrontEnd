import { useState, useEffect } from "react";
import TextField from "elements/TextField";
import theme from "theme/theme";
import useStyles from "./styles";

const InputSearch: React.FC<any> = (props) => {
  const { searchValue, handleSearch } = props;
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const { customTextField } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(theme?.lightTheme);
        break;
      case "dark":
        setAppTheme(theme?.darkTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  return (
    <div className={customTextField}>
      <TextField
        value={searchValue}
        type={"search"}
        disabled={false}
        placeholder={"Select Assets"}
        fullWidth={true}
        onChange={handleSearch}
      />
    </div>
  );
};

export default InputSearch;
