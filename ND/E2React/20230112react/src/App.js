import './App.css';
import { useId, useState } from 'react';
import { IoCloseCircleSharp, IoBuild, IoCheckmark } from 'react-icons/io5'

const Header = ({ nav }) => {
  const id = useId();

  return (
    <header>
      <h1>UAB "Šaunu"</h1>
      <nav>
        <ul>
          {nav.map((value, index) => <li key={id + index}>{value}</li>)}
        </ul>
      </nav>
    </header>
  );
}

const Container = (propsai) => {
  return <div className="container">{propsai.children}</div>;
}

// const FormEntry = () => {
//   const [reiksme, setReiksme] = useState('Įveskite tekstą į laukelį');

//   const keistiReiksme = (e) => {
//     console.log(e.target.value.length);
//     setReiksme(e.target.value);
//   }

//   return (
//     <>
//       <input type="text" onChange={keistiReiksme} />
//       {/* <input type="text" onChange={(e) => setReiksme(e.target.value)} /> */}
//       <div className="result">{reiksme}</div>
//     </>
//   );
// }

const FormEntry = () => {
  const [tasks, setTasks] = useState([]);
  // const [currentTask, setCurrentTask] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    // setTasks([...tasks, { name: currentTask, done: false }]);
    setTasks([...tasks, { name: document.querySelector('#text').value, done: false }]);
    // setCurrentTask('');
    document.querySelector('#text').value = '';
  }

  const handleDone = (e, index) => {
    tasks[index].done = !tasks[index].done;
    setTasks([...tasks]);
  }

  const handleEdit = (e, index) => {
    // tasks[index].name = setCurrentTask(e.target.value);

    // tasks[index].name = document.querySelector('#text').value;
    document.querySelector('#text').value = tasks[index].name;
    handleDelete(e, index)
    setTasks([...tasks]);
  }

  const handleDelete = (e, index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <>
      <h1>Task Manager</h1>
      <form className="input-group" onSubmit={handleForm}>
        {/* <input id="text" type="text" className="form-control" onChange={(e) => setCurrentTask(e.target.value)} /> */}
        <input id="text" type="text" className="form-control" />

        <button className="btn btn-primary" >Išsaugoti</button>
      </form>
      {tasks.map((value, index) =>
        // <li key={value.name + index} onClick={ (e) => handleDone(e, index) } className={value.done ? 'done' : ''}>{value.name}</li>        
        <div key={value.name + index} className={value.done ? 'done item' : 'item'}>
          {value.name}
          <div>
            <IoCheckmark onClick={(e) => handleDone(e, index)} />
            <IoBuild onClick={(e) => handleEdit(e, index)} />
            <IoCloseCircleSharp onClick={(e) => handleDelete(e, index)} />
          </div>
        </div>

      )}
    </>
  );
}

const App = () => {
  const navigacija = ['Titulinis', 'Apie Mus', 'Kontaktai'];

  return (
    <Container>
      <Header nav={navigacija} />
      <main>
        <FormEntry />
      </main>
    </Container>
  );
}

export default App;
