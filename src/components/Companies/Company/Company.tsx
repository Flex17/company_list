import React, { useState } from "react";
import css from "./company.module.scss";
import cx from "classnames";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeCompany, setCurrentCompany } from "../../../store/reducers/ActionCreators";
import { CompanyDataI, CompanyI } from "../../../models/Company";

interface CompanyProps {
	companyData: CompanyDataI,
	isChecked: boolean,
	handleCompany: () => void,
}

const Company = ({
	companyData,
	isChecked,
	handleCompany,
}: CompanyProps) => {
	const {
		company,
		id,
	} = companyData;

	const {
		name,
		address,
		employees
	} = company;

	const dispatch = useAppDispatch();
	const currentCompany = useAppSelector(state => state.companyReducer.currentCompany);

	const [companyName, setCompanyName] = useState(name);
	const [companyAddress, setCompanyAddress] = useState(address);

	const isCurrent = currentCompany?.id === id;

	const onCompanyClick = () => {
		if (isCurrent) {
			dispatch(setCurrentCompany(undefined));
		} else {
			dispatch(setCurrentCompany(companyData));
		}
	};

	const onChangeCompany = () => {
		if (name !== companyName || address !== companyAddress) {
			const changedCompany: CompanyI = {
				...company,
				name: companyName,
				address: companyAddress,
			};

			dispatch(changeCompany(id, changedCompany));
		}
	};

	return (
		<tr
			className={cx(css.company, `${isCurrent ? css.active : ""}`)}
			onClick={onCompanyClick}
		>
			<td>
				<input
					checked={isChecked}
					type={"checkbox"}
					onChange={handleCompany}
					onClick={e => e.stopPropagation()}
				/>
			</td>
			<td>
				<input
					onBlur={onChangeCompany}
					className={css.input}
					value={companyName}
					onChange={e => setCompanyName(e.target.value)}
				/>
			</td>
			<td>{employees ? employees.length : 0}</td>
			<td>
				<input
					onBlur={onChangeCompany}
					className={css.input}
					value={companyAddress}
					onChange={e => setCompanyAddress(e.target.value)}
				/>
			</td>
		</tr>
	);
};

export default Company;
