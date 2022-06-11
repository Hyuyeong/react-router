//import {useState} from 'react'
import { Fragment } from 'react';
import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = props => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={styles.main}>{props.children}</div>
    </Fragment>
  );
};
export default Layout;
