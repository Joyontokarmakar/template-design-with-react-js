import icon1 from "../../assets/images/icons/icon-1.png"
import fbIcon from "../../assets/images/icons/fb-icon.png"
import icon2 from "../../assets/images/icons/icon-2.png"
import tiktokIcon from "../../assets/images/icons/tiktok-icon.png"
import pinterestIcon from "../../assets/images/icons/pinterest-icon.png"
import twitterIcon from "../../assets/images/icons/twitter-icon.png"
import icon3 from "../../assets/images/icons/icon-3.png"
import snapchatIcon from "../../assets/images/icons/snapchat-icon.png"
import icon4 from "../../assets/images/icons/icon-4.png"
function SocialSection() {
    return (
        <div className={'mt-20 lg:mt-[160px] container mx-auto 2xl:max-w-[1675px] px-5 2xl:px-0'}>
            <div className={'flex flex-col lg:flex-row justify-start items-center gap-y-[50px] lg:gap-y-0 lg:gap-x-[110px] 2xl:gap-x-[187px]'}>
                <div className={'w-full lg:w-1/2'}>
                    <h2 className={'text-3xl lg:text-[51px] lg:leading-[64px] text-black1 font-medium'}>Sed ut perspiciatis unde omnis<br/> iste natus error. <strong>Try out!</strong></h2>
                    <p className={'text-xl lg:text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore ullamco esse cillium</p>
                    <button className={'px-4 lg:px-[33px] py-3 lg:py-[15px] rounded-[10px] text-sm lg:text-lg font-semibold border border-primary bg-primary text-white mt-5 lg:mt-12'}>Try Out Now!</button>
                </div>
                <div className={'w-full lg:w-1/2'}>
                    <div className={'flex justify-start items-start gap-x-7 lg:gap-x-[42px] 2xl:gap-x-[62px]'}>
                        <div className={'socialSecInnerGrid'}>
                            <div className={'socialImg'}>
                                <img src={icon1} alt="" className={'w-[40px] lg:w-auto'}/>
                            </div>
                            <div className={'socialImg'}>
                                <img src={fbIcon} alt="" className={'w-[25px] lg:w-auto'}/>
                            </div>
                            <div className={'socialImg'}>
                                <img src={icon2} alt="" className={'w-[40px] lg:w-auto'}/>
                            </div>
                        </div>
                        <div className={'socialSecInnerGrid mt-[70px] lg:mt-[100px]'}>
                            <div className={'socialImg'}>
                                <img src={tiktokIcon} alt="" className={'w-[40px] lg:w-auto'}/>
                            </div>
                            <div className={'socialImg'}>
                                <img src={pinterestIcon} alt="" className={'w-[40px] lg:w-auto'}/>
                                <p className={'text-black text-xs lg:text-sm font-normal'}>Coming soon</p>
                            </div>
                            <div className={'socialImg'}>
                                <img src={twitterIcon} alt="" className={'w-[40px] lg:w-auto'}/>
                                <p className={'text-black text-xs lg:text-sm font-normal'}>Coming soon</p>
                            </div>
                        </div>
                        <div className={'socialSecInnerGrid'}>
                            <div className={'socialImg'}>
                                <img src={snapchatIcon} alt="" className={'w-[40px] lg:w-auto'}/>
                                <p className={'text-black text-xs lg:text-sm font-normal'}>Coming soon</p>
                            </div>
                            <div className={'socialImg'}>
                                <img src={icon3} alt="" className={'w-[40px] lg:w-auto'}/>
                                <p className={'text-black text-xs lg:text-sm font-normal'}>Coming soon</p>
                            </div>
                            <div className={'socialImg'}>
                                <img src={icon4} alt="" className={'w-[40px] lg:w-auto'}/>
                                <p className={'text-black text-xs lg:text-sm font-normal'}>Coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialSection
