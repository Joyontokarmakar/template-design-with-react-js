import {Link} from "react-router-dom";
import blackLogo from"../assets/images/black-logo.png"
function Footer() {
    const getCopyrightYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className={'bg-primaryGray1 pt-10 lg:pt-[104px] pb-[72px]'}>
            <div className={'flex flex-col md:flex-row justify-center gap-y-10 lg:gap-y-0 lg:gap-x-[77px] px-5 2xl:px-0'}>
                <div className={'grid grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-[50px] lg:gap-y-0 lg:gap-x-[100px]'}>
                    <div>
                        <h2 className={'text-black text-lg font-semibold'}>Products</h2>
                        <ul className={'list-none mt-[21px]'}>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Features</Link></li>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Enterprice</Link></li>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Innovation</Link></li>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Offline</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={'text-black text-lg font-semibold'}>Products</h2>
                        <ul className={'list-none mt-[21px]'}>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>About</Link></li>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Our Story</Link></li>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={'text-black text-lg font-semibold'}>Products</h2>
                        <ul className={'list-none mt-[21px]'}>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Documentation</Link></li>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Community</Link></li>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>Contact</Link></li>
                            <li className={'mb-[10px]'}><Link to={'/'} className={'text-black opacity-70 text-lg font-normal'}>FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={'lg:w-0.5 h-0.5 lg:h-[220px] bg-[#010C23] opacity-[0.15]'}></div>
                <div className={'lg:pl-[25px] mt-5 lg:mt-0'}>
                    <Link to={'/'}>
                        <img src={blackLogo} alt="" className={'h-10 w-[202px] block mx-auto lg:mx-0'}/>
                    </Link>
                    <h2 className={'text-center lg:text-left text-xl lg:text-2xl leading-[35px] text-black font-semibold mt-5'}>Tristique senectus et netus<br/> et malesuada fames</h2>
                    <p className={'text-center lg:text-left mt-6 lg:mt-[30px] text-black2 text-[15px] font-light'}>&copy;{getCopyrightYear()} Logoipsum. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
