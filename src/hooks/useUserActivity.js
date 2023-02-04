import { useState, useEffect } from 'react';

//Mock userId
let userId = 12;

const useUserActivity = () => {
    const [userActivity, setUserActivity] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(`http://localhost:3000/user/${userId}/activity`, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setUserActivity(data.data.sessions);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('User activity fetch aborted')
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })

        // abort the fetch
        return () => abortCont.abort();
    }, [`http://localhost:3000/user/${userId}/activity`])

    return { userActivity, isPending, error };
}

export default useUserActivity;