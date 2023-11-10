import { useState } from 'react';

export const TaskCreator = ({ createNewTask }) => {
	const [newTaskName, setNewTaskName] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		createNewTask(newTaskName);
		setNewTaskName('');
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col flex-wrap justify-center'>
			<input
				type='text'
				name='newTaskName'
				value={newTaskName}
				onChange={e => setNewTaskName(e.target.value)}
				placeholder='Ingrese una nueva tarea'
			/>
			<button>Crear</button>
		</form>
	);
};
