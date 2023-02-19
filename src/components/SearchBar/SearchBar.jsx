import PropTypes from 'prop-types';
import './Searchbar.module.css';

function Searchbar({ data, setSearchPlayer }) {
  const handleChange = event => {
    const input = event.target.value;

    const handleFindIdPlayer = data.filter(
      ({ firstname, lastname }) =>
        firstname.toLowerCase().includes(input.toLowerCase()) ||
        lastname.toLowerCase().includes(input.toLowerCase())
    );

    setSearchPlayer(handleFindIdPlayer);
  };

  return (
    <input
      placeholder="Rechercher un joueur"
      aria-label="search-input"
      type="text"
      id="search"
      name="search"
      onChange={handleChange}
    />
  );
}

Searchbar.propTypes = {
  data: PropTypes.array,
  searchPlayer: PropTypes.array
};

export default Searchbar;
