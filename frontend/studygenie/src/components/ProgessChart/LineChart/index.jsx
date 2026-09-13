import { LineChart, 
    Line, 
    ResponsiveContainer, 
    XAxis, 
    YAxis, 
    Tooltip,
} from "recharts";

const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 300 },
    { name: "May", value: 300 },
    { name: "Jun", value: 400 },
    { name: "Jan", value: 300 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 500 },
];

function LineChartComp(){
    return (
        <ResponsiveContainer 
            width="400" 
            height="300" 
            // style={{ minWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        >
            <LineChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                margin={{
                    top: 20,
                    right: 0,
                    left: -50,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="name" />
                <YAxis 
                    dataKey="value"
                    domain={['auto', 'auto']}
                    type="number"
                />
                <Line
                    data={data}
                    type="linear"
                    animationDuration={1000}
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                />
                <Tooltip/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartComp;