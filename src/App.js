import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import './assets/styles/tailwind.css';
import Landing from './components/layout/Landing';

const App = () => {
  return (
    <Fragment> 
      {/* SEO */}
       <Helmet>
          <meta charSet="utf-8" />
          <title>Front End Test Landing</title>
          <meta name="description" content="Web ini dibuat untuk skill test pada Bisnis.com" />
      </Helmet>
        <div className="h-screen max-w-full">
          <Landing/>
        </div>
    </Fragment>
  );
}

export default App;
