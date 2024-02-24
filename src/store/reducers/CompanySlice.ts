import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyDataI } from "../../models/Company";

interface CompanyState {
	page: number,
	isLoading: boolean,
	totalCount: number,
	companies: CompanyDataI[];
	choicedCompanies: CompanyDataI[];
	currentCompany: CompanyDataI | undefined;
}

const initialState: CompanyState = {
	companies: [],
	page: 1,
	totalCount: 0,
	isLoading: true,
	choicedCompanies: [],
	currentCompany: undefined,
};

export const companySlice = createSlice({
	name: "company",
	initialState,
	reducers: {
		setCompanies(state, action: PayloadAction<CompanyDataI[]>) {
			state.companies = [...state.companies, ...action.payload];
		},
		clearCompanies(state) {
			state.companies = [];
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setTotalCount(state, action: PayloadAction<number>) {
			state.totalCount = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		setCurrentCompany(state, action: PayloadAction<CompanyDataI | undefined>) {
			state.currentCompany = action.payload;
		},
		addChoicedCompany(state, action: PayloadAction<CompanyDataI>) {
			state.choicedCompanies = [...state.choicedCompanies, action.payload];
		},
		addAllChoicedCompany(state) {
			state.choicedCompanies = [...state.companies];
		},
		removeChoicedCompany(state, action: PayloadAction<string>) {
			state.choicedCompanies = state.choicedCompanies.filter(company => company.id !== action.payload);
		},
		removeAllChoicedCompany(state) {
			state.choicedCompanies = [];
		},
	}
});

export default companySlice.reducer;
