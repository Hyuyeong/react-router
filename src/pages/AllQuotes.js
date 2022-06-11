import { Fragment, useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
//import styles from './AllQuotes.module.css'

import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const DUMMY_DATA = [
//   {
//     id: 'p1',
//     author: 'Max',
//     text: 'Learning React is fun !',
//   },
//   {
//     id: 'p2',
//     author: 'Maxi',
//     text: 'Learning React is great !',
//   },
// ];

const AllQuotes = props => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return (
    <Fragment>
      <QuoteList quotes={loadedQuotes}></QuoteList>
    </Fragment>
  );
};
export default AllQuotes;
