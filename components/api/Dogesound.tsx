import { useState, useEffect } from "react";

export default function Dogesound() {
    const [isData, setData] = useState("");

    async function getData(){
        try {
            const res = await fetch("https://api.dogesound.club/dogesoundwinner");
            const data = await res.json();
            setData(data.dogesound);
        } catch (error) {
            setData("Hey, there seems to be a temporary issue with the API, so I can't load the data right now. If you see this message, it means there's a problem, so please let the operations team know!");
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return isData;
}