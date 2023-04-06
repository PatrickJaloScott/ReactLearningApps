//import logo from './logo.svg';
import './App.css';

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  todolist: ['Improve the videophone',
            'Prepare aeronautics lectures',
            'Work on the alcohol-fuelled engine']
};

export default function TodoList() {
  return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
            className="avatar"
            src={baseUrl+person.imageId+person.imageSize+".jpg"}
            alt={person.name}
        />
        <ul>
          <li>{person.todolist[0]}</li>
          <li>{person.todolist[1]}</li>
          <li>{person.todolist[2]}</li>
        </ul>
      </div>
  );
}
