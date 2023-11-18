import { Fragment, useState } from "react";
import styles from './ListTaks.module.css';
import TaskDetail from "./TaskDetail";

export interface TasksModel {
    id: number,
    task: string,
}

interface TaskProps {
    tasks: TasksModel[],
    deleteTask: (id: number) => void
}

const ListTaks = ({ tasks, deleteTask }: TaskProps,) => {

    const [finishedTask, setFineshedTask] = useState(0);

    const endTask = () => {
        setFineshedTask(finishedTask + 1);
    }

    const restartTask = () => {
        setFineshedTask(finishedTask - 1);
    }

    return (
        <Fragment>
            <div className={styles.divList}>
                <p className={styles.createdTask}>
                    Tarefas Criadas
                    <span>
                        {tasks.length + ' '}
                    </span>
                </p>
                <p className={styles.finishedTask}>
                    Concluídas
                    <span>
                        {finishedTask} de
                        {' ' + tasks.length}
                    </span>
                </p>



            </div>
            {
                tasks.map((item) => {
                    return (
                        <TaskDetail
                            id={item.id}
                            key={item.id}
                            task={item.task}
                            endTask={endTask}
                            restartTask={restartTask}
                            deleteTask={deleteTask}
                        />
                    )
                })
            }
        </Fragment>

    )
}

export default ListTaks;