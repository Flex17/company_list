import TableNav from "../../TableNav/TableNav";
import Company from "../Company/Company";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
	addAllChoicedCompany,
	addChoicedCompany,
	removeAllChoicedCompany,
	removeChoicedCompany
} from "../../../store/reducers/ActionCreators";
import { CompanyDataI } from "../../../models/Company";

const CompanyTable = () => {
	const {
		companies,
		choicedCompanies
	} = useAppSelector(state => state.companyReducer);
	const dispatch = useAppDispatch();

	const isChecked = (company: CompanyDataI): boolean => choicedCompanies.includes(company);
	const isAllCompaniesChoiced = companies?.length === choicedCompanies?.length && companies?.length !== 0;

	const handleCompany = (company: CompanyDataI) => {
		if (isChecked(company)) {
			dispatch(removeChoicedCompany(company.id));
		} else {
			dispatch(addChoicedCompany(company));
		}
	};

	const onAddAllCompanies = () => dispatch(addAllChoicedCompany());
	const onRemoveAllCompanies = () => dispatch(removeAllChoicedCompany());

	const handleAllCompanies = () => {
		if (isAllCompaniesChoiced) {
			onRemoveAllCompanies();
		} else {
			onAddAllCompanies();
		}
	};

	return (
		<table>
			<caption>Компании</caption>
			<thead>
			<tr>
				<td>
					<div>
						<span>Выделить все</span>
						<input
							type="checkbox"
							checked={isAllCompaniesChoiced}
							onChange={handleAllCompanies}
						/>
					</div>
				</td>
			</tr>
			</thead>
			<tbody>
			<TableNav>
				<td>Чекбокс</td>
				<td>Название компании</td>
				<td>Кол-во сотрудников</td>
				<td>Адрес</td>
			</TableNav>
			{
				companies?.map(company => (
					<Company
						key={company.id}
						companyData={company}
						isChecked={isChecked(company)}
						handleCompany={() => handleCompany(company)}
					/>
				))
			}
			</tbody>
		</table>
	);
};

export default CompanyTable;
