import chartImage from "../../assets/images/chart-img.png"
function CompareDataSection() {
    return (
        <div className={'mt-[160px] container mx-auto 2xl:max-w-[1675px]'}>
            <div className={'w-2/3 mx-auto text-center'}>
                <h2 className={'text-[51px] text-black1 font-medium'}>Lorem Ipsum is simply dummy text of<br/> the printing and typesetting</h2>
                <p className={'text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore </p>
            </div>
            <div className={'mt-[55px]'}>
                <img src={chartImage} alt="" className={'mx-auto block'}/>
                <div className={'flex justify-center gap-x-[30px] mt-[64px]'}>
                    <div className={'w-1/2'}>
                        <p className={'text-black1 text-xl font-semibold text-center'}>Facebook data</p>
                        <table className={'w-full bg-transparent rounded-md'}>
                            <thead className={'bg-primaryGray1 text-black'}>
                            <tr>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px] rounded-l-[10px]'}>Ad name</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Orders</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px] rounded-r-[10px]'}>ROAS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>All_25+_Static_split_screen</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>12</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>3.2</td>
                            </tr>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>M_25+_Static_split_screen_2</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>2</td>
                                <td className={'bg-yellow1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>1.5</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={'w-1/2'}>
                        <p className={'text-black1 text-xl font-semibold text-center'}>Logoipsum data</p>
                        <table className={'w-full bg-transparent rounded-md'}>
                            <thead className={'bg-primaryGray1 text-black'}>
                            <tr>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px] rounded-l-[10px]'}>Ad name</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Orders</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px] rounded-r-[10px]'}>ROAS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>All_25+_Static_split_screen</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>10</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>2.8</td>
                            </tr>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>M_25+_Static_split_screen_2</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>8</td>
                                <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>3</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareDataSection
