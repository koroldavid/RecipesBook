import React                               from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import history                             from './history';
import MainLayout                          from './layout/MainLayout';
import Recipes                            from './pages/Recipes';
import RecipeDetail                        from './pages/RecipeDetail';

function dummyLayout(props) {
  return props.children;
}

function AppRoute({ component: Page, layout, ...rest }) {
  return (
      <Route
          {...rest}
          render={props => {
              const Layout = layout ? layout : dummyLayout;

              return (
                  <MainLayout {...props}>
                      <Layout {...props}>
                          <Page {...props} />
                      </Layout>
                  </MainLayout>
              );
          }}
      />
  );
}

export default class App extends React.Component {
  render() {
      return (
          <Router history={history}>
              <Switch>
                    <AppRoute  component={Recipes} path='/recipes'  />
                    <AppRoute  component={RecipeDetail} path='/recipe/:id'  />

                    <Redirect from='*' to='/recipes' />
              </Switch>
          </Router>
      );
  }
}
