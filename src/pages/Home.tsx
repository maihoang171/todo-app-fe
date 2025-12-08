import CreateTask from "../containers/create-task"

function Home(){
    return (<>
        <div>
            <div className="h-full">
                <h1 className="text-2xl font-bold text-center">My todo app</h1>
                <CreateTask/>
            </div>
        </div>
    </>)
}
export default Home