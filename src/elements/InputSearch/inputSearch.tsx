import { useState } from "react";
import TextField from "elements/TextField";
import theme from "theme/theme";
import useStyles from "./styles";

const InputSearch: React.FC<any> = (props) => {
  const { searchValue, handleSearch } = props;
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { customTextField } = useStyles(appTheme);

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
