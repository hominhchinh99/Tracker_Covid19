import React from 'react';
import { Card, Typography, CardContent, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup'

// Set color highlight
const useStyle = makeStyles({
    wrapper: (props) => {
        if (props.type === 'comfirmed') return { borderLeft: '5px solid #c9302c' }
        if (props.type === 'recovered') return { borderLeft: '5px solid #28a745' }
        if (props.type === 'deaths') return { borderLeft: '5px solid gray' }
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
    },
    count: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

function HighLightCard(props) {
    const { title, count, type } = props;
    const style = useStyle({ type });

    return (

        <Card className={style.wrapper}>
            <CardContent>
                <Typography component="p" variant="body2" className={style.title}>{title}</Typography>
                <Typography component="span" variant="body2" className={style.count}>
                    <CountUp end={count || 0} duration={2} separator=' ' />
                </Typography>
            </CardContent>
        </Card>

    );
}

export default HighLightCard;