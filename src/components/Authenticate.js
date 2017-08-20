// @flow

import React from 'react';

type Props = {
  onClick: Function,
  error?: string,
};

function Auth({ onClick, error }: Props) {
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

export default Auth;
