import greenNetworkImg from "../../assets/images/icons/green-network.png"
import yellowNetworkImg from "../../assets/images/icons/yellow-network.png"
function TouchSection() {
    return (
        <div className={'mt-20 lg:mt-[160px] container mx-auto 2xl:max-w-[1675px] px-5 2xl:px-0'}>
            <div className={'flex flex-col lg:flex-row justify-center items-center gap-y-[50px] lg:gap-y-0 lg:gap-x-[90px] 2xl:gap-x-[146px]'}>
                <div className={'w-fill lg:w-1/2'}>
                    <h2 className={'text-3xl lg:text-[51px] lg:leading-[64px] text-black1 font-medium'}>Consectetur<br/> adipiscing elit </h2>
                    <p className={'text-xl lg:text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim viverra</p>
                </div>
                <div className={'flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-9 lg:gap-y-0 lg:gap-x-[80px] 2xl:gap-x-[103px]'}>
                    <div className={'flex justify-between gap-x-[49px]'}>
                        <div>
                            <div className={'touchImg'}>
                                <img src={greenNetworkImg} alt="" className={'w-[50px] lg:w-auto'}/>
                            </div>
                            <div className={'bg-white mt-5 border-2 border-white rounded-[10px] shadow-shadow2 hover:shadow-shadow2Hover'}>
                                <p className={'text-primary text-base lg:text-[28px] font-medium text-center'}>First Touch</p>
                            </div>
                        </div>
                        <div>
                            <div className={'touchImg'}>
                                <img src={yellowNetworkImg} alt="" className={'w-[50px] lg:w-auto'}/>
                            </div>
                            <div className={'bg-white mt-5 border-2 border-white rounded-[10px] shadow-shadow2 hover:shadow-shadow2Hover'}>
                                <p className={'text-yellow2 text-base lg:text-[28px] font-medium text-center'}>Last Touch</p>
                            </div>
                        </div>
                    </div>

                    <div className={'touchRoundImg'}>
                        <p className={'text-black1 leading-[29px] font-normal text-center'}><span className={'text-[40px] lg:text-[83px]'}>3</span><br/><span className={'text-base lg:text-[26px]'}>+Custom<br/> ones</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TouchSection
