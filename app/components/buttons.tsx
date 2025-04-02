import { Typography, Stack, Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

export const CustomButtons = () => (
  <>
    <Typography variant="h3">Buttons</Typography>
    <Typography variant="body1">Basic variants</Typography>
    <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
      <Button variant="contained">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="text">Button</Button>
    </Stack>
    <Typography variant="body1">Basic Colors</Typography>
    <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
      <Button variant="contained" color="primary">
        Button
      </Button>
      <Button variant="contained" color="secondary">
        Button
      </Button>
      <Button variant="contained" color="success">
        Button
      </Button>
      <Button variant="contained" color="error">
        Button
      </Button>
      <Button variant="contained" color="info">
        Button
      </Button>
      <Button variant="contained" color="warning">
        Button
      </Button>
    </Stack>
    <Typography variant="body1">Custom Colors</Typography>
    <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
      <Button variant="contained" color="customRed">
        Red
      </Button>
      <Button variant="contained" color="customTeal">
        Teal
      </Button>
      <Button variant="contained" color="customLime">
        Lime
      </Button>
      <Button variant="contained" color="customPink">
        Pink
      </Button>
      <Button variant="contained" color="customOchre">
        Ochre
      </Button>
      <Button variant="contained" color="customDark">
        Dark
      </Button>
    </Stack>
    <Typography variant="body1">Custom Variants</Typography>
    <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
      <Button variant="variant1">Variant 1</Button>
      <Button variant="variant2">Variant 2</Button>
      <Button variant="variant3">Variant 3</Button>
      <Button variant="variant4">Variant 4</Button>
      <Button variant="variant5">Variant 5</Button>
      <Button variant="variant6">Variant 6</Button>
    </Stack>
    <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
      <Button variant="variant7" startIcon={<ArrowBackIcon />}>
        Variant 7
      </Button>
      <Button
        variant="variant8"
        sx={{
          "&:hover .rotate-icon": { transform: "rotate(90deg)" },
        }}
        endIcon={
          <Box
            className="rotate-icon"
            sx={{
              display: "inline-block",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <AirplanemodeActiveIcon />
          </Box>
        }
      >
        Variant 8
      </Button>
      <Button
        variant="variant9"
        startIcon={
          <ArrowForwardIcon
            className="left-icon"
            sx={{ transition: "transform 0.3s ease-in-out" }}
          />
        }
        endIcon={
          <ArrowBackIcon
            className="right-icon"
            sx={{
              transition: "transform 0.3s ease-in-out",
            }}
          />
        }
      >
        Variant 9
      </Button>
      <Button
        variant="variant10"
        sx={{
          transition: "all 0.3s ease-in-out",
          "&:hover .sun-icon": {
            transform: "translateY(10px)",
            opacity: 0,
          },
          "&:hover .moon-icon": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        }}
        startIcon={
          <SunnyIcon
            className="sun-icon"
            sx={{
              transition: "all 0.3s ease-in-out",
              transform: "translateY(0)",
            }}
          />
        }
        endIcon={
          <BedtimeIcon
            className="moon-icon"
            sx={{
              opacity: 0,
              transition: "all 0.3s ease-in-out",
              transform: "translateY(10px)",
            }}
          />
        }
      >
        Variant 10
      </Button>
    </Stack>
  </>
);
