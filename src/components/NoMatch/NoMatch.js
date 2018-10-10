import React from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';

const NoMatch = (props) => (
  <ContentBlock>
    <div className="container">
      <div className="row general-page-wrapper">
        <div className="col-md-10 offset-md-1 pt-5 pb-4 px-0">
          <p>Error. We can't find the page you're looking for.</p>
        </div>
      </div>
    </div>
  </ContentBlock>
);

export default NoMatch;