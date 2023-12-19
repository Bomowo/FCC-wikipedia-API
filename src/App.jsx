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
            snippet: response.query.search[0].snippet,
            link: 'https://en.wikipedia.org/?curid=' + response.query.search[0].pageid
          })
        })
    .catch(function(error){console.log(error);});
  }

  return (
    <>
      <h1 onClick={getData}>FCC WikiMedia API</h1>
      <button><a href='https://en.wikipedia.org/wiki/Special:Random' target='_blank' rel="noreferrer">Get Random Article</a></button>
      {data&&<a href={data.link} target='_blank' rel="noreferrer">
        <h2>{data.title}</h2>
        <p>{data.snippet.replace(regex, "")+'...'}</p>
      </a>}


    </>
  )
}

export default App
