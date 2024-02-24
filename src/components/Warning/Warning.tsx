import css from "./warning.module.scss";

const Warning = () => (
	<div className={css.warning}>К сожалению, функционал json-server не дает возможность настолько глубоко
		проработать фейковый бэк, <br/>
		чтобы была возможность взаимодействовать с сотрудниками, как с компаниями :(
	</div>
);

export default Warning;
