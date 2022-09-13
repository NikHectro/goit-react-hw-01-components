// import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics({ title, stats }) {

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(el => {
          return (
            <li className={css.item} key={el.id}>
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,)
}
