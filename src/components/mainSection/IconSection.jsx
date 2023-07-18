import fbIcon from "../../assets/images/icons/fb-icon.png"
import icon1 from "../../assets/images/icons/icon-1.png"
import icon2 from "../../assets/images/icons/icon-2.png"
function IconSection() {
    return (
        <div className={'mt-[160px] container mx-auto 2xl:max-w-[1675px]'}>
            <div className={'w-2/3 mx-auto text-center'}>
                <h2 className={'text-[51px] text-black1 font-medium'}>Ullamcorper morbi tincidunt ornare massa eget.<br/> Quam viverra orci sagittis eu volutpat odio</h2>
                <p className={'text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore </p>
            </div>
            <div className={'mt-[62px] flex justify-center items-center gap-x-[26px]'}>
                <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex justify-center items-center'}>
                    <img src={fbIcon} alt=""/>
                </div>
                <div>
                    <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex justify-center items-center'}>
                        <img src={icon1} alt=""/>
                    </div>
                    <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex justify-center items-center mt-[26px]'}>
                        <img src={icon2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconSection
