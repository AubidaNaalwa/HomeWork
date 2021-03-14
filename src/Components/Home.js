import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


function Home(props) {
    const classes = useStyles();

    useEffect(() => {
        props.dictionaryStore.loadfromDB()
    }, [])

    return (
        <div>
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Word in Dictionary</StyledTableCell>
                            <StyledTableCell align="right">Number in Dictionary</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.dictionaryStore.Dictionary.map((row, i) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.word}
                                </StyledTableCell>
                                <StyledTableCell align="right">{i + 1}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default inject('dictionaryStore')(observer(Home));



