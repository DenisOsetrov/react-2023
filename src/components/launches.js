import React, {useEffect, useState} from 'react';
import axios from "axios";
import Launch from "./launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/')
            .then((response) => {
                const filteredLaunches = response.data.filter((item) => item.launch_year !== '2020');
                setLaunches(filteredLaunches);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    return (
        <div>
            {
                launches.map((launch, index) => <Launch key={index} launch={launch}/>)
            }
        </div>
    );
}

export default Launches;






