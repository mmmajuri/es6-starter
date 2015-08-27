import React from 'react';
import Router from 'react-router';

import App from 'components/App';
import FirstPage from 'components/pages/FirstPage';
import SecondPage from 'components/pages/SecondPage';
import NotFoundPage from 'components/pages/NotFoundPage';

import 'styles/main.styl';


const { Route, NotFoundRoute, DefaultRoute } = Router;

const routes = (
  <Route handler={App} name='Frontpage' path='/'>
    <DefaultRoute handler={FirstPage} name='first'/>
    <Route handler={SecondPage} name='second' path='/second' />
    <NotFoundRoute handler={NotFoundPage}/>
  </Route>
);

Router.run(routes, Handler => React.render(<Handler />, document.body));
