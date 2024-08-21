const TaskBox = styled.div`
  background-color: #1C0F2A;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: white;
  width: 400px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;
const TaskList = styled.div`
  margin-top: 20px;
`;

const TaskItem = styled.div`
  background-color: ${props => (props.completed ? '#8C58FF' : 'white')};
  color: ${props => (props.completed ? 'white' : 'black')};
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TaskName = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  text-align: left;
`;

const NewTaskButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #8C58FF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6A44CC;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;
