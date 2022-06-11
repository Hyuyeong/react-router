//import {useState} from 'react'
//import styles from './QuoteDetail.module.css'

import { Link, useRouteMatch } from 'react-router-dom';

import { Fragment, useEffect } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_DATA = [
  {
    id: 'p1',
    author: 'Max',
    text: 'Learning React is fun !',
  },
  {
    id: 'p2',
    author: 'Maxi',
    text: 'Learning React is great !',
  },
];

const QuoteDetail = props => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const params = useParams();

  // const quote = data.find(item => item.id === params.quoteId);

  const routeMatch = useRouteMatch();

  const { quoteId } = params;

  console.log(routeMatch);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
