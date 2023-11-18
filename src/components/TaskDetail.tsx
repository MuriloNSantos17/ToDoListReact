import { ChangeEvent, useState } from "react";
import { Trash, Check } from "phosphor-react";
import styles from './TaksDetail.module.css';

interface TaskDetailProps {
    id: number;
    task: string;
    endTask: () => void;
    restartTask: () => void;
    deleteTask: (id: number) => void;
}

const TaskDetail = ({ id, task, endTask, restartTask, deleteTask }: TaskDetailProps) => {
    const [finish, setFinish] = useState(false);

    const handleCheckTask = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            endTask();
            setFinish(true);
        } else {
            restartTask();
            setFinish(false);
        }
    }

    const handleDelete = () => {
        if (finish) {
            restartTask();
            setFinish(false);
        }

        deleteTask(id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.divForm}>
                <label className={styles.label}>
                    <div className={finish ? styles.checkBoxSelected : styles.checkBox}>
                        {
                            finish && <Check />
                        }
                    </div>
                    <input type="checkbox" onChange={handleCheckTask} />
                    <span className={finish ? styles.paragraphFinished : ''}>{task}</span>
                </label>
            </div>
            <button title="Deletar">
                <Trash size={15} className={styles.buttonDelete} onClick={handleDelete} />
            </button>
        </div>
    )
}

export default TaskDetail;