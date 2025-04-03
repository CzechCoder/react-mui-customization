import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CustomCheckRadio, CustomRadio } from "./custom-radio";
import { CustomCheckbox, CustomCheckCheckbox } from "./custom-checkbox";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useState } from "react";

const sliderMarks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

export const OtherInputs = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number[]) => {
    setSliderValue(newValue);
  };
  return (
    <>
      <Typography variant="h3">Checkbox</Typography>
      <Typography variant="body1">Basic variants</Typography>
      <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </Stack>
      <Typography variant="body1">Custom variants</Typography>
      <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                size="large"
                icon={<AssessmentOutlinedIcon />}
                checkedIcon={<AssessmentIcon />}
              />
            }
            label="I have a form done"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="customRed"
                size="large"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            }
            label="This one is my favorite"
          />
          <FormControlLabel
            sx={{
              "&:hover .black-icon": {
                color: "orange",
                transition: "all 0.3s ease-in-out",
              },
            }}
            control={
              <Checkbox
                color="customRed"
                size="large"
                icon={<SyncAltIcon className="black-icon" />}
                checkedIcon={<SyncAltIcon color="warning" />}
              />
            }
            label="I wish to sync the data"
          />
          <FormControlLabel
            sx={{
              "&:hover .rotate-icon": {
                transform: "rotate(-180deg)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            control={
              <Checkbox
                color="customRed"
                size="large"
                icon={<ArrowForwardIcon className="rotate-icon" />}
                checkedIcon={<ArrowBackIcon color="error" />}
              />
            }
            label="I wish to reverse the process"
          />
        </FormGroup>
      </Stack>
      <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
        <FormGroup row>
          <FormControlLabel
            control={<CustomCheckbox />}
            label="I am a custom checkbox"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={<CustomCheckCheckbox />}
            label="I am a custom check checkbox"
          />
        </FormGroup>
      </Stack>
      <Divider sx={{ my: 5 }} variant="fullWidth" />
      <Typography variant="h3">Radio</Typography>
      <Typography variant="body1">Basic variants</Typography>
      <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">
            Do you own a car?
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="yes"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="success" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="error" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Typography variant="body1">Custom variants</Typography>
      <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
        <FormControl>
          <FormLabel id="radio-buttons-group-label-disney">
            Which was the first Disney animated fairy tale?
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label-disney"
            defaultValue="little-mermaid"
            name="radio-buttons-group-disney"
          >
            <FormControlLabel
              value="little-mermaid"
              control={<CustomRadio />}
              label="Little Mermaid"
            />
            <FormControlLabel
              value="snow-white"
              control={<CustomRadio />}
              label="Snow White and the Seven Dwarfs"
            />
            <FormControlLabel
              value="beauty-and-the-beast"
              control={<CustomRadio />}
              label="Beauty and the Beast"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
        <FormControl>
          <FormLabel id="radio-buttons-group-label-job">
            Which one is true for you?
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label-job"
            defaultValue="contractor-emp"
            name="radio-buttons-group-job"
          >
            <FormControlLabel
              value="contractor-emp"
              control={<CustomCheckRadio />}
              label="I am a contractor employee"
            />
            <FormControlLabel
              value="inhouse-emp"
              control={<CustomCheckRadio />}
              label="I am a in-house employee"
            />
            <FormControlLabel
              value="business-owner"
              control={<CustomCheckRadio />}
              label="I am a business owner"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Divider sx={{ my: 5 }} variant="fullWidth" />
      <Typography variant="h3">Slider</Typography>
      <Typography variant="body1">Basic variants</Typography>
      <Stack spacing={2} direction="column">
        <Box sx={{ width: 300 }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", mb: 1 }}
          >
            <VolumeDown />
            <Slider />
            <VolumeUp />
          </Stack>
          <Slider disabled defaultValue={30} aria-label="Disabled slider" />
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            step={10}
            valueLabelDisplay="auto"
            marks={sliderMarks}
          />
          <Slider
            value={sliderValue}
            onChange={handleChange}
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
        </Box>
      </Stack>
    </>
  );
};
