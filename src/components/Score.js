
import './Score.css';

import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

import PropTypes from "prop-types";

const Score = ({ userScore }) => {

  const userScorePercentage = userScore * 100;

  const data = [
    {
      score: userScorePercentage,
      fill: "#E60000",
    },
  ];

  return (
    <div className="score-container">
      <h2 className="score-title">Score</h2>
      <div className="score-result-container">
        <div className="score-result">
          <h3>{userScorePercentage}%</h3>
          <p>
            de votre <br />
            objectif
          </p>
        </div>
      </div>
      <RadialBarChart
        width={260}
        height={260}
        innerRadius="60%"
        outerRadius="60%"
        data={data}
        startAngle={90}
        endAngle={-270}
        barSize={10}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          tick={false}
          angleAxisId={0}
        />
        <RadialBar dataKey="score" cornerRadius="50%" />
      </RadialBarChart>
    </div>
  );
}
Score.propTypes = {
  userScore: PropTypes.number,
};
export default Score;