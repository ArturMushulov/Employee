import './employees-list-item.scss';

const EmployeesListItem = (props) =>  {
    
        const {name, surname, salary, onDelete, onToggleProp, increase, addStars, onChangeSalary} = props;


            let className = "list-group-item d-flex justify-content-between";
            if (increase) {
                className += ' increase';
            }
            if (addStars) {
                className += ' like';
            }

        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="addStars">{name} {surname}</span>
                <input type="text" onChange={onChangeSalary} className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" onClick={onToggleProp}
                            data-toggle="increase"
                            className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>
                
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>     
            </li>
        )
    }


export default EmployeesListItem;