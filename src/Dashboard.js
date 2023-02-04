import "./Dashboard.css"
import Greetings from "./components/Greetings";
import MacrosCounts from "./components/MacrosCounts";
import Score from "./components/Score";
import useUserActivity from "./hooks/useUserActivity";
import useUserAverageSession from "./hooks/useUserAverageSession";
import useUserData from "./hooks/useUserData";
import useUserPerformance from "./hooks/useUserPerformance";
import DailyActivity from "./components/DailyActivity";
import AverageSession from "./components/AverageSession";
import Performance from "./components/Performance";


const Dashboard = () => {

    const { userName, userMacros, userScore } = useUserData();
    const { userActivity } = useUserActivity();
    const { userAverageSession } = useUserAverageSession();
    const { userPerformance } = useUserPerformance();

    return (
        <div className="dashboard-body">
            <Greetings userName={userName} />
            <div className="charts-container" >
                <div className="left-charts-container">
                    <DailyActivity userActivity={userActivity} />
                    <div className="session-performance-score-container">
                        <AverageSession userAverageSession={userAverageSession} />
                        <Performance userPerformance={userPerformance} />
                        <Score userScore={userScore} />
                    </div>
                </div>
                <MacrosCounts userMacros={userMacros} />
            </div>
        </div>

    )
}

export default Dashboard