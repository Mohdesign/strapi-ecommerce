import Head from'next/head'

import { fromImageToUrl, API_URL } from "../../utils/urls"
import { twoDecimals } from "../../utils/format"


const Product = ({ product }) => {
	return (

		<div className="container">
		
			<Head>
				{product.meta_title && 
					<title>{product.meta_title}</title>
				}

				{product.meta_description &&
					<meta name="description" content={product.meta_description} />
				}
			</Head>

			<img src={fromImageToUrl(product.image)} />
			<h2>${twoDecimals(product.price)}</h2>
			<h3>{product.name}</h3>
			<p>{product.content}</p>
		</div>
	)
}

export async function getStaticProps({ params: { slug } }) {
	const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
	const found = await product_res.json()

	return {
		props: {
			product: found[0] //Because the API respons for filter is an array
		}
	}
}

export async function getStaticPaths() {
	//Retrieve all the possible paths
	const product_res = await fetch(`${API_URL}/products/`)
	const products = await product_res.json()

	//Return the to NextJS context
	return {
		paths: products.map(product =>({
			params: { slug: String(product.slug) }
		})),
		fallback: false //Tells to nextjs to show a 404 if param not match
	}
}

export default Product