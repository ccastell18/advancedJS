import React, { useEffect, useState } from 'react';

import CardList from '../components/cardlist';
import Searchbox from '../components/searchboxh';
import Scroll from '../components/scroll';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  });

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
  }, []);

  return (
    <div className="tc">
      <h1>Robo Friends</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />;
      </Scroll>
    </div>
  );
};

export default App;
