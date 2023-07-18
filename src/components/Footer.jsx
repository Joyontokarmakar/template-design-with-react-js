import {Link} from "react-router-dom";

function Footer() {
    const getCopyrightYear = () => {
        return new Date().getFullYear()
    }
    return (
        <div className={'bg-primaryGray1 pt-[104px] pb-[72px]'}>
            <div className={'flex flex-col md:flex-row justify-center gap-x-[77px]'}>
                <div className={'flex justify-start gap-x-[100px]'}>
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
                <div className={'w-0.5 h-[220px] bg-[#010C23] opacity-[0.15]'}></div>
                <div className={'pl-[25px]'}>
                    <Link to={'/'}>
                        <img src="../assets/images/black-logo.png" alt="" className={'h-10 w-[202px]'}/>
                    </Link>
                    <h2 className={'text-2xl leading-[35px] text-black font-semibold mt-5'}>Tristique senectus et netus<br/> et malesuada fames</h2>
                    <p className={'mt-[30px] text-black2 text-[15px] font-light'}>&copy;{getCopyrightYear()} Logoipsum. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
