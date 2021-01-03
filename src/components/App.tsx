import { DefaultLayout } from '../layouts/DefaultLayout';
import { Box } from './Box';
import { NewTodoInput } from './NewTodoInput';
import { Todo } from './Todo';

export const App: React.FC = () => {
  return (
    <DefaultLayout>
      <Box flexDirection="column">
        <NewTodoInput />
        <Todo />
        <Todo />
        <Todo />
      </Box>
    </DefaultLayout>
  );
};
