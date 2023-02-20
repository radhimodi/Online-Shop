import React ,{PureComponent} from 'react';
import {BrowserRouter as Router,Switch, Route  } from 'react-router-dom';
import { indexRoutes } from './containers/routes';
import {map} from 'lodash'
import './App.css';
import NotFound from './containers/NotFoundPage';
import { PrivateRoute } from './containers/authRoute';
import {ToastContainer } from 'react-toastify';

class App extends PureComponent {
  render() {
    const renderPrivateGlobalRoutes = map(indexRoutes, (item, key) => {
      if (item.isGlobal) {
        return <Route exact path={item.path} component={item.component} key={key} />;
      } else if (item.isPublic) {
        const Component = item.component;
        return (
          <Route
            exact
            path={item.path}
            render={props => {
              return <Component handleShowHeader={data => this.setState({ isShowHeader: data })} {...props} />;
            }}
            key={key}
          />
        );
      } else {
        return <PrivateRoute exact path={item.path} component={item.component} key={key} />;
      }
    });
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Router>
        <Switch>
          {renderPrivateGlobalRoutes}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
