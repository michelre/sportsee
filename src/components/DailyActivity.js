import './DailyActivity.css';
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar, ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Create daily activity bar chart component
 * @param {userActivity} array of objects
 * @example userActivity : [{"day":<date>, "kilogram":<integer>, "calories":<integer>}
 * @returns display daily activity bar chart component
 */
const DailyActivity = ({userActivity}) => {

    /**
     * Customize line chart tooltip
     * @param {active} see recharts doc https://recharts.org/en-US/api/Tooltip
     *@param {payload} see recharts doc https://recharts.org/en-US/api/Tooltip
     * @returns custom chart tooltip
     */
    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="daily-activity-tooltip">
                    <p className="daily-activity-tooltip-label">{payload[0].value}kg</p>
                    <p className="daily-activity-tooltip-label">{payload[1].value}kCal</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="daily-activity-container">
            <h2 className="daily-activity-title">Activité quotidienne</h2>
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <BarChart
                    data={userActivity}
                    barGap={8}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" vertical={false}/>
                    <XAxis
                        tickFormatter={(tick) => `${tick + 1}`}
                        tickLine={false}
                        tick={{fill: "#9B9EAC"}}
                        tickMargin={10}
                        axisLine={{stroke: "#D8D8D8"}}
                        padding={{left: -48, right: -48}}
                    />
                    <YAxis
                        yAxisId="calories"
                        dataKey="calories"
                        hide={true}
                        tickCount="3"
                    />
                    <YAxis
                        yAxisId="kilogram"
                        tickLine={false}
                        axisLine={false}
                        tick={{fill: "#9B9EAC"}}
                        tickMargin={25}
                        dataKey="kilogram"
                        tickCount="3"
                        orientation="right"
                    />
                    <Bar
                        yAxisId="kilogram"
                        barSize={7}
                        dataKey="kilogram"
                        name="Poids (kg)"
                        fill="#282D30"
                        stackId="a"
                        radius={[3, 3, 0, 0]}
                    />
                    <Bar
                        yAxisId="calories"
                        barSize={7}
                        fill="#E60000"
                        stackId="b"
                        radius={[3, 3, 0, 0]}
                        dataKey="calories"
                        name="Calories brûlées (kCal)"
                    />
                    <Legend
                        height={50}
                        width={320}
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize="8"
                    />
                    <Tooltip
                        content={<CustomTooltip/>}
                        position={{y: 35}}
                        cursor={{
                            fill: "#C4C4C4",
                            fillOpacity: "0.5",
                            strokeWidth: 10,
                        }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


DailyActivity.propTypes = {
    userActivity: PropTypes.array,
};

export default DailyActivity;
