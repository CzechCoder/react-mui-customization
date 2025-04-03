import { type FC, type ChangeEvent } from "react";
import { Checkbox } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

interface CustomCheckboxProps {
  value?: string;
  checked?: boolean;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  value,
  checked,
  onChange,
}) => {
  return (
    <Checkbox
      checkedIcon={
        <Image
          src="/static/checkbox-fill.svg"
          height={24}
          width={24}
          alt="checked"
        />
      }
      icon={
        <Image
          src="/static/checkbox-outline.svg"
          height={24}
          width={24}
          alt="unchecked"
        />
      }
      value={value}
      checked={checked}
      sx={{
        py: 0,
        "& .MuiSvgIcon-root": { fontSize: "34px" },
        "&:hover": { boxShadow: "none", background: "none" },
        "&.Mui-checked": {
          "&, & + .MuiFormControlLabel-label": {
            fontWeight: 400,
          },
        },
      }}
      onChange={onChange}
    />
  );
};

export const CustomCheckCheckbox: FC<CustomCheckboxProps> = ({
  value,
  checked,
  onChange,
}) => {
  return (
    <Checkbox
      checkedIcon={<CheckIcon color="success" />}
      icon={<CloseIcon color="error" />}
      value={value}
      checked={checked}
      sx={{
        py: 0,
        "& .MuiSvgIcon-root": { fontSize: "34px" },
        "&:hover": { boxShadow: "none", background: "none" },
        "&.Mui-checked": {
          "&, & + .MuiFormControlLabel-label": {
            fontWeight: 400,
          },
        },
      }}
      onChange={onChange}
    />
  );
};
