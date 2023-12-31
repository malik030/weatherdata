import React from 'react';
import CSVReader from './components/CsvReader';
import { CSVDataContext } from './Context/csvDATA';
import WeatherData from './components/WeatherData';

function App() {
  const { csvData, } = React.useContext(CSVDataContext);

  return (
    <div className='veloccity'>
      <div className=' justify-between Under-Line flex'>
      <h1 className='text-3xl font-extrabold p-10 underline  text-white'>Weather Analyzer Component </h1>
      <CSVReader />
      </div>
      {csvData && csvData.length > 1 ? <WeatherData/> : <p className=' text-3xl text-red-600 hover:underline hover:decoration-white font-mono font-bold m-10'>Please Enter Data</p>}
      
    </div>
  );
}

export default App;
