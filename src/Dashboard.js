import useUserActivity from "./hooks/useUserActivity";
import useUserAverageSession from "./hooks/useUserAverageSession";
import useUserData from "./hooks/useUserData";
import useUserPerformance from "./hooks/useUserPerformance";

const Dashboard = () => {

    const { userData } = useUserData();
    const { userActivity } = useUserActivity();
    const { userAverageSession } = useUserAverageSession();
    const { userPerformance } = useUserPerformance();

    console.log(userData);
    console.log(userActivity);
    console.log(userAverageSession);
    console.log(userPerformance);

    return (
        <div>
            <div>Dashboard</div>

        </div>

    )
}

export default Dashboard