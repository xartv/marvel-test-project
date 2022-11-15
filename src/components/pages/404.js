import ErrorMessage from "../errorMessage/ErrorMessage";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const NoMatch = () => {
	
	return (
		<div>
			<Helmet>
				<meta
					name="description"
					content='Error page'
					/>
				<title>Ooops...look at this error!</title>
			</Helmet>
			<ErrorMessage/>
			<p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}></p>
			<Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'textDecoration': 'underline'}} to='/'>Click here to back to main page</Link>
		</div>
	)
}

export default NoMatch;	