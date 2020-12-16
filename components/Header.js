import Link from 'next/link'
export default () => (

	<div>
		<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"> 
			<h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
			<nav class="my-2 my-md-0 mr-md-3">
			</nav>
			<Link href="/"><a className="btn btn-outline-primary"> Home</a></Link>
		</div>
	</div>
)