import React, { useRef, useEffect, useState } from 'react';
import { Progress } from 'antd';
import './index.scss';

interface IProps {
	title: string;
	auto?: boolean | true; // 是否模拟进度
	speed?: number | 10;
	percent?: number | 0;
	strokeColor?: string | '3F90F7';
	trailColor?: string | 'EBEBEB';
}

const CircleStatusLoader = (props: IProps) => {
	const processInterval = useRef<any>(null);
	const percent = useRef<number>(0);
	const [sPercent, setSPercent] = useState<number>(0);

	const seed = props.speed ? Math.floor(Math.random() * props.speed + 1) : 0; // 防止出现多次为0的情况
	const hundredPercent: number = 100;

	// TODO 计时开始的时机
	// TODO 计时完成的时机

	const startInterval = () => {
		processInterval.current = setInterval(() => {
			if (percent.current + seed < hundredPercent) {
				// 到达100前停滞
				percent.current += seed;
				setSPercent(percent.current);
			} else {
				// console.log('close timer !')
				clearInterval(processInterval.current);
			}
			// console.log(percent.current);
		}, 1000);
	};

	useEffect(() => {
		if (props.auto) {
			startInterval();
		}
		return () => {
			clearInterval(processInterval.current);
		};
	}, []);

	return (
		<div className='dl__container'>
			<Progress type="circle" strokeColor={props.strokeColor} trailColor={props.trailColor} percent={props.auto ? sPercent : props.percent} width={80} className='dl__loading__icon' />
			<p>{props.title}</p>
		</div>
	);
};

export default CircleStatusLoader;
