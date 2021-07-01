import React from 'react';
import { Grid} from '@material-ui/core';
import HighLightCard from './HighLightCard';

function Highlight(props) {
    const { report } = props;
    const data = report && report.length ? report[report.length - 1] : [];
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'comfirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'deaths'
        }
    ];

    return (

        <Grid container spacing={3}>
            {
                summary.map(item =>
                    <Grid item sm={4} xs={12} key={item.type}>
                        <HighLightCard title={item.title} count={item.count} type={item.type} />
                    </Grid>
                )
            }
        </Grid>

    );
}

export default Highlight;