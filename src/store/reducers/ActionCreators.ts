import { AppDispatch } from "../store";
import { companySlice } from "./CompanySlice";
import axios from "axios";
import { CompanyDataI, CompanyI } from "../../models/Company";

const axiosInstance = axios.create({
	baseURL: "http://localhost:3000/companies"
});
export const fetchCompanies = (page: number) => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get(`http://localhost:3000/companies?_page=${page}&_per_page=30`);

		dispatch(setTotalCount(response.data.items));
		dispatch(setCurrentPage(response.data.next));

		dispatch(companySlice.actions.setCompanies(response.data.data));
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setLoading(false));
	}
};

export const setLoading = (isLoading: boolean) => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.setIsLoading(isLoading));
};

export const clearCompanies = () => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.clearCompanies());
};

export const setTotalCount = (totalCount: number) => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.setTotalCount(totalCount));
};

export const changeCompany = (companyId: string, company: CompanyI) => async (dispatch: AppDispatch) => {
	try {
		await axiosInstance.put(companyId, { company });

		dispatch(clearCompanies());
		dispatch(setCurrentPage(1));
		dispatch(setLoading(true));
	} catch (error) {
		console.log(error);
	}
};

export const addCompany = (company: CompanyI) => async (dispatch: AppDispatch) => {
	try {
		await axiosInstance.post("", { company });

		dispatch(clearCompanies());
		dispatch(setCurrentPage(1));
		dispatch(setLoading(true));
	} catch (error) {
		console.log(error);
	}
};

export const deleteCompanies = (companies: CompanyDataI[]) => async (dispatch: AppDispatch) => {
	// * Выбран такой корявый метод, потому что json-server не поддерживает удаление сразу массива данных

	for (const company of companies) {
		try {
			await axiosInstance.delete("" + company.id);
		} catch (error) {
			console.log(error);
		}
	}
	dispatch(clearCompanies());
	dispatch(setCurrentPage(1));
	dispatch(setLoading(true));
};

export const setCurrentCompany = (companyId: CompanyDataI | undefined) => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.setCurrentCompany(companyId));
};

export const setCurrentPage = (nextPage: number) => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.setPage(nextPage));
};

export const addChoicedCompany = (company: CompanyDataI) => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.addChoicedCompany(company));
};

export const addAllChoicedCompany = () => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.addAllChoicedCompany());
};

export const removeChoicedCompany = (companyId: string) => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.removeChoicedCompany(companyId));
};

export const removeAllChoicedCompany = () => (dispatch: AppDispatch) => {
	dispatch(companySlice.actions.removeAllChoicedCompany());
};
