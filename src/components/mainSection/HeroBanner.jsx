
function HeroBanner() {
    return (
        <div className={'flex justify-between xl:gap-x-[95px] 2xl:gap-x-[125px] w-full'}>
            <div className={'w-1/2 xl:pt-[90px] 2xl:pt-[117px] xl:pl-[95px] 2xl:pl-[120px]'}>
                <h2 className={'text-black1 xl:text-8xl 2xl:text-[126px] 2xl:leading-[114px] font-normal'}>
                    Lore <span className={'font-bold'}>ipsum.</span>
                    <br/>
                    Dolor <span className={'font-bold'}>sit.</span>
                </h2>
                <p className={'text-black1 opacity-70 text-2xl font-normal mt-[42px]'}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.</p>
                <div className={'flex justify-start gap-x-6 mt-12'}>
                    <button className={'px-[32px] py-[17px] rounded-[10px] text-lg font-semibold border border-black1 bg-white text-black1'}>Viverra orci sagittis</button>
                    <button className={'px-[52px] py-[17px] rounded-[10px] text-lg font-semibold border border-primary bg-primary text-white flex justify-center items-center gap-x-[14px]'}>
                        <img src="/src/assets/images/icons/play-icon.png" alt=""/>
                        Get a demo
                    </button>
                </div>
            </div>
            <div className={'w-1/2'}>
                <img src="/src/assets/images/banner-img.png" alt="" className={'w-full'}/>
            </div>
        </div>
    )
}

export default HeroBanner
