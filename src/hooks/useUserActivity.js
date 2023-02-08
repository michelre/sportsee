import { useState, useEffect } from 'react';

//Mock userId define as 12 or 18
let userId = 12;

/**
 * Fetches and format user activity data
 * @returns Formatted userActivity data
 * @example userActivity : [{"day":<date>, "kilogram":<integer>, "calories":<integer>}
 */
const useUserActivity = () => {
    const [userActivity, setUserActivity] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Setup for cleanup
        const abortCont = new AbortController();

        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                //Access and set required data
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

        // Clean up effect by aborting the fetch
        return () => abortCont.abort();
    }, [`http://localhost:3000/user/${userId}/activity`])

    return { userActivity, isPending, error };
}

export default useUserActivity;
