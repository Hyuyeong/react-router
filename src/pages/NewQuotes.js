//import {useState} from 'react'
//import styles from './NewQuotes.module.css'

import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = props => {
  const history = useHistory();
  const addQuoteHandler = () => {
    history.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuotes;
