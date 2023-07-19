import fbIcon from "../../assets/images/icons/fb-icon.png"
import icon1 from "../../assets/images/icons/icon-1.png"
import icon2 from "../../assets/images/icons/icon-2.png"
function IconSection() {
    return (
        <div className={'mt-20 lg:mt-[160px] container mx-auto 2xl:max-w-[1675px] px-5 lg:px-0'}>
            <div className={'w-4/5 lg:w-2/3 mx-auto text-center'}>
                <h2 className={'text-3xl lg:text-[51px] lg:leading-[64px] text-black1 font-medium'}>Ullamcorper morbi tincidunt ornare massa eget.<br/> Quam viverra orci sagittis eu volutpat odio</h2>
                <p className={'text-xl lg:text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore </p>
            </div>
            <div className={'mt-[30px] lg:mt-[62px] flex justify-center items-center gap-x-[26px]'}>
                <div className={'socialImg'}>
                    <img src={fbIcon} alt="" className={'w-[25px] lg:w-auto'}/>
                </div>
                <div>
                    <div className={'socialImg'}>
                        <img src={icon1} alt="" className={'w-[40px] lg:w-auto'}/>
                    </div>
                    <div className={'socialImg mt-[26px]'}>
                        <img src={icon2} alt="" className={'w-[40px] lg:w-auto'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconSection
