
function CardSection() {
    return (
        <div className={'mt-[160px] container mx-auto 2xl:max-w-[1675px]'}>
            <div className={'flex justify-center items-center gap-x-[25px]'}>
                <div className={'bg-white pt-12 px-[62px] pb-[62px] rounded-[20px] w-1/3 shadow-shadow2 hover:shadow-shadow2Hover'}>
                    <img src="/src/assets/images/icons/green-pi-icon.png" alt=""/>
                    <h2 className={'mt-[65px] text-black text-[22px] font-semibold'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className={'mt-[15px] text-black opacity-70 text-lg font-normal'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
                </div>
                <div className={'bg-white pt-12 px-[62px] pb-[62px] rounded-[20px] w-1/3 shadow-shadow2 hover:shadow-shadow2Hover'}>
                    <img src="/src/assets/images/icons/green-network-icon.png" alt=""/>
                    <h2 className={'mt-[65px] text-black text-[22px] font-semibold'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className={'mt-[15px] text-black opacity-70 text-lg font-normal'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
                </div>
                <div className={'bg-white pt-12 px-[62px] pb-[62px] rounded-[20px] w-1/3 shadow-shadow2 hover:shadow-shadow2Hover'}>
                    <img src="/src/assets/images/icons/green-wave-icon.png" alt=""/>
                    <h2 className={'mt-[65px] text-black text-[22px] font-semibold'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className={'mt-[15px] text-black opacity-70 text-lg font-normal'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
                </div>
            </div>
        </div>
    )
}

export default CardSection
