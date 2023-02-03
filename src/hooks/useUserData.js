import { useState, useEffect } from 'react';

//Mock userId
let userId = 12;

const useUserData = () => {
    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(`http://localhost:3000/user/${userId}`, { signal: abortCont.signal })
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

        // abort the fetch
        return () => abortCont.abort();
    }, [`http://localhost:3000/user/${userId}`])


    // //Check data
    // console.log("USERDATA-------");
    // console.log(userData);


    return { userData, userName, isPending, error };
}

export default useUserData;