import React, { useEffect, useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";

import axios from "axios";

const url = "http://localhost:3000/blocks/";

export const Forms = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setBlocks(data);
      })
      .catch((err) => {});
  }, []);

  return (
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
                <IconButton aria-label="delete">
                  <Delete />
                </IconButton>

                <IconButton aria-label="edit">
                  <Edit />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
