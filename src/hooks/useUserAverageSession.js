import { useState, useEffect } from 'react';

//Mock userId define as 12 or 18
let userId = 12;

/**
 * Fetches and format user average session data
 * @returns Formatted user average session data userAverageSession
 * @example userAverageSession: [{"day":<integer>,"sessionLength":<integer>}]
 */
const useUserAverageSession = () => {
    const [userAverageSession, setUserAverageSession] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Format data, replaces number by day initial
     * @param {array} sessionData - array of objects containing data for graph
     * @example sessionData: [{"day":<integer>,"sessionLength":<integer>}]
     * @returns
     */
    const numberToDay = (sessionData) => {
        const formattedSessionData = sessionData.map((obj) => {
            if (obj.day === 1) {
                return {
                    day: "L",
                    sessionLength: obj.sessionLength,
                };
            }
            if (obj.day === 2) {
                return {
                    day: "M",
                    sessionLength: obj.sessionLength,
                };
            }
            if (obj.day === 3) {
                return {
                    day: "M",
                    sessionLength: obj.sessionLength,
                };
            }
            if (obj.day === 4) {
                return {
                    day: "J",
                    sessionLength: obj.sessionLength,
                };
            }
            if (obj.day === 5) {
                return {
                    day: "V",
                    sessionLength: obj.sessionLength,
                };
            }
            if (obj.day === 6) {
                return {
                    day: "S",
                    sessionLength: obj.sessionLength,
                };
            }
            if (obj.day === 7) {
                return {
                    day: "D",
                    sessionLength: obj.sessionLength,
                };
            }
            else {
                return undefined
            }
        })
        return formattedSessionData;
    }

    useEffect(() => {
        //Setup for cleanup
        const abortCont = new AbortController();

        fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setUserAverageSession(numberToDay(data.data.sessions));
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

        // Clean up effect by aborting the fetch
        return () => abortCont.abort();
    }, [`http://localhost:3000/user/${userId}/average-sessions`])



    return { userAverageSession, isPending, error };
}

export default useUserAverageSession;
