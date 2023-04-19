import Sidebar from "./sidebar/Sidebar";
import classes from './App.module.css';
import DemoCourse from "./course/DemoCourse";
import MiniCourse from "./course/MiniCourse";
// import ContextHooks from "./context/ContextHooks";

function App() {

    // const text = <ContextHooks />;
    return (
        <div className={classes.mainBody}>
            <Sidebar />
            <div className={classes.containerBody}>
                {/* <DemoCourse /> */}
                <MiniCourse />
                <MiniCourse />
                <MiniCourse />
                <MiniCourse />
                <MiniCourse />
                <MiniCourse />
                <MiniCourse />
                <MiniCourse />
                <MiniCourse />
            </div>
        </div>
    );
}

export default App;