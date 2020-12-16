//import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useMemo } from 'react'
import { TinaProvider, TinaCMS } from 'tinacms'

function MyApp({ Component, pageProps }) {
  return <div className="container">
	  		<div className="row d-flex align-items-center">
		  		<div className="col-md-6 mx-auto">
  					<Component {...pageProps} />
  				</div>
  			</div>
  		</div>
}

export default MyApp
