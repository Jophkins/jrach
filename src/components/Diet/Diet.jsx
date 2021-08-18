import { Link } from 'react-router-dom';
import styles from './Diet.module.css';

const Diet = () => {
	return(
		<section className={styles.wrapper}>
			<Link className={`${styles.item} ${styles.thin}`} to="/diet/thin">Худеем</Link>
			<Link className={`${styles.item} ${styles.fat}`} to="/diet/fat">Толстеем</Link>
			<Link className={`${styles.item} ${styles.jock}`} to="/diet/jock">Кокочаемся</Link>
			<Link className={`${styles.item} ${styles.eat}`} to="/diet/eat">Жремс</Link>
		</section>
	)
}

export default Diet;