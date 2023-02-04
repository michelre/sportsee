import "./Dashboard.css"
import Greetings from "./components/Greetings";
import MacrosCounts from "./components/MacrosCounts";
import Score from "./components/Score";
import useUserActivity from "./hooks/useUserActivity";
import useUserAverageSession from "./hooks/useUserAverageSession";
import useUserData from "./hooks/useUserData";
import useUserPerformance from "./hooks/useUserPerformance";


const Dashboard = () => {

    const { userData, userName, userMacros, userScore } = useUserData();
    const { userActivity } = useUserActivity();
    const { userAverageSession } = useUserAverageSession();
    const { userPerformance } = useUserPerformance();

    return (
        <div>
            <Greetings userName={userName} />
            <div className="charts-container" >
                {/* <MacrosCounts userMacros={userMacros} /> */}
                <Score userScore={userScore} />
            </div>
        </div>

    )
}

export default Dashboard