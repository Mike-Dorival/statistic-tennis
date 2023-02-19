import PropTypes from 'prop-types';
import classes from './Card.module.css';

function Card({ firstname, lastname, picture, rank, points, country }) {
  return (
    <div className={classes.cardBody}>
      <img src={picture} alt="image_joueur" width="300px" height="250px" />

      <div className={classes.cardInfos}>
        <p className={classes.cardTitle}>
          {firstname} {lastname}
        </p>
        <div className={classes.alignInfoPlayer}>
          <div className={classes.customLineHeight}>
            <p className={classes.cardTitleRank}>RANK</p>
            <p className={classes.cardTitleText}>#{rank}</p>
          </div>

          <div className={classes.customLineHeight}>
            <p className={classes.cardTitleRank}>POINTS</p>
            <p className={classes.cardTitleText}>{points}</p>
          </div>

          <div className={classes.customLineHeight}>
            <p className={classes.cardTitleRank}>COUNTRY</p>
            <p className={classes.cardTitleText}>{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default Card;
