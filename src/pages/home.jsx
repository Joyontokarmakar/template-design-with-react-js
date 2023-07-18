function Home() {
    return (
        <>
            {/* banner section start */}
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
            {/* banner section end */}

            {/* statistics section start */}
            <div className={'mt-[98px]'}>
                <p className={'text-black1 xl:text-[35px] 2xl:text-[51px] font-medium w-1/2 mx-auto text-center'}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
                <div className={'container mx-auto shadow-shadow2 2xl:max-w-[1675px]'}>
                    <table className={'w-full bg-transparent rounded-md'}>
                        <thead className={'bg-primaryGray1 text-black'}>
                            <tr>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px] rounded-l-[10px]'}>Source</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Ad</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Cost</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Sales</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>First time <br/>customers</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Revenue</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>ROAS</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>CAC</th>
                                <th className={'text-lg font-semibold pt-[18px] pb-[7px] rounded-r-[10px]'}>F.T. ROAS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Youtube</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Male_18+_UGC_Video</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$2,567.00</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>120</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>90</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$10,800.00</td>
                                <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-extrabold text-center pt-[23px] pb-[22px]'}>4.21</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$28.52</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>3.16</td>
                            </tr>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Youtube</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Male_18+_UGC_Video</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$2,567.00</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>120</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>90</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$10,800.00</td>
                                <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-extrabold text-center pt-[23px] pb-[22px]'}>4.21</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$28.52</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>3.16</td>
                            </tr>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Youtube</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Male_18+_UGC_Video</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$2,567.00</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>120</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>90</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$10,800.00</td>
                                <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-extrabold text-center pt-[23px] pb-[22px]'}>4.21</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$28.52</td>
                                <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>3.16</td>
                            </tr>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Youtube</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Male_18+_UGC_Video</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$2,567.00</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>120</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>90</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$10,800.00</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-extrabold text-center pt-[23px] pb-[22px]'}>4.21</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$28.52</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>3.16</td>
                            </tr>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Youtube</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Male_18+_UGC_Video</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$2,567.00</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>120</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>90</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$10,800.00</td>
                                <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-extrabold text-center pt-[23px] pb-[22px]'}>4.21</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$28.52</td>
                                <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>3.16</td>
                            </tr>
                            <tr>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Youtube</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>Male_18+_UGC_Video</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$2,567.00</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>120</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>90</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$10,800.00</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-extrabold text-center pt-[23px] pb-[22px]'}>4.21</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$28.52</td>
                                <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>3.16</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* statistics section end */}

            {/* social section start */}
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
            {/* social section end */}

            {/* card section start */}
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
            {/* card section end */}


        </>
    )
}

export default Home
