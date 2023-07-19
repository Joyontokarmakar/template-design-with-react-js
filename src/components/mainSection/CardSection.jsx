import piIcon from "../../assets/images/icons/green-pi-icon.png"
import networkIcon from "../../assets/images/icons/green-network-icon.png"
import waveIcon from "../../assets/images/icons/green-wave-icon.png"
function CardSection() {
    return (
        <div className={'mt-20 lg:mt-[160px] container mx-auto 2xl:max-w-[1675px] px-5 lg:px-0'}>
            <div className={'flex flex-col lg:flex-row justify-center items-center gap-y-[10px] lg:gap-y-[10px] lg:gap-x-[25px]'}>
                <div className={'singleCard'}>
                    <img src={piIcon} alt=""/>
                    <h2 className={'cardHeader'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className={'cardBody'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
                </div>
                <div className={'singleCard'}>
                    <img src={networkIcon} alt=""/>
                    <h2 className={'cardHeader'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className={'cardBody'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
                </div>
                <div className={'singleCard'}>
                    <img src={waveIcon} alt=""/>
                    <h2 className={'cardHeader'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p className={'cardBody'}>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
                </div>
            </div>
        </div>
    )
}

export default CardSection
