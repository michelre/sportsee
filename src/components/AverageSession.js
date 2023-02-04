import "./AverageSession.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";

const AverageSession = ({ userAverageSession }) => {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="average-session-tooltip">
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="average-session-container">
            <h2 className="average-session-title">Durée moyenne des sessions</h2>
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <LineChart
                width="100%"
                height="100%"
                    data={userAverageSession}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid
                        horizontal={false}
                        vertical={false}
                        fill="#E60000" />
                    <XAxis
                        interval="preserveStartEnd"
                        dataKey="day"
                        tickLine={false}
                        mirror={true}
                        tick={{ stroke: '#FFFFFF', strokeWidth: 0.25, 
                        fontSize: "12px", }} 
                        padding={{ left: 18,right: 18}}
                        />
                    <YAxis
                        hide={true}
                        dataKey="sessionLength"
                        padding={{ top: 80, bottom: 50 }} />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 79 }} />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.75)"
                        strokeWidth={1}
                        dot={false}
                        activeDot={{ stroke: "rgba(255, 255, 255, 0.198345)", strokeWidth: "10px", r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

}

AverageSession.propTypes = {
    userSession: PropTypes.array,
};

export default AverageSession;