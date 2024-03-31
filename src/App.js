import React,{ useState }  from 'react';
import LegoSet from './LegoSet';
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [legoSets, setLegoSets] = useState([
    {
      "id": 1,
      "name": "LEGO Creator Expert Botanicals - Flower Bouquet",
      "description": "A beautiful bouquet of flowers that never wilts, perfect for decorating any room.",
      "imageUrl": "https://www.lego.com/cdn/cs/set/assets/blteb6d782e63fd9de2/10280_Block_Standard_3.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
    },
    {
      "id": 2,
      "name": "Millennium Falcon",
      "description": "A legendary starship despite its humble origins.",
      "imageUrl": "https://www.lego.com/cdn/cs/set/assets/blt892f38a4fd55edeb/75257.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1"
    },
    
    {
      "id": 3,
      "name": "Hogwarts Castle",
      "description": "A magical replica of Hogwarts School of Witchcraft and Wizardry for fans of the Harry Potter series.",
      "imageUrl": "https://www.lego.com/cdn/cs/set/assets/blte09f96efc93d5c1d/76419.png?fit=bounds&format=png&width=1500&height=1500&dpr=1"
    },
    {
      "id": 4,
      "name": "NASA Apollo Saturn V",
      "description": "A model of the NASA Apollo Saturn V, perfect for space enthusiasts and history buffs.",
      "imageUrl": "https://www.lego.com/cdn/cs/set/assets/blt3dddc992e5559ddf/21309.jpg"
    },
    {
      "id": 5,
      "name": "Pirate Ship",
      "description": "Embark on high-seas adventures with this classic pirate ship, complete with sails and a skull flag.",
      "imageUrl": "https://www.lego.com/cdn/cs/set/assets/blt484dbd956b3229b2/31109_Block_Standard_2.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
    },
    
  ]
  );

  const filteredSets = legoSets.filter(set =>
    set.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search LEGO sets"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredSets.map(set => (
        <LegoSet key={set.id} {...set} />
      ))}
    </div>
  );
}


export default App;
