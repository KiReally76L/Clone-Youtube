import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftNavMenuItem } from '../LeftNavMenuItem/LeftNavMenuItem';
import { categories } from '../../utils/constanis';
import { Context } from '../../context/contextApi';

export const LeftNav = () => {
	const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context);

	const navigate = useNavigate();

	const clickHanlder = (name, type) => {
		switch (type) {
			case 'category':
				return setSelectCategories(name);
			case 'home':
				return setSelectCategories(name);
			case 'menu':
				return false;
			default:
				break;
		}
	};

	return (
		<div
			className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
				mobileMenu ? 'translate-x-0' : ''
			}`}>
			<div className='flex px-5 flex-col'>
				{categories.map((item, i) => {
					return (
						<React.Fragment>
							<LeftNavMenuItem
								key={i}
								icon={item.icon}
								action={() => {
									clickHanlder(item.name, item.type);
									navigate('/');
								}}
								className={`${selectCategories === item.name ? 'bg-white/[0.15]' : ''}`}
								text={item.type === 'home' ? 'Home' : item.name}
							/>
							{item.divider && <hr className='my-5 border-white/[0.2]' />}
						</React.Fragment>
					);
				})}
				<hr className='my-5 border-white/[0.2]' />
			</div>
		</div>
	);
};
