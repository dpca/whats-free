import React from 'react';
import PropTypes from 'prop-types';

function Auth({ onClick, error }) {
  return (
    <div>
      { error ? <div className="alert alert-warning">{error}</div> : null }
      Please authenticate with Google:
      &nbsp;
      <button onClick={onClick}>
        Authenticate
      </button>
    </div>
  );
}

Auth.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    error: PropTypes.string,
  }),
  PropTypes.shape({
    onClick: PropTypes.func.isRequired,
  }),
]);

export default Auth;
