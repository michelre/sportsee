import { useState, useEffect } from 'react';

//Mock userId
let userId = 12;

const useUserAverageSession = () => {
    const [userAverageSession, setUserAverageSession] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //Format data, replaces day number by initial
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

        // abort the fetch
        return () => abortCont.abort();
    }, [`http://localhost:3000/user/${userId}/average-sessions`])



    return { userAverageSession, isPending, error };
}

export default useUserAverageSession;