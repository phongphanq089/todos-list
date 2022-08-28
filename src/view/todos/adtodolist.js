import React from "react";
import { toast } from 'react-toastify';
class AdtodoList extends React.Component {
    state = {
        name: ""
    }
    // khi onchange vào thì name bằng gái trị value mình nhập vao
    handelOnchange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    //   hàm add
    handelAddTodo = () => {
        if (!this.state.name) {
            toast.warn('🦄 pleas come back!')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            name: this.state.name
        }
        this.props.newTodolist(todo)
        this.setState({
            name: ""
        })
    }
    render() {
        let { name } = this.state
        return (
            <>
                <p>
                    APP TODOS-LIST
                </p>
                <div className="input">
                    <input type="text" value={name}
                        onChange={(event) => this.handelOnchange(event)}
                    >
                    </input>
                    <button onClick={() => this.handelAddTodo()}>Add</button>
                </div>
            </>
        )
    }
}
export default AdtodoList;