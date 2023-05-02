import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import axios from 'axios';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS file
import './CovidMap.css'; // Import CSS file

function CovidMap() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await axios.get('https://disease.sh/v3/covid-19/all');
      const countriesData = await axios.get('https://disease.sh/v3/covid-19/countries');
      const countriesWithStats = countriesData.data.map((country) => ({
        name: country.country,
        position: [country.countryInfo.lat, country.countryInfo.long],
        active: country.active,
        recovered: country.recovered,
        deaths: country.deaths,
      }));
      setCountries(countriesWithStats);
    };
    fetchData();
  }, []);

  return (
    <div className='flex-initial w-[75%] p-4 rounded-lg border border-slate'>
    <MapContainer className="covid-map" center={[0, 0]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        
      />
      {countries.map((country) => (
        <Marker position={country.position} key={country.name} >
          <Popup className="popup">
            <div>
              <h3>{country.name}</h3>
              <p>Active cases: {country.active}</p>
              <p>Recovered cases: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}

export default CovidMap;
