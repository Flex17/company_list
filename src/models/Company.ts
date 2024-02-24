import { EmployeeDataI } from "./Employee";

export interface CompanyI {
	name: string,
	address: string,
	employees: EmployeeDataI[]
}

export interface CompanyDataI {
	company: CompanyI,
	id: string,
}
