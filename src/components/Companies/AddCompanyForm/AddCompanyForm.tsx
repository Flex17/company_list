import { useAppDispatch } from "../../../hooks/redux";
import React, { useState } from "react";
import css from "./addCompanyForm.module.scss";
import { addCompany } from "../../../store/reducers/ActionCreators";
import { CompanyI } from "../../../models/Company";

const AddCompanyForm = () => {
	const dispatch = useAppDispatch();

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");

	const onAddCompany = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const company: CompanyI = {
			name,
			address,
			employees: [],
		};

		dispatch(addCompany(company));
		setName("");
		setAddress("");
	};

	return (
		<form onSubmit={onAddCompany} className={css.wrapper}>
			<input
				placeholder="Введите название компании"
				value={name}
				type="text"
				onChange={e => setName(e.target.value)}
			/>
			<input
				placeholder="Введите адресс компании"
				value={address}
				type="text"
				onChange={e => setAddress(e.target.value)}
			/>
			<button
				disabled={name.trim().length * address.trim().length === 0}
				type="submit"
			>
				Добавить компанию
			</button>
		</form>
	);
};

export default AddCompanyForm;
