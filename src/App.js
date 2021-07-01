import CountrySelector from './components/CountrySelector/index';
import Summary from './components/Summary/index';
import Highlight from './components/Highlight/index';
import { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './api';
import { sortBy } from 'lodash';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/vi';
import '@fontsource/roboto';

// Set vietnamese
moment.locale('vi');

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountryID, setSelectedcCountryID] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries()
      .then(res => {

        // Sort country
        const countries = sortBy(res.data, 'Country');

        setCountries(countries);
        setSelectedcCountryID('vn');
      })
  }, []);

  useEffect(() => {
    if (selectedCountryID) {
      const selectedCountry = countries.find((country) => country.ISO2 === selectedCountryID.toUpperCase());

      // Call api
      getReportByCountry(selectedCountry.Slug)
        .then((res) => {

          // Delete end 
          res.data.pop();

          setReport(res.data);
        }
        );
    }
  }, [countries, selectedCountryID])

  const handleOnchange = (e) => {
    setSelectedcCountryID(e.target.value);
  }

  return (

    <Container style={{ marginTop: 20 }}>

      <Typography variant='h2' component='h2'>Số liệu COVID-19 </Typography>
      <Typography>{moment().format('LLL')}</Typography>
      <CountrySelector countries={countries} handleOnchange={handleOnchange} value={selectedCountryID} />
      <Highlight report={report} />
      <Summary report={report} countryId={selectedCountryID} />

    </Container>
  );
}

export default App;
