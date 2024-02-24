import css from "./employee.module.scss";
import { EmployeeDataI } from "../../../models/Employee";

interface EmployeeProps {
	employeeData: EmployeeDataI,
}

const Employee = ({
	employeeData,
}: EmployeeProps) => {
	const {
		employee,
	} = employeeData;

	const {
		firstName,
		lastName,
		position,
	} = employee;

	return (
		<tr className={css.employee}>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{position}</td>
		</tr>
	);
};

export default Employee;
