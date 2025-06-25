import React, { useEffect, useState } from 'react';

import axios from 'axios';



function App() {

 const [data, setData] = useState(null);



 useEffect(() => {

  axios.get('https://api-final-939136953825.us-central1.run.app/api/hello') 

   .then((response) => {

    setData(response.data);

   })

   .catch((error) => {

    console.error('Error fetching data:', error);

   });

 }, []);



 return (

  <div>

   <h1>API Response</h1>

   {data ? (

    <pre>{JSON.stringify(data, null, 2)}</pre>

   ) : (

    <p>Loading...</p>

   )}

  </div>

 );

}



export default App;
