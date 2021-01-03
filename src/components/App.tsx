import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { getHideDone, getTextFilter } from '../store/filter/filterSelectors';
import { getTodos } from '../store/todos/todoSelectors';
import { Box } from './Box';
import { NewTodoInput } from './NewTodoInput';
import { TodoItem } from './TodoItem';

const StyledTodoList = styled.div((props) => ({
  '& div': {
    borderBottom: '1px gray solid',
    '&:hover': {
      borderBottom: '1px black solid',
    },
  },
  '& button:hover': {
    fontWeight: 800,
  },
}));

export const App: React.FC = () => {
  const todos = useSelector(getTodos);
  const textFilter = useSelector(getTextFilter);
  const hideDone = useSelector(getHideDone);

  return (
    <DefaultLayout>
      <Box flexDirection="column">
        <NewTodoInput />
        <StyledTodoList>
          {todos
            .filter(
              (x) =>
                (!hideDone || !x.done) &&
                x.text.toLocaleLowerCase().includes(textFilter.toLowerCase())
            )
            .map((x) => (
              <TodoItem key={x.id} todo={x} />
            ))}
        </StyledTodoList>
      </Box>
    </DefaultLayout>
  );
};
