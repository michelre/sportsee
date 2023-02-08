import { useState, useEffect } from 'react';

//Mock userId define as 12 or 18
let userId = 12;

/**
 * Fetches and format user activity data
 * @returns userdata, userName, userMacros, userScore
 * @example userData :  {"id": <integer>, "userInfos":{"firstName": <string>, "lastName": <string> , "age":<integer>}, "todayScore":<number>, "keyData":{"calorieCount":<integer>, "proteinCount":<integer>, "carbohydrateCount":<integer>, "lipidCount":<integer>}
 * @example username : <string>
 * @example user macros : {"calorieCount":<integer>, "proteinCount":<integer>, "carbohydrateCount":<integer>, "lipidCount":<integer>}
 * @example userScore : <number>
 */
const useUserData = () => {
    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userMacros, setUserMacros] = useState(null);
    const [userScore, setUserScore] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Setup for cleanup
        const abortCont = new AbortController();

        fetch(`http://localhost:3000/user/${userId}`)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setUserData(data.data);
                setUserName(data.data.userInfos.firstName);
                setUserMacros(data.data.keyData);
                setUserScore(data.data.todayScore);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('User data fetch aborted')
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })

         // Clean up effect by aborting the fetch
        return () => abortCont.abort();
    }, [`http://localhost:3000/user/${userId}`])


    return { userData, userName, userMacros, userScore, isPending, error };
}

export default useUserData;
