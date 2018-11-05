import React, { Component } from 'react';
import './Input.css';


class Input extends Component {

    state = {
        newPostTitle: '',
        newPostText: ''
    }

    titleHandleChange = (event) => {
        this.setState({
            newPostTitle: event.target.value
        })
    }

    textHandleChange = (event) => {
        this.setState({
            newPostText: event.target.value
        })
    }

    handlePostAdd = () => {
        if(!this.state.newPostText || !this.state.newPostTitle){
            alert('Заповніть поля!')
            
            return;
        }
        const newPost = {
            id: Date.now(),
            title: this.state.newPostTitle,
            text: this.state.newPostText
        };

        this.props.onPostAdd(newPost);
        this.resetState()
    }

    resetState = () => {
        this.setState({newPostText: '', newPostTitle: ''})
    }

    render() {
        return (
            <div className="Input">
                <input onChange={this.titleHandleChange} value={this.state.newPostTitle} placeholder="Заголовок"></input>
                <textarea onChange={this.textHandleChange} value={this.state.newPostText} placeholder="Напишите ваш пост.."></textarea>
                <button onClick={this.handlePostAdd} className="Input_btn">Опубликовать</button>
            </div>
        )
    }
}


export default Input;