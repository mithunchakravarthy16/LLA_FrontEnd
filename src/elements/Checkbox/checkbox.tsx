import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import useStyles from "./styles";

const CheckBox = (props: any) => {
  const { disabled, isChecked, label, color, handleCheck, name, id } = props;
  const { customCheckbox } = useStyles();
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            className={customCheckbox}
            checked={isChecked ? isChecked : false}
            onChange={(e) => handleCheck(e, id)}
            color={color}
            disabled={disabled ? disabled : false}
            name={name}
            id={id}
            icon={<CheckBoxOutlineBlankOutlinedIcon />}
            checkedIcon={<CheckBoxOutlinedIcon />}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default CheckBox;
