import CreateTask from "../containers/create-task"
import TaskList from "../containers/task-list"

function Home(){
    return (<>
        <div>
            <div className="h-full  min-w-3xl">
                <h1 className="text-2xl font-bold text-center">My todo app</h1>
                <CreateTask/>
                <TaskList/>
            </div>
        </div>
    </>)
}
export default Home