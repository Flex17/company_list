import css from "./tableNav.module.scss";
import React from "react";

interface TableNavProps {
	children: React.ReactNode;
}

const TableNav = ({ children }: TableNavProps) => {

	return (
		<tr className={css.table_nav}>
			{children}
		</tr>
	);
};

export default TableNav;
