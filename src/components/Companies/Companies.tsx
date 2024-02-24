import CompanyTable from "./CompanyTable/CompanyTable";
import AddCompanyForm from "./AddCompanyForm/AddCompanyForm";
import React from "react";
import { deleteCompanies, removeAllChoicedCompany } from "../../store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const Companies = () => {
	const choicedCompanies = useAppSelector(state => state.companyReducer.choicedCompanies);

	const dispatch = useAppDispatch();

	const onDeleteCompanies = () => {
		dispatch(deleteCompanies(choicedCompanies));
		dispatch(removeAllChoicedCompany());
	};

	return (
		<div>
			<CompanyTable/>
			<AddCompanyForm/>
			<button
				disabled={choicedCompanies.length === 0}
				onClick={onDeleteCompanies}
			>
				Удалить выбранные компании
			</button>
		</div>
	);
};

export default Companies;
