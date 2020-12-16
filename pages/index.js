import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

//import products from '../products.json'
import { fromImageToUrl, API_URL } from "../utils/urls"
import { twoDecimals } from "../utils/format"



export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map(product => (
        
        <div key={product.id}> 

          <Link href={`/products/${product.slug}`}>
            <a>
              <img src={fromImageToUrl(product.image)} alt={product.name} /> 
              <h1>{product.name}</h1>
              <h3>${twoDecimals(product.price)}</h3>
            </a>
          </Link>
        
        </div>
         
      ))}

       
    </div>
  )
}


export async function getStaticProps() {
  //Fetch the products
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

  //Return the product as props 
  return {
    props: {
      products
    }
  }
}
