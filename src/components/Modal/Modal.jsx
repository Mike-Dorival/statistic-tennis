import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal({ infoDetailPlayer, handleCloseModal }) {
  const {
    firstname,
    lastname,
    picture,
    data: { age, rank, points, weight, height },
    country: { code, country, picture: flagImage }
  } = infoDetailPlayer;

  return createPortal(
    <>
      <div className={classes.overlay}>
        <span onClick={handleCloseModal} />
        <div className={classes.modal}>
          <img
            className={
              firstname === 'Vénus' ? classes.imgDimensionsSpecific : classes.imgDimensions
            }
            src={picture}
            height="260px"
          />
          <div className={classes.modalBody}>
            <div className={classes.modalDisplayInfosPlayer}>
              <div>
                <p className={classes.modalBorderFirstname}>{firstname}</p>
                <p className={classes.modalLastname}>{lastname}</p>
              </div>
              <div className={classes.modalFlagAndText}>
                <img className={classes.imgDimensionsFlag} src={flagImage} />
                <h1>{code}</h1>
              </div>
            </div>
            <div className={classes.modalDisplayMoreInfosPlayer}>
              <div>
                <p className={classes.modalTitleCategory}>RANK</p>
                <p className={classes.modalSubTitleCategory}>#{rank}</p>
              </div>
              <div>
                <p className={classes.modalTitleCategory}>POINTS</p>
                <p className={classes.modalSubTitleCategory}>{points}</p>
              </div>
              <div>
                <p className={classes.modalTitleCategory}>COUNTRY</p>
                <p className={classes.modalSubTitleCategory}>{country}</p>
              </div>
            </div>
            <div className={classes.modalDisplayMoreInfosPlayer}>
              <div>
                <p className={classes.modalTitleCategory}>BIRTHDAY</p>
                <p className={classes.modalSubTitleCategory}>22 / 05 / 1987</p>
              </div>
              <div>
                <p className={classes.modalTitleCategory}>AGE</p>
                <p className={classes.modalSubTitleCategory}>{age}</p>
              </div>
            </div>
            <div className={classes.modalDisplayMoreInfosPlayer}>
              <div>
                <p className={classes.modalTitleCategory}>WEIGHT</p>
                <p className={classes.modalSubTitleCategory}>{weight} kg</p>
              </div>
              <div>
                <p className={classes.modalTitleCategory}>HEIGHT</p>
                <p className={classes.modalSubTitleCategory}>{height} cm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

Modal.propTypes = {
  infoDetailPlayer: PropTypes.object,
  handleCloseModal: PropTypes.func
};

export default Modal;
