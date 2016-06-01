import React, { PropTypes } from 'react';

const Auth = ({ onClick, error }) => {
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
};

Auth.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Auth;
