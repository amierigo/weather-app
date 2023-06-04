import * as React from "react";
import {
  Hidden,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { getCurrentDate } from "../../../utils/helper";

const AppTable = ({ data }) => {
  console.log("Data", data.length)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="caption table">
        {data.length === 0 && (
          <caption>No city found.</caption>
        )}
        <TableHead>
          <TableRow>
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell align="left">Temp&nbsp;(F)</TableCell>
            <Hidden smDown>
              <>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Main</TableCell>
                <TableCell align="left">Pressure</TableCell>
                <TableCell align="left">Humidity</TableCell>
              </>
            </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {getCurrentDate(row?.dt)}
              </TableCell>
              <TableCell align="left">{row?.main?.temp}</TableCell>
              <Hidden smDown>
                <>
                  <TableCell align="left">
                    {row?.weather[0]?.description}
                  </TableCell>
                  <TableCell align="left">{row?.weather[0]?.main}</TableCell>
                  <TableCell align="left">{row?.main?.pressure}</TableCell>
                  <TableCell align="left">{row?.main?.humidity}</TableCell>
                </>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
