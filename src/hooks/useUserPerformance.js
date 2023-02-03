import { useState, useEffect } from 'react';

//Mock userId
let userId = 12;

const useUserPerformance = () => {
    const [userPerformance, setUserPerformance] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(`http://localhost:3000/user/${userId}/performance`, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setUserPerformance(data.data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('User performance fetch aborted')
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })

        // abort the fetch
        return () => abortCont.abort();
    }, [`http://localhost:3000/user/${userId}/performance`])

    // //Check data
    // console.log("PERFORMANCE-------");
    // console.log(userPerformance);

    return { userPerformance, isPending, error };
}

export default useUserPerformance;