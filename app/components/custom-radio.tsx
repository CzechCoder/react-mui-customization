import { type FC } from "react";
import { Radio } from "@mui/material";
import Image from "next/image";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface CustomRadioProps {
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: string;
}

export const CustomRadio: FC<CustomRadioProps> = (props) => {
  return (
    <Radio
      checkedIcon={
        <Image
          src="/static/radio-checked.svg"
          height={24}
          width={24}
          alt="checked"
        />
      }
      icon={
        <Image
          src="/static/radio-outline.svg"
          height={24}
          width={24}
          alt="unchecked"
        />
      }
      sx={{
        "& .MuiSvgIcon-root": { fontSize: "34px" },
        "&:hover": { boxShadow: "none", background: "none" },
      }}
      {...props}
    />
  );
};

export const CustomCheckRadio: FC<CustomRadioProps> = (props) => {
  return (
    <Radio
      checkedIcon={<TaskAltIcon color="success" />}
      icon={<TaskAltIcon color="error" />}
      sx={{
        "& .MuiSvgIcon-root": { fontSize: "34px" },
        "&:hover": { boxShadow: "none", background: "none" },
      }}
      {...props}
    />
  );
};
