import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Container,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useState } from "react";

const InputField = ({ currencyRedux ,allCurrencies }) => {
  const [option, setOption] = useState("");
  const [option2, setOption2] = useState("");
  const [fieldVal, setFieldVal] = useState(0);

  console.log(fieldVal);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleChange2 = (event) => {
    setOption2(event.target.value);
  };

  const flip = () => {
    setOption(option2);
    setOption2(option);
  };

  // const convert = () => {
  //   let rate = currencyData.buy;
  //   setSecondFieldVal(rate * firstFieldVal);
  // };

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
        value={fieldVal}
        onChange={(e) => setFieldVal(e.target.value)}
      />
      <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={option}
          onChange={handleChange}
          label="Currency"
          defaultValue={allCurrencies[0]}
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
        value={fieldVal}
        onChange={(e) => setFieldVal(e.target.value)}
      />
      <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={option2}
          onChange={handleChange2}
          label="Currency"
          defaultValue={allCurrencies[1]}
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
