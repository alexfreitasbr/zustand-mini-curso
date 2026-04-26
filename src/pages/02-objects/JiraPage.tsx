import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';

export const JiraPage = () => {
  const openTasks = useTaskStore((state) => state.getTaskStatus);
  console.log(openTasks('open'));
   console.log(openTasks('done'));
    console.log(openTasks('in progress'));



  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <JiraTasks title='Pendientes' tasks={openTasks('open')} value='open' />
          
          <JiraTasks title='Avanzando' tasks={openTasks('in progress')} value='in progress' />
          
          <JiraTasks title='Terminadas' tasks={openTasks('done')} value='done' />
      </div>

      



    </>
  );
};