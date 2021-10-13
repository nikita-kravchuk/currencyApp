import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import TableComponent from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import "./app.css";
import { getCurrencyAsync, selectCurrencyData } from "./store/currency";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [allCurrencies, setAllCurrencies] = useState([]);
  const currencyRedux = useSelector(selectCurrencyData);
  const dispatch = useDispatch();

  console.log(currencyRedux)
  

  console.log( allCurrencies);
  useEffect(() => {
    dispatch(getCurrencyAsync());
  }, [dispatch]);

  useEffect(() => {
    async function fetchData(){
      const baseCurrency = currencyRedux[0].base_ccy;
      const currencies = [
        baseCurrency,
        ...currencyRedux.map((currencyRedux) => currencyRedux.ccy),
      ];
      setAllCurrencies(currencies)
    }
    fetchData();
  }, [currencyRedux]);
  

  return (
    <>
      <Header />
      <TableComponent currencyData={currencyRedux} />
      <InputField currencyData={currencyRedux} allCurrencies={allCurrencies}/>
      <Footer />
    </>
  );
}

export default App;
