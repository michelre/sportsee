import { useState, useEffect } from 'react';

//Mock userId define as 12 or 18
let userId = 12;

/**
 * Fetches and format user performance  data
 * @returns userPerformance: formatted user performance data (array of objects)
 * @example userPerformance: [{value: <integer>, kind: <string>}]
 */
const useUserPerformance = () => {
    const [userPerformance, setUserPerformance] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Format user performance data
     * @param {*} perfData: array
     * @returns formatted performance data: array of objects with "kind" attributed to corresponding string/ "value" and translated to french
     * @example userPerformance: [{value: <integer>, kind: <string>}]
     */
    const formatPerfData = (perfData) => {
        let formattedPerfData = perfData.data.map((perf) => {
            const PerfKindNumber = perf.kind;
            return {
                value: perf.value,
                kind: perfData.kind[PerfKindNumber]
            }
        })
        //Reverse array to appear in correct order on radar chart
        formattedPerfData = formattedPerfData.reverse();
        //Translate perf kinds from english to french
        formattedPerfData.forEach((perf) => {
            if (perf.kind === "intensity") {
                perf.kind = "Intensité"
            }
            if (perf.kind === "speed") {
                perf.kind = "Vitesse"
            }
            if (perf.kind === "strength") {
                perf.kind = "Force"
            }
            if (perf.kind === "endurance") {
                perf.kind = "Endurance"
            }
            if (perf.kind === "energy") {
                perf.kind = "Energie"
            }
            if (perf.kind === "cardio") {
                perf.kind = "Cardio"
            }
        })


        return formattedPerfData;
    }

    useEffect(() => {
        //Setup for cleanup
        const abortCont = new AbortController();

        fetch(`http://localhost:3000/user/${userId}/performance`)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setUserPerformance(formatPerfData(data.data));
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

    return { userPerformance, isPending, error };
}

export default useUserPerformance;
