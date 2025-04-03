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
