import { useSelector } from 'react-redux';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { getHideDone, getTextFilter } from '../store/filter/filterSelectors';
import { getTodos } from '../store/todos/todoSelectors';
import { Box } from './Box';
import { NewTodoInput } from './NewTodoInput';
import { TodoItem } from './TodoItem';

export const App: React.FC = () => {
  const todos = useSelector(getTodos);
  const textFilter = useSelector(getTextFilter);
  const hideDone = useSelector(getHideDone);

  return (
    <DefaultLayout>
      <Box flexDirection="column">
        <NewTodoInput />
        {todos
          .filter(
            (x) =>
              (!hideDone || !x.done) &&
              x.text.toLocaleLowerCase().includes(textFilter)
          )
          .map((x) => (
            <TodoItem key={x.id} todo={x} />
          ))}
      </Box>
    </DefaultLayout>
  );
};
