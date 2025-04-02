import {
  Checkbox,
  FormControlLabel,
  FormGroup,
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
import Image from "next/image";

export const OtherInputs = () => (
  <>
    {" "}
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
          control={
            <Checkbox
              color="customRed"
              size="large"
              icon={<SyncAltIcon />}
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
          control={
            <Checkbox
              disableRipple
              size="large"
              icon={
                <Image
                  src="/static/checkbox-outline.svg"
                  height={24}
                  width={24}
                  alt="unchecked"
                />
              }
              checkedIcon={
                <Image
                  src="/static/checkbox-fill.svg"
                  height={24}
                  width={24}
                  alt="checked"
                />
              }
            />
          }
          label="I am a custom checkbox"
        />
      </FormGroup>
    </Stack>
  </>
);
