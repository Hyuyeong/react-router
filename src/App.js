import { Route, Redirect, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>

          <Route path="/new-quote">
            <NewQuotes />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
