import {useState, useReducer} from 'react';
import { Link } from 'react-router-dom';

import {useFormik} from 'formik';
import * as Yup from 'yup';

import useMarvelService from '../../services/MarvelService';

import './findChar.scss'

const FindChar = () => {
	const {findCharacter} = useMarvelService();
	const [char, setChar] = useState(null);
	const [status, dispatch] = useReducer(reducer, 'empty') 
	
	function reducer(state, action) {
		switch (action.type) {
			case 'finded': return {status: 'finded'};
			case 'notFinded': return {status: 'notFinded'};
			default: return state;
		}
	}

	const onCharFinded = (char) => {
		setChar(char);
		dispatch({type: 'finded'});
	}

	const onCharNotFinded = () => {
		setChar(null);
		dispatch({type: 'notFinded'});
	}

	const onSubmitForm = async(name) => {
		const findedChar = await findCharacter(name);
		
		if (findedChar) {
			onCharFinded(findedChar);
		} else {
			onCharNotFinded();
		}
	}

	const formik = useFormik({
		initialValues: {
			name: '',
		},
		onSubmit: (values) => onSubmitForm(values.name),
		validationSchema: Yup.object({
			name: Yup.string()
								.required('Name is required')
		})
	})

	return (
		<div className="findChar" onSubmit={formik.handleSubmit}>
			<div className="findChar__header">
				Or find a character by name:
			</div>
			<form className="findChar__form">
				<input 
					name="name" 
					type="text"
					placeholder='Enter name'
					{...formik.getFieldProps('name')}/>
				<button className="button button__main" type='submit'>
					<div className="inner">Find</div>
				</button>
				{formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
			</form>
			<Content char={char} status={status}/>
		</div>
	)
}

const Content = ({char, status}) => {
	switch (status.status) {
		case 'finded': 
			return (
				<>
					<div className='findChar_finded'>{`There is! Visit ${char.name} page?`}</div>
					<Link to={`/marvel-test-project/characters/${char.id}`} className="button button__secondary" type='submit'>
						<div className="inner">To page</div>
					</Link>
				</>
			);
		case 'notFinded': 
				return (
					<div className='findChar_notFinded'>{`Oh, sorry, there is no matches with this name in database`}</div>
				)
		default: 
				return null;
	}
}

export default FindChar;