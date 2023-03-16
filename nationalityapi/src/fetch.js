import { useState, useEffect, useRef } from 'react';
import Photo from './NationalityPhoto.png'

function Fetchnational() {
  // Create a ref for the input element
  const inputRef = useRef(null);
  // Define state for the input value and country data
  const [inputNationality, setInputNationality] = useState("");
  const [countryData, setCountryData] = useState(null);

  // Use the useEffect hook to focus the input element on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Define an async function to fetch data from the API
  async function fetchData() {
    let response = await fetch(`https://api.nationalize.io?name=${inputNationality}`);
    let data = await response.json();
    setCountryData(data.country[0]);
  }

  // Render the input element, button, and country data
  return (
    <div>
      <img src={Photo} alt="nationalityphoto"></img>
      <h1>Nationality App</h1>
      <h3>Enter your name below and we will predict your nationality</h3>
      {/* Use the inputRef to set the ref for the input element */}
      <input
        type="text"
        value={inputNationality}
        onChange={(e) => setInputNationality(e.target.value)}
        ref={inputRef}
      />
      {/* Call fetchData when the button is clicked */}
      <button onClick={fetchData}>Get your Nationality</button>
      {/* Display the country data*/}
      {countryData &&
        <h1>Your nationality is {countryData.country_id}</h1>
      }
    </div>
  );
}

export default Fetchnational;
