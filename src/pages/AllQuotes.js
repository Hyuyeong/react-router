import { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';
//import styles from './AllQuotes.module.css'

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

const AllQuotes = props => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_DATA}></QuoteList>
    </Fragment>
  );
};
export default AllQuotes;
