import { setLoading } from "../store/reducers/ActionCreators";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";

const useDynamicPagination = () => {
	const dispatch = useAppDispatch();
	const {
		companies,
		totalCount
	} = useAppSelector(state => state.companyReducer);

	const scrollHandler = (e: any) => {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
			&& companies.length < totalCount
		) {
			dispatch(setLoading(true));
		}
	};
	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return () => document.removeEventListener("scroll", scrollHandler);
	});
};

export default useDynamicPagination;
