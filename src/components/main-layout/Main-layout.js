import './main-layout.scss';
import { TodoItemsList } from "./components/todo-items-list";
import { AddTodo } from "./components/add-todo";
import { MainContextComponent } from "../../context/main-context";
import { TodoContextProvider } from "../../context/todo-context";
import { Filter } from './components/filter';

export function MainLayout() {
    return (
        <MainContextComponent>
            <TodoContextProvider>
                <div className="main-layout">
                    <AddTodo/>
                    <Filter/>
                    <TodoItemsList/>
                </div>
            </TodoContextProvider>
        </MainContextComponent>
    );
}
