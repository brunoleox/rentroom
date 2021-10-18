import React from "react";
import {
  Divider,
  Fab,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Forms } from "../../components/Form"

export default function Blocks() {
  return (
    <>
      <Typography variant="h6" variantMapping="h1" noWrap component="div">
        Blocos
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      <Forms></Forms>

      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <Add />
      </Fab>

      {/* <AddBlock /> */}
    </>
  );
}
