// src/components/ContributionsTable.js
import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const ContributionsTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Contributor</TableCell>
            <TableCell>Line Changes</TableCell>
            <TableCell>File Changes</TableCell>
            <TableCell>PRs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.contributor}>
              <TableCell>{row.contributor}</TableCell>
              <TableCell>{row.lineChanges}</TableCell>
              <TableCell>{row.fileChanges}</TableCell>
              <TableCell>{row.prs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContributionsTable;
