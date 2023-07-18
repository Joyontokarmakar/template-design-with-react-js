
function TouchSection() {
    return (
        <div className={'mt-[155px] container mx-auto 2xl:max-w-[1675px]'}>
            <div className={'flex justify-center items-center gap-x-[146px]'}>
                <div className={'w-1/2'}>
                    <h2 className={'text-[51px] text-black1 font-medium'}>Consectetur<br/> adipiscing elit </h2>
                    <p className={'text-2xl text-black1 font-normal mt-[17px] opacity-70'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim viverra</p>
                </div>
                <div className={'flex justify-between items-center gap-x-[103px]'}>
                    <div className={'flex justify-between gap-x-[49px]'}>
                        <div>
                            <div className={'w-[184px] h-[196px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/green-network.png" alt=""/>
                            </div>
                            <div className={'bg-white mt-5 border-2 border-white rounded-[10px] shadow-shadow2 hover:shadow-shadow2Hover'}>
                                <p className={'text-primary text-[28px] font-medium text-center'}>First Touch</p>
                            </div>
                        </div>
                        <div>
                            <div className={'w-[184px] h-[196px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/yellow-network.png" alt=""/>
                            </div>
                            <div className={'bg-white mt-5 border-2 border-white rounded-[10px] shadow-shadow2 hover:shadow-shadow2Hover'}>
                                <p className={'text-yellow2 text-[28px] font-medium text-center'}>Last Touch</p>
                            </div>
                        </div>
                    </div>

                    <div className={'w-[190px] h-[202px] bg-white border-2 border-white rounded-full shadow-shadow2 hover:shadow-shadow2Hover flex justify-center items-center'}>
                        <p className={'text-black1 leading-[29px] font-normal text-center'}><span className={'text-[83px]'}>3</span><br/><span className={'text-[26px]'}>+Custom<br/> ones</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TouchSection
