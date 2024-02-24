export interface EmployeeI {
	firstName: string,
	lastName: string,
	companyId: number,
	position: string,
}

export interface EmployeeDataI {
	id: string,
	employee: EmployeeI,
}
