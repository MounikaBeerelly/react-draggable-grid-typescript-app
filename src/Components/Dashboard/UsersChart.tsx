import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    {
        "Number Of Users": 3,
        "Time": "6:00"
    },
    {
        "Number Of Users": 5,
        "Time": "7:00"
    },
    {
        "Number Of Users": 8,
        "Time": "8:00"
    },
    {
        "Number Of Users": 6,
        "Time": "9:00"
    },
    {
        "Number Of Users": 10,
        "Time": "10:00"
    },
    {
        "Number Of Users": 7,
        "Time": "11:00"
    },
    {
        "Number Of Users": 4,
        "Time": "12:00"
    }
]
class Chart extends Component {

    render() {
        return (
            <LineChart width={300} height={200} data={data}>
            <Line type='linear' dataKey="Number Of Users" stroke="#08B" dot={false} />
            <CartesianGrid stroke="#ccc" vertical={false} />
            <XAxis dataKey="Time" />
            <YAxis axisLine={false} domain={[0, 30]} />
            <Legend />
            <Tooltip />
        </LineChart>
        );
    }
}
export default Chart;