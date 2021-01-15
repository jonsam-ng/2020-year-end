import React from '../../lock/node_modules/react';
import loading from '../../assets/img/loading.png';
import style from './index.module.scss';

interface IProps {
	title: string;
}

const StatusLoader = (props: IProps) => {
	return (
		<div className={style.dl__container}>
			<img src={loading} alt="decoding_loading_icon" className={style.dl__loading__icon} />
			<p>{props.title}</p>
		</div>
	);
};

export default StatusLoader;
