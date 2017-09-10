// @flow

import React from 'react';
import './Authenticate.css';

type Props = {
  onClick: Function,
  error: ?string,
};

function Auth({ onClick, error }: Props) {
  return (
    <div className="Authenticate">
      <div className="wrapper">
        <div className="form">
          <h3 className="text-center">Please sign in</h3>
          <hr />
          <button className="btn btn-lg btn-primary btn-block" onClick={onClick}>
            <i className="fa fa-google" />
            &nbsp;
            &nbsp;
            Login with Google
          </button>
          { error ? <div className="mt-1 alert alert-warning">{error}</div> : null }
        </div>
      </div>
    </div>
  );
}

export default Auth;
