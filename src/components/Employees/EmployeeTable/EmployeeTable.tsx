import TableNav from "../../TableNav/TableNav";
import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import Employee from "../Employee/Employee";

const EmployeeTable = () => {
	const {
		currentCompany,
	} = useAppSelector(state => state.companyReducer);

	return (
		<table>
			<caption>Сотрудники компании: {currentCompany?.company.name}</caption>
			<tbody>
			<TableNav>
				<td>Фамилия</td>
				<td>Имя</td>
				<td>Должность</td>
			</TableNav>
			{
				currentCompany?.company.employees?.map(employee => (
					<Employee
						key={employee.id}
						employeeData={employee}
					/>
				))
			}
			</tbody>
		</table>
	);
};

export default EmployeeTable;
