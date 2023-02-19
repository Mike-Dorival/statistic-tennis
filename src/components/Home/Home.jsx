import { useState, useEffect } from 'react';
import ListCard from '../ListCard/ListCard';
import Modal from '../Modal/Modal';
import Searchbar from '../SearchBar/SearchBar';
import classes from './Home.module.css';
import { formatData } from './utils/utils';

function Home() {
  const [data, setData] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState([]);
  const [infoDetailPlayer, setInfoDetailPlayer] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch('https://data.latelier.co/training/tennis_stats/headtohead.json')
      .then(response => response.json())
      .then(data => {
        const result = formatData({ data });
        setData(result);
      })
      .catch(error => {
        setError({ isError: true, message: error.message });
      });
  }, []);

  const handleFindIdPlayer = id => {
    const findPlayerById = data.find(obj => obj.id === id);
    setInfoDetailPlayer(findPlayerById);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {error.isError ? (
        <p>{error.message}</p>
      ) : (
        <>
          <Searchbar data={data} setSearchPlayer={setSearchPlayer} />
          <div className={classes.scroll}>
            <ListCard
              data={data}
              searchPlayer={searchPlayer}
              handleFindIdPlayer={handleFindIdPlayer}
            />
          </div>
          {openModal && (
            <Modal handleCloseModal={handleCloseModal} infoDetailPlayer={infoDetailPlayer} />
          )}
        </>
      )}
    </>
  );
}

export default Home;
