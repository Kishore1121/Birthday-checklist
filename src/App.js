import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setpeople] = useState(data)
  // console.log(people);
  return(
    <main>
      <section className='container'>
        <h3>{people.length}Birthday Today</h3>
        <List bdaypeople = {people}/>
        <button onClick={() => setpeople([]) }>Clear All</button>
      </section>
    </main>
  )
}
export default App;

