import React from "react";
import "./style.scss"
import AdtodoList from "./adtodolist";
import { toast } from 'react-toastify';
class Todolist extends React.Component {
    state = {
        Todolist: [
            { id: "1", name: "learn javascrip" },
            { id: "2", name: "learn html,css" },
            { id: "3", name: "learn React js" },
        ],
        editTodo: {}
    }
    // hàm thêm todo thành công
    newTodolist = (todos) => {
        this.setState({
            Todolist: [...this.state.Todolist, todos]
        })
        toast.success('🦄 Wow so easy!')
    }
    // hàm xóa todo  
    handeldeleted = (todo) => {
        let CurrentTodo = this.state.Todolist
        CurrentTodo = CurrentTodo.filter((item) => item.id !== todo.id)
        this.setState({
            Todolist: CurrentTodo
        })
        toast.success('🦄 deleted so easy!')
    }
    //  hàm edit todo
    handelEdit = (todo) => {
        let {editTodo, Todolist} = this.state
        let isEmtyObject = Object.keys(editTodo).length === 0;
        // save
        // kiểm tra nếu không rỗng và ....
        if (isEmtyObject === false && editTodo.id === todo.id){
                let TodolistCopy = [...Todolist]

               let objectIndex =  TodolistCopy.findIndex((item => item.id === todo.id))
                TodolistCopy[objectIndex].name = editTodo.name

                this.setState({
                    Todolist : TodolistCopy,
                    editTodo :{}
                })
                toast.success('🦄 UPDATE  SUCCESSFUL !')
            return
        }
        this.setState({
            editTodo: todo
        })
    }
    //    hàm này thay đổi giá trị của value khi onchange vào
    handelOnchangeEdit = (event) => {
        let editCopy = { ...this.state.editTodo }
        editCopy.name = event.target.value
        this.setState({
            editTodo: editCopy
        })
    }
    render() {
        let { Todolist, editTodo } = this.state
        // kiểm  tra xem giá trị có là rổng hay không
        let isEmtyObject = Object.keys(editTodo).length === 0;
        console.log(isEmtyObject);
        return (
            <div className="Todo-list-container">
                <AdtodoList
                    newTodolist={this.newTodolist}
                />
                <div className="todo-content">
                    {Todolist && Todolist.length > 0 &&
                        Todolist.map((item, index) => {
                            return (
                                <div className="todo-item" key={item.id}>
                                    {/* kiểm tra khi chưa click vào edit thì thẻ div dữ nguyên còn ngược lại thì thay thẻ mặt định thành input*/}
                                    {isEmtyObject === true ? <div className="text-item">{index + 1}-{item.name}</div>
                                        :
                                        <>
                                            {/* kiểm  tra id của edit todo có bằng id của item mặt định hay khôgn*/}
                                            {editTodo.id === item.id ?
                                                <span >
                                                    {index + 1} -
                                                    <input value={editTodo.name}
                                                        onChange={(event) => this.handelOnchangeEdit(event)}
                                                    />
                                                </span>
                                                :
                                                <div className="text-item">{index + 1}-{item.name}</div>}
                                        </>
                                    }
                                    <div className="button">
                                        <button onClick={() => this.handelEdit(item)}
                                        >
                                            {/* kiểm tra khi click vào edit thì đổi thành save  */}
                                            {isEmtyObject === false && editTodo.id === item.id ? "Save" : "edit"}
                                        </button>
                                        <button onClick={() => this.handeldeleted(item)}>deleted</button>
                                    </div>
                                </div>
                            )
                        })


                    }

                </div>

            </div>
        )
    }
}
export default Todolist