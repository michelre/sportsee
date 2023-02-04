import "./Performance.css";
import PropTypes from "prop-types";
import {
    PolarGrid,
    ResponsiveContainer,
    RadarChart,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts";

const Performance = ({ userPerformance }) => {
    return (
        <div className="radarChart chart-box">
            <ResponsiveContainer
                width="100%"
                height="100%">
                <RadarChart
                    fill="white"
                    stroke="white"
                    outerRadius={85}
                    width={30}
                    height={180}
                    data={userPerformance}
                    >
                    <PolarGrid
                        radialLines={false}
                    />
                    <PolarAngleAxis
                        dataKey="kind"
                     
                        stroke="white"
                        tick={{ fontSize: 12, fontWeight: 500,paddingTop: 16 }}
                        tickLine={false}
                        axisLine={false} />
                    <PolarRadiusAxis
                        angle={30}
                        tick={false}
                        domain={[0, 300]}
                        axisLine={false}
                        tickLine={false} />
                    <Radar
                        dataKey="value"
                        stroke="transparent"
                        fill="#FF0101"
                        fillOpacity={0.6} />


                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

Performance.propTypes = {
    performance: PropTypes.array,
};

export default Performance