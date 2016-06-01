import React, { PropTypes } from 'react';

const Auth = ({ onClick, error }) => {
  return (
    <div>
      Not authorized, please authenticate with Google:
      &nbsp;
      <button onClick={onClick}>
        Authenticate
      </button>
      { error ? <div className="alert">{error}</div> : null }
    </div>
  );
};

Auth.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Auth;
