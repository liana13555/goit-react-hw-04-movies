import PropTypes from 'prop-types';

export default function LoadMoreBtnClick({ onClick }) {
  return (
    <div>
    <button type="button" onClick={onClick}>
      Load more
      </button>
      </div>
  );
};

LoadMoreBtnClick.propTypes = {
  onClick: PropTypes.func.isRequired,
};