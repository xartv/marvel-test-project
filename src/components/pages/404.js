import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const NoMatch = () => {
	return (
		<div>
			<ErrorMessage/>
			<p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}></p>
			<Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'textDecoration': 'underline'}} to='/'>Click here to back to main page</Link>
		</div>
	)
}

export default NoMatch;	