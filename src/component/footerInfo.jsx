import React from 'react';
import joodco from '../icons/joodco.png';
import hadish from '../icons/hadishLogo.png';
const Footer = () => {
	return (
		<>
			<div className='w-100 d-flex flex-column' style={{ height: '22rem' }}>
				<div className=' d-flex flex-row justify-content-start align-items-center pt-5'>
					<div className='widthOfwelcomeLogo d-flex flex-row justify-content-center align-items-center border-left border-white'>
						<img src={hadish} className='w-75 h-75' />
					</div>
					<div className='widthOfwelcomeLogo d-flex flex-row justify-content-center align-items-center'>
						<img src={joodco} className='w-75 h-75' />
					</div>
				</div>
				<div
					className='d-flex flex-row pr-4 pt-4'
					style={{ textAlign: 'start' }}
				>
					پاسداران , میدان هروی , خیابان موسوی شرقی , پلاک 14 , هدیش مال
				</div>
				<div className='d-flex flex-row pr-4 pt-3'>
					ساخته شده توسط : گروه جودکو
				</div>
				<div className='d-flex flex-row pr-4 pt-3'>ثبت سفارش : 09368081915</div>
			</div>
		</>
	);
};
export default Footer;
