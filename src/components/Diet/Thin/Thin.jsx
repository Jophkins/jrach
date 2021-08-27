import styles from './Thin.module.css';

const Thin = (props) => {
	debugger;

	let products = props.products.map(product => {
		let addProduct = () => {
			props.addProduct(product.name, product.calories);
		}
		return <div className={styles.productWrapper}>
			<div>{product.name}</div>
			<div>
				<button onClick={addProduct}>ADD</button>
			</div>
		</div>
	})

	let lunch = props.lunch.map(item => <div>Продукт: {item.name} {item.calories}ккал</div>)

	return(
		<section className={styles.mainWrapper}>
			<div className={styles.productsBlock}>
				{products}
			</div>
			<div className={styles.content}>
				{lunch}
			</div>
		</section>
	)
}

export default Thin;