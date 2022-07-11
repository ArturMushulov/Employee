import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Artur", surname: "Mushulov", salary: 6800, increase: true, addStars: true, id:1},
                {name: "Igor", surname: "Alekseenko", salary:1700, increase: false, addStars: false, id:2},
                {name: "Nikita", surname: "Wket", salary: 2300, increase: false, addStars: false, id:3}
            ], 
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmploy = (name, surname, salary) => {
        const newEmploy = {
            name,
            surname,
            salary,
            increase: false,
            addStars: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newEmploy];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => { //term это строчка поиска, items это массив
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.addStars);
            case 'salary':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onChangeSalary = (id, salary) => {
        this.setState(({ data }) => ({
          data: data.map((item) => {
            if (item.id === id) {
              return { ...item, salary: parseInt(salary) };
            }
            return item;
          }),
        }));
      };

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                employees={employees}
                increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                onChangeSalary={this.onChangeSalary}
                />
                <EmployeesAddForm 
                onAdd={this.addEmploy}/>
            </div>
        );
    }
}

export default App;