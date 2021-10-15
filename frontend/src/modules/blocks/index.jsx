import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
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
import { ConfirmationDialog } from "../../components/confirmationDialog";
import { Add, Delete, Edit } from "@material-ui/icons";
import axios from "axios";

const url = "http://localhost:3000/blocks/";

export default function Blocks() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setBlocks(data);
      })
      .catch((err) => {});
  }, []);

  const [deleteOptions, setDeleteOptions] = useState({});

  const handleDelete = (item) => {
    setDeleteOptions({
      show: true,
      itemId: item.id,
      itemDescription: item.name,
    });
  };

  const handleDeleteCallBack = (value) => {
    const { itemId } = deleteOptions;
    setDeleteOptions({ show: false, itemId: null, itemDescription: null });

    if (value === "Confirmar") {
      try {
        axios.delete(url + itemId);
        console.log(itemId);
      } catch (error) {}
    }
  };

  return (
    <>
      <Typography variant="h6" variantMapping="h1" noWrap component="span">
        Blocos
      </Typography>

      <Divider sx={{ marginBottom: "20px" }} />

      <TableContainer component={Paper}>
        <>
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
              {blocks.length > 0 ? (
                blocks.map((block) => (
                  <TableRow key={block.id}>
                    <TableCell component="th" scope="row">
                      {block.name}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(block)}
                      >
                        <Delete />
                      </IconButton>

                      <IconButton aria-label="edit">
                        <Edit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Alert severity="warning">
                  <AlertTitle>Sem Informações</AlertTitle>
                  Não foram encontrados blocos, cadastre por favor!
                </Alert>
              )}
            </TableBody>
          </Table>
        </>
      </TableContainer>

      <ConfirmationDialog
        id={`delete-${deleteOptions.blockId}`}
        title="Excluir"
        confirmButtonText="Excluir"
        keepMounted
        open={deleteOptions.show}
        onClose={handleDeleteCallBack}
      >
        Deseja realmente excluir o item{" "}
        <strong>{deleteOptions.itemDescription}</strong>
      </ConfirmationDialog>

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
