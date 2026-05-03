import { useMemo } from 'react';
import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';
export const JiraPage = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const openTasks = useMemo(
    () => Object.values(tasks).filter((t) => t.status === 'open'),
    [tasks]
  );
  const inProgressTasks = useMemo(
    () => Object.values(tasks).filter((t) => t.status === 'in progress'),
    [tasks]
  );
  const doneTasks = useMemo(
    () => Object.values(tasks).filter((t) => t.status === 'done'),
    [tasks]
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <JiraTasks title="Pendientes" tasks={openTasks} value="open" />
      <JiraTasks title="Avanzando" tasks={inProgressTasks} value="in progress" />
      <JiraTasks title="Terminadas" tasks={doneTasks} value="done" />
    </div>
  );
};