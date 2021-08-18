import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
	return(
		<div className={styles.landing}>
			<div className={styles.header}>
				<div className={styles.btnsBlock}>
					<div className={styles.authBlock}>
						<Link to='/auth'>Авторизируйтесь для дополнительных опций</Link>
					</div>
					<div className={styles.continueBlock}>
						<Link to='/diet'>Продолжить без авторизации</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing;