import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.scss';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onChangeSalary={(e) => onChangeSalary(id, e.target.value)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
          
            // <EmployeesListItem name={item.name} surname={item.surname} salary={item.salary}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;