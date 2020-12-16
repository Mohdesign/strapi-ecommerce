//import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useMemo } from 'react'


import Header from '../components/Header'
import Footer from '../components/Footer'
 
function MyApp({ Component, pageProps }) {
  return (
  		<>
	  		<Header />
			  <div className="container">
					<div className="row d-flex align-items-center">
						<div className="col-md-6 mx-auto">
							<Component {...pageProps} />
						</div>
					</div>
				</div>
			<Footer />
		</>
	)
}

export default MyApp
