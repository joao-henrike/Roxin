import React from 'react';
import styled from 'styled-components';
import { FiEdit, FiX } from 'react-icons/fi';
import { Container, IconContainer} from ''

class TaskManager extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = [
      { id: 1, name: 'Começar a execução do projeto', completed: false },
    ];
    this.state = {
      isModalOpen: false,
      newTaskDescription: '',
    };
  }

  toggleTaskCompletion = (id) => {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.forceUpdate();
  };
  
  removeTask = (id) => {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.forceUpdate();
  };

  addTask = () => {
    const newTask = {
      id: this.tasks.length + 1,
      name: this.state.newTaskDescription || 'Nova Tarefa',
      completed: false,
    };
    this.tasks.push(newTask);
    this.setState({ newTaskDescription: '', isModalOpen: false });
  };

  render() {
    return (
      <Container>
        <TaskBox>
          <Header>Terça-Feira, 24 de Julho</Header>
          <SearchBar placeholder="Procurar tarefa" />
          <TaskList>
            {this.tasks.map(task => (
              <TaskItem
                key={task.id}
                completed={task.completed}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => this.toggleTaskCompletion(task.id)}
                />
                <TaskName>{task.name}</TaskName>
                <IconContainer>
                  <FiEdit size={20} color={task.completed ? 'white' : 'black'} />
                  <FiX size={20} color={task.completed ? 'white' : 'black'} onClick={() => this.removeTask(task.id)} />
                </IconContainer>
              </TaskItem>
            ))}
          </TaskList>
          <NewTaskButton onClick={() => this.setState({ isModalOpen: true })}>
            Nova tarefa
          </NewTaskButton>
        </TaskBox>

        {this.state.isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Descreva sua tarefa</ModalHeader>
              <ModalTextarea
                value={this.state.newTaskDescription}
                onChange={(e) => this.setState({ newTaskDescription: e.target.value })}
                placeholder="Exemplo de descrição"
              />
              <ConfirmButton onClick={this.addTask}>Confirmar tarefa</ConfirmButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    );
  }
}

export default TaskManager;
