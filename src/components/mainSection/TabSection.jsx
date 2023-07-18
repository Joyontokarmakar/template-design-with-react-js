
function TabSection() {
    return (
        <div className={'mt-[160px] container mx-auto 2xl:max-w-[1675px]'}>
            <div className={'flex justify-start items-center gap-x-[111px]'}>
                <div className={'w-1/2'}>
                    <h2 className={'text-[51px] text-black1 font-medium'}>Nemo enim ipsam quia </h2>
                    <p className={'text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu nemo enim</p>
                    <div className={'mt-[86px]'}>
                        <div className={'shadow-shadow3 hover:shadow-shadow2 rounded-[20px] p-5 mb-[18px] flex justify-start gap-x-[14px]'}>
                            <img src="/src/assets/images/icons/green-tik-icon.png" alt=""/>
                            <p className={'text-black3 text-[22px] font-medium'}>Sed ut perspiciatis unde</p>
                        </div>
                        <div className={'shadow-shadow3 hover:shadow-shadow2 rounded-[20px] p-5 mb-[18px] flex justify-start gap-x-[14px]'}>
                            <img src="/src/assets/images/icons/green-tik-icon.png" alt=""/>
                            <p className={'text-black3 text-[22px] font-medium'}>Omnis iste natus</p>
                        </div>
                        <div className={'shadow-shadow3 hover:shadow-shadow2 rounded-[20px] p-5 mb-[18px] flex justify-start gap-x-[14px]'}>
                            <img src="/src/assets/images/icons/green-tik-icon.png" alt=""/>
                            <p className={'text-black3 text-[22px] font-medium'}>Error sit voluptatem</p>
                        </div>
                        <div className={'shadow-shadow3 hover:shadow-shadow2 rounded-[20px] p-5 mb-[18px] flex justify-start gap-x-[14px]'}>
                            <img src="/src/assets/images/icons/green-tik-icon.png" alt=""/>
                            <p className={'text-black3 text-[22px] font-medium'}>Accusantium doloremque</p>
                        </div>
                    </div>
                    <button className={'px-[33px] py-[15px] rounded-[10px] text-lg font-semibold border border-primary bg-primary text-white mt-12'}>Try Out Now!</button>
                </div>
                <div className={'w-1/2'}>
                    <img src="/src/assets/images/chart-with-table.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default TabSection
