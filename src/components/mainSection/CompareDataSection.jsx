import chartImage from "../../assets/images/chart-img.png"
function CompareDataSection() {
    return (
        <div className={'mt-20 lg:mt-[160px] container mx-auto 2xl:max-w-[1675px] px-5 2xl:px-0'}>
            <div className={'w-4/5 lg:w-2/3 mx-auto text-center'}>
                <h2 className={'text-3xl lg:text-[51px] lg:leading-[64px] text-black1 font-medium'}>Lorem Ipsum is simply dummy text of<br/> the printing and typesetting</h2>
                <p className={'text-xl lg:text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore </p>
            </div>
            <div className={'mt-[55px]'}>
                <img src={chartImage} alt="" className={'mx-auto block'}/>
                <div className={'flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-y-0 lg:gap-x-[30px] mt-[64px]'}>
                    <div className={'w-full lg:w-1/2'}>
                        <p className={'text-black1 text-base lg:text-xl font-semibold text-center'}>Facebook data</p>
                        <table className={'w-full bg-transparent rounded-md'}>
                            <thead className={'bg-primaryGray1 text-black'}>
                            <tr>
                                <th className={'statTableHead rounded-l-[10px]'}>Ad name</th>
                                <th className={'statTableHead'}>Orders</th>
                                <th className={'statTableHead rounded-r-[10px]'}>ROAS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'statTableData bg-greenShed2 font-normal'}>All_25+_Static_split_screen</td>
                                <td className={'statTableData bg-greenShed2 font-normal'}>12</td>
                                <td className={'statTableData bg-greenShed2 font-normal'}>3.2</td>
                            </tr>
                            <tr>
                                <td className={'statTableData bg-greenShed2 font-normal'}>M_25+_Static_split_screen_2</td>
                                <td className={'statTableData bg-greenShed2 font-normal'}>2</td>
                                <td className={'statTableData bg-yellow1 font-normal'}>1.5</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={'w-full lg:w-1/2'}>
                        <p className={'text-black1 text-base lg:text-xl font-semibold text-center'}>Logoipsum data</p>
                        <table className={'w-full bg-transparent rounded-md'}>
                            <thead className={'bg-primaryGray1 text-black'}>
                            <tr>
                                <th className={'statTableHead rounded-l-[10px]'}>Ad name</th>
                                <th className={'statTableHead'}>Orders</th>
                                <th className={'statTableHead rounded-r-[10px]'}>ROAS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={'statTableData bg-greenShed2 font-normal'}>All_25+_Static_split_screen</td>
                                <td className={'statTableData bg-greenShed2 font-normal'}>10</td>
                                <td className={'statTableData bg-greenShed2 font-normal'}>2.8</td>
                            </tr>
                            <tr>
                                <td className={'statTableData bg-greenShed2 font-normal'}>M_25+_Static_split_screen_2</td>
                                <td className={'statTableData bg-greenShed2 font-normal'}>8</td>
                                <td className={'statTableData bg-greenShed4 font-normal'}>3</td>
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
