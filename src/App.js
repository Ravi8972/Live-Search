import React,{useState,useEffect} from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  const items =  ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  useEffect (() => { 
    console.log("i am running");
    setResults(items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()) ) );
    },[searchTerm]);



  return (
    <div className="App">
      
        {/* Input field for user to type search term */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {/* Display filtered items */}
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;


