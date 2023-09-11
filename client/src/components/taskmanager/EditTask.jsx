import '../registration/registration.scss';
import '../../styles/components/_button.scss';
import React, { useEffect, useState } from "react"
import {  useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editTask } from '../../redux/taskSlice';
import axios from 'axios';
import mongoose, { mongo } from 'mongoose';

function EditTask (){
	const [state, setState] = useState({
		task: '',
	});
	const dispatch = useDispatch();	
	const params = useParams();
	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const handleFormSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submission
		dispatch(editTask(params.id,state.task)); // Call editTask with the current input value
	};
	return(
		<div className='signup-form'>
			<div className='signup-form__wrapper'>
				<form className='form' action='' onSubmit={handleFormSubmit}>
					<h4>Edit</h4>
					<div className='form-group'>
						<input
							type='text'
							name='task'
							value={state.task}
							placeholder='Enter Text'
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<button className='button'>Update</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditTask
