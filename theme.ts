"use client";
import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    customRed: true;
    customTeal: true;
    customLime: true;
    customPink: true;
    customOchre: true;
    customDark: true;
  }

  interface CheckboxPropsColorOverrides {
    customRed: true;
    customTeal: true;
    customLime: true;
    customPink: true;
    customOchre: true;
    customDark: true;
  }

  interface ButtonPropsVariantOverrides {
    variant1: true;
    variant2: true;
    variant3: true;
    variant4: true;
    variant5: true;
    variant6: true;
    variant7: true;
    variant8: true;
    variant9: true;
    variant10: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    bodyBold: React.CSSProperties;
    headline: React.CSSProperties;
    headlineSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bodyBold?: React.CSSProperties;
    headline?: React.CSSProperties;
    headlineSmall?: React.CSSProperties;
  }

  interface Palette {
    customRed: Palette["primary"];
    customTeal: Palette["primary"];
    customLime: Palette["primary"];
    customPink: Palette["primary"];
    customOchre: Palette["primary"];
  }

  interface PaletteOptions {
    customRed?: PaletteOptions["primary"];
    customTeal?: PaletteOptions["primary"];
    customLime?: PaletteOptions["primary"];
    customPink?: PaletteOptions["primary"];
    customOchre?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyBold: true;
    headline: true;
    headlineSmall: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    bodyBold: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    headline: {
      fontSize: "3rem",
      fontWeight: 300,
      lineHeight: 1.2,
    },
    headlineSmall: {
      fontSize: "2rem",
      fontWeight: 300,
      lineHeight: 1.2,
    },
  },
  palette: {
    primary: {
      main: "#155DFC",
    },
    customRed: {
      main: "#ff1100",
      light: "#f75348",
      dark: "#ba1f14",
      contrastText: "#FFF",
    },
    customTeal: {
      main: "#66b2b2",
      light: "#b2b8d8",
      dark: "#006666",
      contrastText: "#FFF",
    },
    customLime: {
      main: "#bfff00",
      light: "#d2ff4d",
      dark: "#99cc00",
      contrastText: "#000",
    },
    customPink: {
      main: "#ffc0cb",
      light: "#ffdae0",
      dark: "#ff8da1",
      contrastText: "#000",
    },
    customOchre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#000",
    },
    customDark: {
      main: "#3d3d3d",
      light: "#474747",
      dark: "#202020",
      contrastText: "#FFF",
    },
  } as PaletteOptions,
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          minWidth: "87px",
        },
      },
      variants: [
        {
          props: { variant: "variant1" },
          style: {
            backgroundColor: "#ff00ff",
            color: "#FFF",
            borderRadius: "15px",
            fontWeight: 600,
            webkitTransition: "all 100ms linear",
            msTransition: "all 100ms linear",
            transition: "all 100ms linear",
            "&:hover": {
              backgroundColor: "#FFF",
              color: "#000",
              boxShadow: "0px 0px 6px 2px rgba(252,28,173,0.8)",
            },
            "&:active": {
              boxShadow:
                "0 0px 0 0 #ff00ff, 0 3px 0 0 rgba(0, 0, 0, 0), 0 4px 16px rgba(0, 0, 0, 0), 0 1px 2px 1px rgba(255, 0, 255, 0.5) inset, 0 -18px 32px -2px rgba(255, 0, 255, 0.1) inset",
            },
          },
        },
        {
          props: { variant: "variant2" },
          style: {
            color: "#000",
            borderRadius: "20px",
            border: "2px solid #00b300",
            fontWeight: 600,
            webkitTransition: "all 100ms linear",
            msTransition: "all 100ms linear",
            transition: "all 100ms linear",
            "&:hover": {
              color: "#00b300",
              borderRadius: "5px",
            },
            "&:active": {
              boxShadow:
                "0 0px 0 0 #a8b6c7, 0 3px 0 0 rgba(0, 0, 0, 0), 0 4px 16px rgba(0, 0, 0, 0), 0 1px 2px 1px rgba(0, 0, 0, 0.5) inset, 0 -18px 32px -2px rgba(255, 255, 255, 0.1) inset",
            },
          },
        },
        {
          props: { variant: "variant3" },
          style: {
            color: "#0B44EF",
            borderRadius: "12% / 50%",
            fontWeight: 600,
            webkitTransition: "all 100ms linear",
            msTransition: "all 100ms linear",
            transition: "all 100ms linear",
            borderBottom: "2px solid #155DFC",
            boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 1px 10px 1px rgba(0, 0, 0, 0.2)",
            },
            "&:active": {
              transform: "scale(0.99)",
              boxShadow: "0 2px 6px 1px rgba(0, 0, 0, 0.15) inset",
            },
          },
        },
        {
          props: { variant: "variant4" },
          style: {
            backgroundColor: "#FF006A",
            backgroundImage: "linear-gradient(-45deg, #FF006A, #ff00aa)",
            color: "#fff",
            borderRadius: "0.22em",
            fontWeight: 600,
            webkitTransition: "all 150ms linear",
            msTransition: "all 150ms linear",
            transition: "all 150ms linear",
            boxShadow:
              "0 3px 0 0 #b3004a, 0 4px 4px -1px rgba(0, 0, 0, 0.6), 0 4px 6px 1px rgba(0, 0, 0, 0.3), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset",
            "&:hover": {
              backgroundColor: "#ffff00",
              boxShadow:
                "0 3px 0 0 #b3004a, 0 6px 4px -1px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.14) inset",
            },
            "&:active": {
              color: "#cdcdcd",
              transform: "translateY(3px)",
            },
          },
        },
        {
          props: { variant: "variant5" },
          style: {
            backgroundColor: "#E6EAEF",
            color: "#252730",
            borderRadius: "0.6em",
            fontWeight: 600,
            webkitTransition: "all 100ms linear",
            msTransition: "all 100ms linear",
            transition: "all 100ms linear",
            boxShadow:
              "0 3px 0 0 #b7c3d1, 0 4px 4px -1px rgba(0, 0, 0, 0.6), 0 4px 6px 1px rgba(0, 0, 0, 0.3), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset",
            "&:hover": {
              boxShadow:
                "0 3px 0 0 #b7c3d1, 0 6px 4px -1px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.14) inset",
            },
            "&:active": {
              boxShadow:
                "0 0px 0 0 #a8b6c7, 0 3px 0 0 rgba(0, 0, 0, 0), 0 4px 16px rgba(0, 0, 0, 0), 0 1px 2px 1px rgba(0, 0, 0, 0.5) inset, 0 -18px 32px -2px rgba(255, 255, 255, 0.1) inset",
              color: "#ff00aa",
            },
          },
        },
        {
          props: { variant: "variant6" },
          style: {
            backgroundColor: "#52C11F",
            backgroundImage: "linear-gradient(-45deg, #52C11F, #7ccc14)",
            color: "#FFF",
            borderRadius: "20px",
            fontWeight: 600,
            webkitTransition: "all 100ms linear",
            msTransition: "all 100ms linear",
            transition: "all 100ms linear",
            boxShadow:
              "0 3px 0 0 #b7c3d1, 0 2px 2px -1px rgba(0, 0, 0, 0.6), 0 4px 6px 1px rgba(0, 0, 0, 0.3), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset",
            "&:hover": {
              color: "#52C11F",
              backgroundColor: "#FFF",
              backgroundImage: "none",
              border: "1px solid #52C11F",
              boxShadow:
                "0 3px 0 0 #b7c3d1, 0 4px 2px -1px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.14) inset",
            },
            "&:active": {
              boxShadow:
                "0 0px 0 0 #a8b6c7, 0 3px 0 0 rgba(0, 0, 0, 0), 0 4px 16px rgba(0, 0, 0, 0), 0 1px 2px 1px rgba(0, 0, 0, 0.5) inset, 0 -18px 32px -2px rgba(255, 255, 255, 0.1) inset",
              color: "#cdcdcd",
            },
          },
        },
        {
          props: { variant: "variant7" },
          style: {
            color: "#FF006A",
            border: "1px solid #FF006A",
            borderRadius: "20px",
            fontWeight: 600,
            webkitTransition: "all 100ms linear",
            msTransition: "all 100ms linear",
            transition: "all 100ms linear",
            "&:hover": {
              color: "#000",
              transform: "scale(1.1)",
            },
            "&:active": {
              transform: "scale(0.9)",
            },
          },
        },
        {
          props: { variant: "variant8" },
          style: {
            borderRadius: "5px",
            border: "1px solid #00c6ff",
            fontWeight: 500,
            webkitTransition: "all 100ms linear",
            msTransition: "all 100ms linear",
            transition: "all 100ms linear",
            boxShadow:
              "6px 0 0 0 #00c6ff, 6px 6px 0 0 #00c6ff, 0 6px 0 0 #00c6ff",
            "&:hover": {
              color: "#000",
            },
            "&:active": {
              color: "#cdcdcd",
              transform: "scale(0.9)",
            },
          },
        },
        {
          props: { variant: "variant9" },
          style: {
            border: "1px solid #991BE2",
            color: "#991BE2",
            fontWeight: 500,
            lineHeight: "0.875rem",
            "&:hover": {
              color: "#ff00aa",
              borderColor: "#ff00aa",
            },
            "&:active": {
              color: "white",
              background:
                "linear-gradient(0deg, rgba(158,0,144,1) 0%, rgba(246,0,228,1) 100%)",
            },
          },
        },
        {
          props: { variant: "variant10" },
          style: {
            color: "#000",
            border: "1px solid #387aff",
            background:
              "linear-gradient(0deg, rgba(0,198,255,1) 0%, rgba(143,230,255,1) 100%)",
            fontWeight: 500,
            webkitTransition: "all 100ms linear",
            msTransition: "all 100ms linear",
            transition: "all 100ms linear",
            lineHeight: "0.875rem",
            "&:hover": {
              borderColor: "#000",
              color: "#FFF",
              background:
                "linear-gradient(0deg, rgba(0,32,41,1) 0%, rgba(136,136,136,1) 100%)",
            },
            "&:active": {
              transform: "translateY(2px)",
              background:
                "linear-gradient(0deg, rgba(136,136,136,1) 0%, rgba(0,32,41,1) 100%)",
            },
          },
        },
      ],
    },
  },
}) as ThemeOptions;

export default theme;
