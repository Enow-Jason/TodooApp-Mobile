export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: parseInt(Math.random() * 10000000, 10), // Example for integer ID
                    task: action.task, // Changed from 'text' to 'task'
                    due: action.due,   // Assuming due date is required
                    priority: action.priority || 'normal' // Default priority if not provided
                }
            ];
        case 'MARK_DONE':
            return state.filter((todo) => todo.id !== Number(action.payload));
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== Number(action.id));
        default:
            return state;
    }
};
