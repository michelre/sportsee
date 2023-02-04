import "./Dashboard.css"
import Greetings from "./components/Greetings";
import MacrosCounts from "./components/MacrosCounts";
import Score from "./components/Score";
import useUserActivity from "./hooks/useUserActivity";
import useUserAverageSession from "./hooks/useUserAverageSession";
import useUserData from "./hooks/useUserData";
import useUserPerformance from "./hooks/useUserPerformance";
import DailyActivity from "./components/DailyActivity";


const Dashboard = () => {

    const { userData, userName, userMacros, userScore } = useUserData();
    const { userActivity } = useUserActivity();
    const { userAverageSession } = useUserAverageSession();
    const { userPerformance } = useUserPerformance();

    return (
        <div>
            <Greetings userName={userName} />
            <div className="charts-container" >
                <DailyActivity userActivity= {userActivity} />
                <Score userScore={userScore} />
                <MacrosCounts userMacros={userMacros} />
            </div>
        </div>

    )
}

export default Dashboard