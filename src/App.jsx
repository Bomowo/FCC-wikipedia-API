import {useState} from 'react'
import './App.css'

function App() {
  let [data, setData] = useState(null)

  //regex for clean up html tags in snippet from wikimedia API
  const regex = /(<([^>]+)>)/gi;

  function getData () {
    var url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=Nelson Mandela"; 

    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {
          console.log(response)
          setData({
            title: response.query.search[0].title,
            snippet: response.query.search[0].snippet
          })
        })
    .catch(function(error){console.log(error);});
  }

  return (
    <>
      <h1 onClick={getData}>Hello World !</h1>
      <h2>{data&&data.title}</h2>
      <p>{data&&data.snippet.replace(regex, "")+'...'}</p>
    </>
  )
}

export default App
