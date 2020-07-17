import React, {useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountrySelect.module.css';
import { countryList } from '../../api';

const CountrySelect = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await countryList());
        }
        fetchCountries();
    }, [setFetchedCountries]);
    return (
        <FormControl>
            <NativeSelect default="" onChange={(e) =>{handleCountryChange(e.target.value)}}>
                <option value=''>Worldwide</option>
                {fetchedCountries.map((country,i) => <option value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelect;