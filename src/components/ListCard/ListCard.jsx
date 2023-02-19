import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

function ListCard({ data, searchPlayer, handleFindIdPlayer }) {
  const [dataOrSearchPlayer, setDataOrSearchPlayer] = useState(data);

  useEffect(() => {
    if (searchPlayer.length > 0) {
      return setDataOrSearchPlayer(searchPlayer);
    }

    return setDataOrSearchPlayer(data);
  }, [searchPlayer, data]);

  return dataOrSearchPlayer.map(
    ({ id, firstname, lastname, picture, data: { rank, points }, country: { country } }) => {
      return (
        <div key={id} onClick={() => handleFindIdPlayer(id)} role="card">
          <Card
            firstname={firstname}
            lastname={lastname}
            rank={rank}
            points={points}
            picture={picture}
            country={country}
          />
        </div>
      );
    }
  );
}

ListCard.propTypes = {
  data: PropTypes.array,
  searchPlayer: PropTypes.array
};

export default ListCard;
