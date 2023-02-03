import { useState, useEffect } from 'react';

//Mock userId
let userId = 12;

const useUserAverageSession = () => {
    const [userAverageSession, setUserAverageSession] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(`http://localhost:3000/user/${userId}/average-sessions`, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setUserAverageSession(data.data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('User average session fetch aborted')
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })

        // abort the fetch
        return () => abortCont.abort();
    }, [`http://localhost:3000/user/${userId}/average-sessions`])


    // //Check data
    // console.log("SESSIONS-------");
    // console.log(userAverageSession);


    return { userAverageSession, isPending, error };
}

export default useUserAverageSession;