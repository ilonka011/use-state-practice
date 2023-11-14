import { useState } from 'react';
import './App.css'

export default function App() {
  const [days, setDays] = useState(0);
  const daysClick = () => {
    setDays(days + 1);
  };
  const [hours, setHours] = useState(0);
  const hoursClick = () => {
    setHours(hours + 1);
  };
  const [count, setCount] = useState(0);
  const countClick = () => {
     setCount(count + 1);
  }
  const [country, setCountry] = useState(0);
  const countryClick = () => {
    setCountry(country + 1);
  }
  const [donation, setDonation] = useState(0);
  const donationClick = () => {
    setDonation(donation + 5);
  }
  return (
    <div>
      <h3>{days} days passed since you fell in love</h3>
      <button className='btn' type='button' onClick={daysClick}> add a day</button>
      <h3>{hours} hours since you realized you are crazy</h3>
      <button  className='btn' type='button' onClick={hoursClick}>
        add an hour
        </button>
      <h3>now you clicked me {count} times </h3>
      <button  className='btn' onClick={countClick}>click again</button>
      <h3>you visited {country} countries</h3>
      <button type='button' className='btn' onClick={countryClick}>add a country</button>
      <h3>{donation} dollars were donated</h3>
      <button type='button' className='btn' onClick={donationClick}>$5 donation</button>
    </div>
  )
}



