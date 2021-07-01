import React from 'react';
import { FormHelperText, InputLabel, FormControl, NativeSelect, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    formControl: {
        margin: `${theme.spacing(3)}px 0`
    }
}));

function CountrySelector(props) {
    const { value, handleOnchange, countries } = props;
    const style = useStyle();

    return (
        < FormControl className={style.formControl}>
            <InputLabel htmlFor="" shrink> Quốc gia</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnchange}
                inputProps={{
                    name: 'country',
                    id: 'countrySelector'
                }}
            >
                {
                    countries.map((country) => {
                        return <option key={country.ISO2} value={country.ISO2.toLowerCase()}>{country.Country}</option>
                    })
                }
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    );
}

export default CountrySelector;