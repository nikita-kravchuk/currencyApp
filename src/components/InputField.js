import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Container,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import {  useState } from "react";

const InputField = ({ allCurrencies, handleCurrencyChange,
  amount,
  handleAmountChange, handleCurrencyToChange,
  amountTo,
  handleAmountToChange, }) => {
  const [option, setOption] = useState(allCurrencies[0]);
  const [option2, setOption2] = useState(allCurrencies[1]);

  const flip = () => {
    setOption(option2);
    setOption2(option);
  };

  return (
    <Container
      sx={{
        width: 650,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        flexDirection: "row",
        marginTop: 10,
      }}
    >
      <TextField
        id="standard-basic"
        label="Amount"
        variant="standard"
        value={amount}
          onChange={handleAmountChange}
      />
      <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={option}
          onChange={handleCurrencyChange}
          label="Currency"
        >
          {allCurrencies.map((currencies) => (
            <MenuItem key={currencies} value={currencies}>
              {currencies}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SwapHorizIcon
        onClick={() => {
          flip();
        }}
      />
      <TextField
        id="standard-basic"
        label="Amount"
        variant="standard"
        value={amountTo}
          onChange={handleAmountToChange}
      />
      <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={option2}
          onChange={handleCurrencyToChange}
          label="Currency"
        >
          {allCurrencies.map((currencies) => (
            <MenuItem key={currencies} value={currencies}>
              {currencies}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default InputField;
