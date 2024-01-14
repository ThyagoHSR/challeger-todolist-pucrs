/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import {
  BoxHour,
  BoxTasks,
  Button,
  Container,
  Divisor,
  InfoTask,
  Input,
  Task,
  Title,
  TaskTitle,
} from './styles';

import imageDay from '../../assets/image.png';
import imageNight from '../../assets/imageNoite.png';
import imageRemove from '../../assets/removed.png';
import imageCompleted from '../../assets/completed.png';

export default function Tasks() {
  const [dayTasks, setDayTasks] = useState<string[]>([]);
  const [nightTasks, setNightTasks] = useState<string[]>([]);
  const [dayInput, setDayInput] = useState<string>('');
  const [nightInput, setNightInput] = useState<string>('');
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const addTask = (time: 'day' | 'night') => {
    const input = time === 'day' ? dayInput.trim() : nightInput.trim();
    if (input) {
      time === 'day'
        ? setDayTasks([...dayTasks, input])
        : setNightTasks([...nightTasks, input]);
      time === 'day' ? setDayInput('') : setNightInput('');
    }
  };

  const removeTask = (time: 'day' | 'night', index: number) => {
    time === 'day'
      ? setDayTasks(dayTasks.filter((_, i) => i !== index))
      : setNightTasks(nightTasks.filter((_, i) => i !== index));
  };

  const markTaskCompleted = (time: 'day' | 'night', index: number) => {
    const key = time === 'day' ? `day-${index}` : `night-${index}`;
    setCompletedTasks(prevCompletedTasks => {
      const newCompletedTasks = new Set(prevCompletedTasks);
      if (newCompletedTasks.has(key)) {
        newCompletedTasks.delete(key);
      } else {
        newCompletedTasks.add(key);
      }
      return newCompletedTasks;
    });
  };

  const isTaskCompleted = (time: 'day' | 'night', index: number): boolean => {
    const key = time === 'day' ? `day-${index}` : `night-${index}`;
    return completedTasks.has(key);
  };

  return (
    <Container>
      <Title>Lista de Tarefas</Title>
      <BoxTasks>
        <Task>
          <BoxHour>
            <InfoTask>Dia</InfoTask>
            <img src={imageDay} alt="" />
          </BoxHour>
          <div>
            <Input
              placeholder="Digite uma tarefa"
              value={dayInput}
              onChange={(e) => setDayInput(e.target.value)}
            />
            <Button onClick={() => addTask('day')}>Adicionar Tarefa</Button>
            <ul>
              {dayTasks.map((task, index) => (
                <TaskTitle
                  key={index}
                  completed={isTaskCompleted('day', index)}
                >
                  {task}
                  <span onClick={() => markTaskCompleted('day', index)}> 
                  <img src={imageCompleted} alt="Completed Icon" />
                  </span>
                  <span onClick={() => removeTask('day', index)}>
                    <img src={imageRemove} alt="Remove Icon" />
                  </span>
                </TaskTitle>
              ))}
            </ul>
          </div>
        </Task>
        <Divisor />
        <Task>
          <BoxHour>
            <InfoTask>Noite</InfoTask>
            <img src={imageNight} alt="" />
          </BoxHour>
          <div>
            <Input
              placeholder="Digite uma tarefa"
              value={nightInput}
              onChange={(e) => setNightInput(e.target.value)}
            />
            <Button onClick={() => addTask('night')}>Adicionar Tarefa</Button>
            <ul>
              {nightTasks.map((task, index) => (
                <TaskTitle
                  key={index}
                  completed={isTaskCompleted('night', index)}
                  
                >
                  {task}
                  <span onClick={() => markTaskCompleted('night', index)}> 
                  <img src={imageCompleted} alt="Completed Icon" />
                  </span>
                  <span onClick={() => removeTask('night', index)}>
                    <img src={imageRemove} alt="Remove Icon" />
                  </span>
                </TaskTitle>
              ))}
            </ul>
          </div>
        </Task>
      </BoxTasks>
    </Container>
  );
}