import React, { useState } from 'react';
import Items from './components/Items.jsx';
import Input from './components/Input.jsx'

import './App.css';
import DATA from './mocks/API_DATA.json';


const App = () => {

  const [data, setData] = useState(DATA);
  const [change, setChange] = useState('');

  const onValueSubmit = (event) => {
  // console.log(this.value)
  }

  return (
    <div className="App">
      <header>
        <h1>Filmy <span>2021</span> na które można głosować</h1>
        {/* <Input onFormSubmit = {this.onValueSubmit} /> */}
      </header>

      <main>
        <Items data = {data} />
      </main>
      
    </div>
  );
}

export default App;
