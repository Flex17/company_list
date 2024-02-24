import css from "./app.module.scss";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchCompanies } from "./store/reducers/ActionCreators";
import EmployeeTable from "./components/Employees/EmployeeTable/EmployeeTable";
import useDynamicPagination from "./hooks/useDynamicPagination";
import Companies from "./components/Companies/Companies";
import Warning from "./components/Warning/Warning";

const App = () => {
	const {
		currentCompany,
		page,
		isLoading,
	} = useAppSelector(state => state.companyReducer);
	const dispatch = useAppDispatch();

	useDynamicPagination();

	useEffect(() => {
		if (isLoading) {
			dispatch(fetchCompanies(page));
		}
	}, [isLoading]);

	return (
		<div className={css.app}>
			<div className={css.wrapper}>
				<Companies/>
				{
					currentCompany && <EmployeeTable/>
				}
			</div>
			<Warning/>
		</div>
	);
};

export default App;
