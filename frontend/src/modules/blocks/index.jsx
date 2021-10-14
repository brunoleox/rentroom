import {
  Box,
  Button,
  Divider,
  Fab,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Add, Delete, Edit } from "@material-ui/icons";
import axios from "axios";

async function blocks(data) {
  try {
    let res = await axios({
      method: "get",
      url: "http://localhost:3000/blocks",
      data: blocks,
    });

    let data = res.data;
    return data;
  } catch (error) {
    console.log(error.response); // this is the main part. Use the response property from the error object

    return error.response;
  }
}

export default function Blocks() {
  return (
    <>
      <Typography variant="h6" variantMapping="h1" noWrap component="span">
        Blocos
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      <TableContainer component={Paper}>
        <Table aria-label="Blocos">
          <TableHead>
            <TableRow>
              <TableCell>Bloco</TableCell>
              <TableCell width="140" align="center">
                Opções
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blocks.map((block) => (
              <TableRow key={block.id}>
                <TableCell component="th" scope="row">
                  {block.name}
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={() =>
                      axios.delete("http://localhost:3000/blocks" + block.id)
                    }
                  >
                    <Delete />
                  </IconButton>
                  <IconButton aria-label="edit"></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
    </>
  );
}
