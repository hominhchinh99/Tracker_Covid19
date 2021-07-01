import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@material-ui/core';
import LineCharts from './../Charts/LineCharts/index';
import HighMaps from '../Charts/HighMaps/index';
import { getMapDataByCountryId } from '../../api';

function Summary(props) {
    const { report, countryId } = props;
    const [mapData, setMapData] = useState({});

    useEffect(() => {
        if (countryId) {
            getMapDataByCountryId(countryId)
                .then(res => {
                    setMapData(res);
                })
                .catch((err) => console.log({ err }));
        }
    }, [countryId])

    return (
        <div style={{ marginTop: 10 }}>

            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <Card>
                        <LineCharts data={report} />
                    </Card>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <HighMaps mapData={mapData}></HighMaps>
                </Grid>
            </Grid>

        </div>
    );
}

export default Summary;