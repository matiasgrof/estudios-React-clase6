import './App.css';
import { useEffect, useState } from 'react';
import NavHeader from './components/NavHeader';
import ErrorComponent from './components/ErrorComponent';
import Card from './components/Card';

function App() {
  const [characters, setCharacters] = useState([]);

  function handleChange(e) {

  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function getCharaters() {
    fetch('https://pg-delsur.herokuapp.com/products')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  //componentDidMount
  useEffect(() => {
    getCharaters()
  }, []);

  return (
    <>
    <NavHeader />
      <div className="container-card">
        {console.log('echaracters.length lem ',characters.products)}
            {
            characters.products ? (
              characters.products.length > 0
              ? characters.products?.map(elem => {
                console.log('elem ',elem)
                return (
                  <div className="item-details">
                          <Card
                            actorName={elem.name}
                            imageUrl={elem.image[0]}
                            characterName={elem.capacity}
                            playerNumber={elem.stock}
                            characterRole={elem.description}
                            key={elem.id}
                          ></Card>
                        </div>
                    );
                }) 
                : <ErrorComponent message="No results found :(" />
            ):(<ErrorComponent message="No results found :(" />)
            }
      </div>
    </>
  );
}

export default App;
