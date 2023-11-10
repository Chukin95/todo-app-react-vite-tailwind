export const TaskRow = ({ task, toggleTask }) => {
	return (
		<tr key={task.name}>
			<td>{task.name}</td>
			<input
				name='checkbox'
				type='checkbox'
				checked={task.done}
				onChange={() => toggleTask(task)}
			/>
		</tr>
	);
};
