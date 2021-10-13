import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const TableComponent = ({ currencyData }) => {
  return (
    <TableContainer
      sx={{
        width: 650,
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Currency/Current Date</TableCell>
            <TableCell align="center">Buy</TableCell>
            <TableCell align="center">Sale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyData.map((row) => (
            <TableRow
              key={row.ccy}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.ccy}/{row.base_ccy}
              </TableCell>
              <TableCell align="center">{row.sale}</TableCell>
              <TableCell align="center">{row.buy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
