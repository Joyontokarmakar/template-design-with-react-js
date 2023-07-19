import tikIcon from "../../assets/images/icons/green-tik-icon.png"
import chartTableImg from "../../assets/images/chart-with-table.png"

function TabSection() {
    return (
        <div className={'mt-20 lg:mt-[160px] container mx-auto 2xl:max-w-[1675px] px-5 2xl:px-0'}>
            <div className={'flex flex-col lg:flex-row justify-start items-center gap-y-10 lg:gap-y-0 lg:gap-x-[111px]'}>
                <div className={'w-full lg:w-1/2'}>
                    <h2 className={'text-3xl lg:text-[51px] lg:leading-[64px] text-black1 font-medium'}>Nemo enim ipsam quia </h2>
                    <p className={'text-xl lg:text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu nemo enim</p>
                    <div className={'mt-8 mt-[86px]'}>
                        <div className={'singleTab'}>
                            <img src={tikIcon} alt="" className={'w-[25px] lg:w-auto'}/>
                            <p className={'tabName'}>Sed ut perspiciatis unde</p>
                        </div>
                        <div className={'singleTab'}>
                            <img src={tikIcon} alt="" className={'w-[25px] lg:w-auto'}/>
                            <p className={'tabName'}>Omnis iste natus</p>
                        </div>
                        <div className={'singleTab'}>
                            <img src={tikIcon} alt="" className={'w-[25px] lg:w-auto'}/>
                            <p className={'tabName'}>Error sit voluptatem</p>
                        </div>
                        <div className={'singleTab'}>
                            <img src={tikIcon} alt="" className={'w-[25px] lg:w-auto'}/>
                            <p className={'tabName'}>Accusantium doloremque</p>
                        </div>
                    </div>
                    <button className={'px-4 lg:px-[33px] py-3 lg:py-[15px] rounded-[10px] text-sm lg:text-lg font-semibold border border-primary bg-primary text-white mt-5 lg:mt-12'}>Try Out Now!</button>
                </div>
                <div className={'w-full lg:w-1/2'}>
                    <img src={chartTableImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default TabSection
