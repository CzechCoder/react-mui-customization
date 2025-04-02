"use client";

import { CssBaseline, Divider } from "@mui/material";
import { CustomButtons } from "./components/buttons";
import { OtherInputs } from "./components/other-inputs";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <div className="flex flex-col px-0 md:px-1 py-6 gap-4 w-full text-left">
        <CustomButtons />
        <Divider sx={{ my: 5 }} variant="fullWidth" />
        <OtherInputs />
      </div>
    </>
  );
}
