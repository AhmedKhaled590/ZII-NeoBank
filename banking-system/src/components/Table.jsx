import { useEffect, useState } from 'react'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';





function DataTable({ users, fetchUsers }) {


    return (
        <>
            <div style={{ width: '100%' }} className="App">
                <Paper sx={{ width: "75%", overflow: 'hidden', margin: 'auto', marginTop: '5%' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader sx={{ minWidth: 400 }} aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell >E-Mail</TableCell>
                                    <TableCell >amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell >{row.email}</TableCell>
                                        <TableCell >{row.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button style={{ paddingTop: '3%' }} component={Link} to="/transfer" >Transfer</Button>

                </Paper>
            </div>
        </>
    );
}

export default DataTable;
