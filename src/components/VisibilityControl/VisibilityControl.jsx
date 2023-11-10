export const VisibilityControl = ({
	showCompleted,
	setShowCompleted,
	cleanDoneTasks,
}) => {
	return (
		<div>
			<input
				type='checkbox'
				checked={showCompleted}
				onChange={e => setShowCompleted(e.target.checked)}
			/>
			<label> Show Tasks Done</label>
			<button type='button' onClick={cleanDoneTasks}>
				Limpiar
			</button>
		</div>
	);
};
