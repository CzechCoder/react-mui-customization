"use client";

import { CssBaseline, Divider, Typography } from "@mui/material";

export default function Navigation() {
  return (
    <>
      <CssBaseline />
      <div className="flex flex-col px-0 md:px-1 py-6 gap-4 w-full text-left">
        <Typography variant="h3">I am empty right now</Typography>
        <Divider sx={{ my: 5 }} variant="fullWidth" />
        <Typography variant="body1">Check back later</Typography>
      </div>
    </>
  );
}
