import { useEffect, useState } from 'react';
import { TaskCreator } from '../components/TaskCreator/TaskCreator';
import { TaskList } from '../components/TaskList/TaskList';
import { VisibilityControl } from '../components/VisibilityControl/VisibilityControl';
import './App.css';

function App() {
	const [tasksItems, setTasksItems] = useState([]);
	const [showCompleted, setShowCompleted] = useState(false);

	useEffect(() => {
		let tasks = localStorage.getItem('Tasks');
		if (tasks) {
			setTasksItems(JSON.parse(tasks));
		}
		let visibility = localStorage.getItem('Visibility');
		if (visibility !== null) {
			setShowCompleted(visibility === 'true');
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('Tasks', JSON.stringify(tasksItems));
	}, [tasksItems]);

	useEffect(() => {
		localStorage.setItem('Visibility', showCompleted);
	}, [showCompleted]);

	function createNewTask(newTask) {
		if (!tasksItems.find(task => task.name === newTask) && newTask !== '') {
			setTasksItems([...tasksItems, { name: newTask, done: false }]);
		} else if (newTask === '') {
			alert(`No ha ingresado el nombre de la tarea!`);
		} else {
			alert(`La tarea ${newTask} ya existe!`);
		}
	}

	const cleanDoneTasks = () => {
		if (window.confirm('Are you sure you want to delete tasks?')) {
			setTasksItems(tasksItems.filter(task => !task.done));
		}
	};

	const toggleTask = taskToToggle => {
		let newTasksItems = tasksItems.map(task =>
			task.name === taskToToggle.name ? { ...task, done: !task.done } : task,
		);
		setTasksItems(newTasksItems);
	};

	return (
		<section className='flex flex-col flex-wrap justify-center'>
			<TaskCreator createNewTask={createNewTask} />
			<VisibilityControl
				showCompleted={showCompleted}
				setShowCompleted={checked => setShowCompleted(checked)}
				cleanDoneTasks={cleanDoneTasks}
			/>
			<TaskList
				tasksItems={tasksItems}
				toggleTask={toggleTask}
				doneTasks={false}
			/>
			{showCompleted && (
				<TaskList
					tasksItems={tasksItems}
					toggleTask={toggleTask}
					doneTasks={true}
				/>
			)}
		</section>
	);
}

export default App;
