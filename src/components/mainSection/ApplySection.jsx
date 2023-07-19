
function ApplySection() {
    return (
        <div className={'my-[80px] lg:my-[127px] container mx-auto w-full lg:w-2/3 px-5 lg:px-0'}>
            <div className={'flex flex-col lg:flex-row justify-between items-center xl:gap-x-[100px] 2xl:gap-x-[241px]'}>
                <div className={''}>
                    <h2 className={'text-3xl lg:text-[51px] lg:leading-[64px] text-black1 font-medium'}>Ullamcorper morbi tincidunt<br/> ornare massa eget </h2>
                    <p className={'text-xl lg:text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore </p>
                </div>
                <button className={'px-[33px] py-3 lg:py-[15px] rounded-[10px] text-sm lg:text-lg font-semibold border border-primary bg-primary text-white mt-5 lg:mt-12'}>Apply</button>
            </div>
        </div>
    )
}

export default ApplySection
