import {useState} from 'react'
import Panel from './panel';
import './App.css'

function App() {
  let [data, setData] = useState(null)
  let [search, setSearch] = useState('')

  let url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=";
  
  function inputSearch (e) {
    setSearch(e.target.value)
  }

  function getData () {
    if(search){
      fetch(url+search)
      .then(function(response){return response.json();})
      .then(function(response) {
        console.log(response)
        setData(() => {
          let arrOfPages=[]
          response.query.search.forEach(item=> arrOfPages.push(<Panel key={item.pageid} link={'https://en.wikipedia.org/?curid='+item.pageid} title={item.title} snippet={item.snippet}/>))
          return arrOfPages
        })
      })
      .catch(function(error){console.log(error);});
    }
  }

  return (
    <>
      <h1>FCC WikiMedia API</h1>
      <button><a href='https://en.wikipedia.org/wiki/Special:Random' target='_blank' rel="noreferrer">Get Random Article</a></button>
      <input id='search' value={search} onChange={inputSearch}></input>
      <button onClick={getData}>Find</button>
      {data&&data}
    </>
  )
}

export default App