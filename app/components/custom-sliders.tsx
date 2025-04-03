import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface CustomThumbComponentProps extends React.HTMLAttributes<unknown> {}

export const CustomSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== "customColor",
})<{ customColor?: string }>(({ customColor, theme }) => {
  return {
    color: customColor || "#000",
    height: 3,
    padding: "13px 0",
    transition: "color 0.5s ease-in-out",
    "& .MuiSlider-thumb": {
      height: 27,
      width: 27,
      backgroundColor: "#fff",
      border: "1px solid currentColor",
      "&:hover": {
        boxShadow: "0 0 0 8px rgba(0, 0, 0, 0.16)",
      },
      "& .custom-bar": {
        height: 9,
        width: 1,
        backgroundColor: "currentColor",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    "& .MuiSlider-track": {
      height: 3,
    },
    "& .MuiSlider-rail": {
      color: "#d8d8d8",
      opacity: 1,
      height: 3,
    },
  };
});

export const CustomThumbComponent = (props: CustomThumbComponentProps) => {
  const { children, color, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <FavoriteIcon
        sx={{ color: color, transition: "color 0.5s ease-in-out" }}
      />
    </SliderThumb>
  );
};

export const CustomSliderSingle = styled(Slider)({
  color: "green",
  height: 8,
  "& .MuiSlider-track": {
    borderBottom: "1px solid black",
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    borderBottom: "1px solid black",
    opacity: 1,
    height: 3,
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid green",
    boxShadow: "2px 5px 0px 3px #FFF",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export const CustomSliderBullet = styled(Slider)({
  color: "#f600e4",
  height: 40,
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
  "& .MuiSlider-thumb": {
    border: "1px solid #f600e4",
    boxShadow: "0px 10px 10px rgba(0,0,0,0.25)",
    height: "42px",
    width: "22px",
    borderRadius: "22px",
    background: "linear-gradient(0deg, #f600e4 0%, #ffbffb 100%)",
    cursor: "pointer",
    "&:hover": {
      background: "linear-gradient(0deg, #f600e4 0%, #ffbffb 70%)",
    },
  },
  "& .MuiSlider-valueLabel": {
    color: "#f600e4",
    lineHeight: 1.2,
    fontSize: 16,
    background: "unset",
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "2px solid #f600e4",
  },
});
