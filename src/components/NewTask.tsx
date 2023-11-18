import { PlusCircle, ClipboardText } from 'phosphor-react';
import { FormEvent, Fragment, useState } from 'react';
import styles from './NewTask.module.css';
import ListTaks from './ListTask';

const NewTask = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        task: "Aprender mais react com T.S"
    }]);

    const [data, setData] = useState('');

    const handleAddTask = (e: FormEvent) => {
        e.preventDefault();

        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                task: data
            }
        ]);

        setData('');
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((obj) => obj.id != id));
    }

    return (
        <Fragment>
            <form className={styles.form}>
                <input
                    value={data}
                    onChange={(e) => { setData(e.target.value) }}
                    className={styles.inputNewTask}
                    placeholder='Adicione uma nova tarefa'
                />
                <button
                    className={styles.buttonAdd}
                    onClick={handleAddTask}
                    disabled={data.length == 0 ? true : false}
                >
                    <PlusCircle size={20} />
                    Criar
                </button>
            </form>
            <ListTaks tasks={tasks} deleteTask={deleteTask} />
            {
                tasks.length == 0 && (
                    <Fragment>
                        <hr className={styles.hr}/>
                        <div className={styles.taskEmpty}>
                            <ClipboardText size={80} />
                            <p className={styles.prgDestaque}>Você ainda não tem tarefas cadastradas</p>
                            <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    )
}

export default NewTask;