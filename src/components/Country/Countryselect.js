import React, {useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from '.Countryselect.module.css';
import { countryList } from '../../api';

const CountrySelect = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await countryList);
        }
        fetchCountries();
    }, []);
    return (
        <FormControl>
            <NativeSelect>
                <option value=''>Worldwide</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelect;