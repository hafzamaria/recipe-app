import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Recepi from "./recipe";
function App() {
  const App_ID = "65b273e7";
  const APP_KEY = "17d2363efb8cacc1bb5161a3e7c8e31d	";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {

    ////==========================fetch=======================
    //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app =http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${App_ID}&app_key=${APP_KEY}`
    //   );
    //   const data = await response.json();
    // console.log('data:',data.hits)
    //   setData(data.hits);
  ///////===================================================////////

    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app =http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${App_ID}&app_key=${APP_KEY}`
    );
    //  const data =  response;

    console.log(response.data.hits);
    setData(response.data.hits);

    // }catch(error){
    //         console.log('error in api call:' , error);
    //     }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search)
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    // setSearch('')
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      
  
    {/* <h1 onClick={()=>setCounter(counter + 1)}>{counter}</h1> */}
    
      <div className="recipies">
        {data.map((eachRecipe, index) => (
          <Recepi
            key={index}
            title={eachRecipe.recipe.label}
            calories={eachRecipe.recipe.calories}
            image={eachRecipe.recipe.image}
            ingredients={eachRecipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
