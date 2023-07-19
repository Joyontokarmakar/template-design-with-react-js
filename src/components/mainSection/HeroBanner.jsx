import bannerImg from "../../assets/images/banner-img.png"
import playIcon from "../../assets/images/icons/play-icon.png"
function HeroBanner() {
    return (
        <div className={'flex flex-col lg:flex-row justify-between xl:gap-x-[95px] 2xl:gap-x-[125px] w-full'}>
            <div className={'order-2 lg:order-1 w-full lg:w-1/2 xl:pt-[90px] 2xl:pt-[117px] xl:pl-[95px] px-5 lg:px-0 2xl:pl-[120px]'}>
                <h2 className={'text-black1 text-4xl lg:text-5xl xl:text-8xl 2xl:text-[126px] 2xl:leading-[114px] mt-5 lg:mt-0 font-normal'}>
                    Lore <span className={'font-bold'}>ipsum.</span>
                    <br/>
                    Dolor <span className={'font-bold'}>sit.</span>
                </h2>
                <p className={'text-black1 opacity-70 text-xl lg:text-2xl font-normal mt-5 lg:mt-[42px]'}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.</p>
                <div className={'flex justify-start gap-x-5 lg:gap-x-6 mt-5 lg:mt-12 mb-5 lg:mb-0'}>
                    <button className={'px-4 lg:px-8 py-2 lg:py-[17px] rounded-[10px] text-sm lg:text-lg font-semibold border border-black1 bg-white text-black1'}>Viverra orci sagittis</button>
                    <button className={'px-5 lg:px-[52px] py-2 lg:py-[17px] rounded-[10px] text-sm lg:text-lg font-semibold border border-primary bg-primary text-white flex justify-center items-center gap-x-2 lg:gap-x-[14px]'}>
                        <img src={playIcon} alt=""/>
                        Get a demo
                    </button>
                </div>
            </div>
            <div className={'order-1 lg:order-2 w-full lg:w-1/2'}>
                <img src={bannerImg} alt="" className={'w-full'}/>
            </div>
        </div>
    )
}

export default HeroBanner
