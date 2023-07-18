import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className={'px-[120px] py-6 flex justify-between border-0 border-[#F3F3F3] shadow-shadow1'}>
            <div className={'flex justify-start items-center gap-x-[150px]'}>
                <Link to={'/'}>
                    <img src="/src/assets/images/main-logo.png" alt="" className={'h-10 w-[202px]'}/>
                </Link>
                <div className={'flex justify-start items-center gap-x-20'}>
                    <select name="" id="" className={'text-xl font-medium text-primary'}>
                        <option value="" default>Product</option>
                        <option value="">Features</option>
                        <option value="">Enterprice</option>
                        <option value="">Innovation</option>
                        <option value="">Offline</option>
                    </select>
                    <Link to={'/'} className={'text-xl font-medium text-black1'}>About us</Link>
                    <Link to={'/'} className={'text-xl font-medium text-black1'}>Contact</Link>
                </div>
            </div>
            <div className={'flex justify-start gap-x-6'}>
                <button className={'px-[33px] py-[14px] rounded-[10px] text-lg font-semibold border border-primary bg-primary text-white'}>Get Started</button>
                <button className={'px-[33px] py-[14px] rounded-[10px] text-lg font-semibold border border-black1 bg-white text-black1'}>Login</button>
            </div>
        </div>
    )
}
