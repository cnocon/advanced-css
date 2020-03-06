import React from 'react';

const Alert = () => {
  return(
    <aside className="example alert-wrapper">
    <div className="alert alert-error">
      <div className="alert-content">
        <h2 className="alert-title">
          It look like there was a problem.
        </h2>
        <div className="alert-body">
          <p>Please make sure to double check that the form below has all the correct information.</p>
        </div>
      </div>
    </div>

    <div className="alert alert-warning">
      <div className="alert-content">
        <h2 className="alert-title">
          We need more information before we begin.
        </h2>
        <div className="alert-body">
          <p>If you don’t submit this information by January 24 2019 there could be penalties and surcharges added.</p>
        </div>
      </div>
    </div>

    <div className="alert alert-success">
      <div className="alert-content">
        <h2 className="alert-title">
          Success!
        </h2>
        <div className="alert-body">
          <p>We’ve sent all your information to the agency and we’ll be in touch soon – there’s no need to worry.</p>
        </div>
      </div>
    </div>
    </aside>
  )}

  export default Alert;
