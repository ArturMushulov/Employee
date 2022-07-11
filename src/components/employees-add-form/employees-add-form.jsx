import './employees-add-form.scss';
import { Component } from 'react';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })     
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || this.state.surname.length < 3 ||!this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.surname, this.state.salary);
        this.setState({
            name: '',
            surname: '',
            salary: ''
        })
    }

    render() {
        const {name, salary, surname} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Ваша фамилия?"
                        name="surname"
                        value={surname}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit "
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
    }
    

export default EmployeesAddForm;