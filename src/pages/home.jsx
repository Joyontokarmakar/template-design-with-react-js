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

            {/* tab section start */}
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
            {/* tab section end */}

            {/* compareData section start */}
            <div className={'mt-[160px] container mx-auto 2xl:max-w-[1675px]'}>
                <div className={'w-2/3 mx-auto text-center'}>
                    <h2 className={'text-[51px] text-black1 font-medium'}>Lorem Ipsum is simply dummy text of<br/> the printing and typesetting</h2>
                    <p className={'text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore </p>
                </div>
                <div className={'mt-[55px]'}>
                    <img src="/src/assets/images/chart-img.png" alt="" className={'mx-auto block'}/>
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
            {/* compareData section end */}

            {/* touch section start */}
            <div className={'mt-[155px] container mx-auto 2xl:max-w-[1675px]'}>
                <div className={'flex justify-center items-center gap-x-[146px]'}>
                    <div className={'w-1/2'}>
                        <h2 className={'text-[51px] text-black1 font-medium'}>Consectetur<br/> adipiscing elit </h2>
                        <p className={'text-2xl text-black1 font-normal mt-[17px] opacity-70'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim viverra</p>
                    </div>
                    <div className={'flex justify-between items-center gap-x-[103px]'}>
                        <div className={'flex justify-between gap-x-[49px]'}>
                            <div>
                                <div className={'w-[184px] h-[196px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                    <img src="/src/assets/images/icons/green-network.png" alt=""/>
                                </div>
                                <div className={'bg-white mt-5 border-2 border-white rounded-[10px] shadow-shadow2 hover:shadow-shadow2Hover'}>
                                    <p className={'text-primary text-[28px] font-medium text-center'}>First Touch</p>
                                </div>
                            </div>
                            <div>
                                <div className={'w-[184px] h-[196px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex flex-col justify-center items-center gap-y-3'}>
                                    <img src="/src/assets/images/icons/yellow-network.png" alt=""/>
                                </div>
                                <div className={'bg-white mt-5 border-2 border-white rounded-[10px] shadow-shadow2 hover:shadow-shadow2Hover'}>
                                    <p className={'text-yellow2 text-[28px] font-medium text-center'}>Last Touch</p>
                                </div>
                            </div>
                        </div>

                        <div className={'w-[190px] h-[202px] bg-white border-2 border-white rounded-full shadow-shadow2 hover:shadow-shadow2Hover flex justify-center items-center'}>
                            <p className={'text-black1 leading-[29px] font-normal text-center'}><span className={'text-[83px]'}>3</span><br/><span className={'text-[26px]'}>+Custom<br/> ones</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* touch section end */}

            {/* icon section start */}
            <div className={'mt-[160px] container mx-auto 2xl:max-w-[1675px]'}>
                <div className={'w-2/3 mx-auto text-center'}>
                    <h2 className={'text-[51px] text-black1 font-medium'}>Ullamcorper morbi tincidunt ornare massa eget.<br/> Quam viverra orci sagittis eu volutpat odio</h2>
                    <p className={'text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore </p>
                </div>
                <div className={'mt-[62px] flex justify-center items-center gap-x-[26px]'}>
                    <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex justify-center items-center'}>
                        <img src="/src/assets/images/icons/fb-icon.png" alt=""/>
                    </div>
                    <div>
                        <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex justify-center items-center'}>
                            <img src="/src/assets/images/icons/icon-1.png" alt=""/>
                        </div>
                        <div className={'w-[141px] h-[141px] bg-white border-2 border-white rounded-[20px] shadow-shadow2 hover:shadow-shadow2Hover flex justify-center items-center mt-[26px]'}>
                            <img src="/src/assets/images/icons/icon-2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* icon section end */}

            {/* tableData section start */}
            <div className={'container mx-auto mt-[78px] shadow-shadow2 2xl:max-w-[1675px]'}>
                <table className={'w-full bg-transparent rounded-md'}>
                    <thead className={'bg-primaryGray2 text-black'}>
                        <tr>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px] rounded-l-[10px]'}>Date</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Users</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Week 0</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Week 1</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Week 2</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Week 3</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Week 4</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Week 5</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Week 6</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px]'}>Week 7</th>
                            <th className={'text-lg font-semibold pt-[18px] pb-[7px] rounded-r-[10px]'}>Week 8</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>06-17 - 06-23</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>1476</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$209</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$219</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$230</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$242</td>
                            <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$254</td>
                            <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$267</td>
                            <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$280</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$294</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$309</td>
                        </tr>
                        <tr>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>06-17 - 06-23</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>1476</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$209</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$219</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$230</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$242</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$254</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$267</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$280</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$294</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                        </tr>
                        <tr>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>06-17 - 06-23</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>1476</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$209</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$219</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$230</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$242</td>
                            <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$254</td>
                            <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$267</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$280</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                        </tr>
                        <tr>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>06-17 - 06-23</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>1476</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$209</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$219</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$230</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$242</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$254</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$267</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                        </tr>
                        <tr>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>06-17 - 06-23</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>1476</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$209</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$219</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$230</td>
                            <td className={'bg-greenShed2 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$242</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$254</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                        </tr>
                        <tr>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>06-17 - 06-23</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>1476</td>
                            <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$209</td>
                            <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$219</td>
                            <td className={'bg-greenShed3 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$230</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$242</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                        </tr>
                        <tr>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>06-17 - 06-23</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>1476</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$209</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$219</td>
                            <td className={'bg-greenShed4 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}>$230</td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                            <td className={'bg-primaryGray1 rounded-[15px] border-[4px] border-white text-black text-lg font-normal text-center pt-[23px] pb-[22px]'}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* tableData section end */}

            {/* apply section start */}
            <div className={'my-[127px] container mx-auto w-2/3'}>
                <div className={'flex justify-between items-center xl:gap-x-[100px] 2xl:gap-x-[241px]'}>
                    <div className={''}>
                        <h2 className={'text-[51px] text-black1 font-semibold'}>Ullamcorper morbi tincidunt<br/> ornare massa eget </h2>
                        <p className={'text-2xl text-black1 font-normal mt-[18px] opacity-70'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore </p>
                    </div>
                    <button className={'px-[33px] py-[15px] rounded-[10px] text-lg font-semibold border border-primary bg-primary text-white mt-12'}>Apply</button>
                </div>
            </div>
                        {/* apply section end */}
        </>
    )
}

export default Home
