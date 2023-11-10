import { TaskRow } from '../TaskRow/TaskRow';

export const TaskList = ({ tasksItems, toggleTask, doneTasks }) => {

  const taskTableRows = (doneValue) => {
    return (
      tasksItems
      .filter(task=> task.done === doneValue)
      .map((task, i) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ))
    )
  }

	return (
		<table>
			<thead>
				<tr>
					<th>
            { doneTasks === false ? 'Tareas a completar' : 'Tareas hechas'}
          </th>
				</tr>
			</thead>
			<tbody>
        {
          taskTableRows(doneTasks)
        }
			</tbody>
		</table>
	);
};
