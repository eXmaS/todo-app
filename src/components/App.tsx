import { DefaultLayout } from '../layouts/DefaultLayout';
import { Box } from './Box';
import { NewTodoInput } from './NewTodoInput';
import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';
import { getTodos } from '../store/selectors';

export const App: React.FC = () => {
  const todos = useSelector(getTodos);

  console.log(todos);

  return (
    <DefaultLayout>
      <Box flexDirection="column">
        <NewTodoInput />
        {todos.map((x) => {
          return <TodoItem key={x.id} todo={x} />;
        })}
      </Box>
    </DefaultLayout>
  );
};
