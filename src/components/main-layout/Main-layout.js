import './main-layout.scss';
import { TodoItemsList } from "./components/todo-items-list";
import { AddTodo } from "./components/add-todo";
import { MainContextComponent } from "../../context/main-context";
import { TodoContextProvider } from "../../context/todo-context";

export function MainLayout() {
    return (
        <MainContextComponent>
            <TodoContextProvider>
                <div className="main-layout">
                    <AddTodo/>
                    <TodoItemsList/>
                </div>
            </TodoContextProvider>
        </MainContextComponent>
    );
}
