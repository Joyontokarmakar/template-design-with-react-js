
function SocialSection() {
    return (
        <div className={'mt-[160px] container mx-auto 2xl:max-w-[1675px]'}>
            <div className={'flex justify-start items-center gap-x-[187px]'}>
                <div className={'w-1/2'}>
                    <h2 className={'text-[51px] text-black1 font-medium'}>Sed ut perspiciatis unde omnis<br/> iste natus error. <strong>Try out!</strong></h2>
                    <p className={'text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore ullamco esse cillium</p>
                    <button className={'px-[33px] py-[15px] rounded-[10px] text-lg font-semibold border border-primary bg-primary text-white mt-12'}>Try Out Now!</button>
                </div>
                <div className={'w-1/2'}>
                    <div className={'flex justify-start items-start gap-x-[62px]'}>
                        <div className={'grid grid-cols-1 gap-y-[55px]'}>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/icon-1.png" alt=""/>
                            </div>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/fb-icon.png" alt=""/>
                            </div>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/icon-2.png" alt=""/>
                            </div>
                        </div>
                        <div className={'grid grid-cols-1 gap-y-[55px] mt-[100px]'}>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/tiktok-icon.png" alt=""/>
                            </div>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/pinterest-icon.png" alt=""/>
                                <p className={'text-black text-sm font-normal'}>Coming soon</p>
                            </div>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/twitter-icon.png" alt=""/>
                                <p className={'text-black text-sm font-normal'}>Coming soon</p>
                            </div>
                        </div>
                        <div className={'grid grid-cols-1 gap-y-[55px]'}>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/snapchat-icon.png" alt=""/>
                                <p className={'text-black text-sm font-normal'}>Coming soon</p>
                            </div>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/icon-3.png" alt=""/>
                                <p className={'text-black text-sm font-normal'}>Coming soon</p>
                            </div>
                            <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                <img src="/src/assets/images/icons/icon-4.png" alt=""/>
                                <p className={'text-black text-sm font-normal'}>Coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialSection
