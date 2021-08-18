import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
	return(
	<nav className={styles.nav}>
	  <ul className={styles.navItems}>
		<li><Link to='/' activeClassName={styles.active}><img src="https://image.flaticon.com/icons/png/512/590/590764.png" alt="logo" width="25px" height="25px" /> JRACH</Link></li>
		<li><Link to='/diet' activeClassName={styles.active}>Диеты</Link></li>
		<li><Link to='/' activeClassName={styles.active}>...</Link></li>
		<li><Link to='/' activeClassName={styles.active}>...</Link></li>
		<li className={styles.floatRight} ><Link to='/auth' activeClassName={styles.active}>Авторизация</Link></li>
	  </ul>
	</nav>
	);
  }

export default Navbar;