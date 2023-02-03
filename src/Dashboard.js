import Greetings from "./components/Greetings";
import MacrosCounts from "./components/MacrosCounts";
import useUserActivity from "./hooks/useUserActivity";
import useUserAverageSession from "./hooks/useUserAverageSession";
import useUserData from "./hooks/useUserData";
import useUserPerformance from "./hooks/useUserPerformance";

const Dashboard = () => {

    const { userData, userName, userMacros } = useUserData();
    const { userActivity } = useUserActivity();
    const { userAverageSession } = useUserAverageSession();
    const { userPerformance } = useUserPerformance();

    return (
        <div>
            <Greetings userName={userName}/>
            <MacrosCounts userMacros={userMacros} />
        </div>

    )
}

export default Dashboard