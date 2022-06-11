//import {useState} from 'react'
//import styles from './QuoteDetail.module.css'

import { Link, useRouteMatch } from 'react-router-dom';

import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

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
  const params = useParams();

  const quote = DUMMY_DATA.find(item => item.id === params.quoteId);

  const routeMatch = useRouteMatch();

  console.log(routeMatch);

  if (!quote) return;

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

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
