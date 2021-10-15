import { getCurrencyAsync, selectCurrencyData } from "./store/currency";

import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import TableComponent from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import "./app.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
const Currency = {
  UAH: "UAH",
  BTC: "BTC",
  USD: "USD",
  EUR: "EUR",
  RUR: "RUR",
};

function App() {
  const currencyRedux = useSelector(selectCurrencyData);
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [сurrencyRate, setCurrencyRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyAsync());
  }, [dispatch]);

  const getCurrencyRate = (from, to, currencyRedux) => {
    if (from === to) {
      return 1;
    }
    const mapCurrencies = { [Currency.UAH]: 1 };

    currencyRedux.forEach((rate) => {
      if (rate.ccy === Currency.BTC) {
        mapCurrencies[rate.ccy] = +rate.sale * mapCurrencies[Currency.USD];
      } else {
        mapCurrencies[rate.ccy] = +rate.sale;
      }
    });
    return mapCurrencies[to] / mapCurrencies[from];
  };

  useEffect(() => {
    if (fromCurrency && toCurrency && currencyRedux?.length) {
      const rate = getCurrencyRate(fromCurrency, toCurrency, currencyRedux);
      setCurrencyRate(rate);
    }
  }, [fromCurrency, toCurrency, currencyRedux]);

  useEffect(() => {
    async function fetchData() {
      const baseCurrency = currencyRedux[0].base_ccy;
      const currencies = [
        baseCurrency,
        ...currencyRedux.map((currencyRedux) => currencyRedux.ccy),
      ];
      setAllCurrencies(currencies);
      setFromCurrency(Currency.UAH);
      setToCurrency(Currency.USD);
    }
    fetchData();
  }, [currencyRedux]);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleFromAmountChange = (e) => {
    const amount = e.target.value;
    setAmount(amount);
    setAmountFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    const amount = e.target.value;
    setAmount(amount);
    setAmountFromCurrency(false);
  };

  let toAmount, fromAmount;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = amount / сurrencyRate;
  } else {
    toAmount = amount;
    fromAmount = amount * сurrencyRate;
  }

  return (
    <>
      <Header />
      <TableComponent currencyRedux={currencyRedux} />
      <InputField
        currencyRedux={currencyRedux}
        allCurrencies={allCurrencies}
        handleCurrencyChange={handleFromCurrencyChange}
        handleAmountChange={handleFromAmountChange}
        handleCurrencyToChange={handleToCurrencyChange}
        handleAmountToChange={handleToAmountChange}
        amount={fromAmount}
        amountTo={toAmount}
      />
      <Footer />
    </>
  );
}

export default App;
