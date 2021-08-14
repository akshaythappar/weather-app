import React, { useEffect, useState } from 'react';
import './css/style.css'


const Tempapp = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState('Delhi');

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a42f0cc249bc3f9edd8e9d29b28da74a`
            const response = await fetch(url);
            console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setcity(resJson.main);
        }



        fetchApi();
    }, [search])

    return (<>
    
            <div className='box'>
                <div className='inputData '>
                    <input type="search"
                    value={search}
                        className='inputFeild'
                        onChange={(event) => {
                            setsearch(event.target.value);
                        }} />

                </div>

                {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                ) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className="fas fa-street-view"></i>
                                {search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°C 
                            </h1>
                            <h3 className='temp_max'>Min :  {city.temp_min}°C  | Max :  {city.temp_max}°C </h3>
                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>

                )}

</div>
             
</>
    
            )
}

            export default Tempapp;


        
