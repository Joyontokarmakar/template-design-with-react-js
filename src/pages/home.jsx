import HeroBanner from "../components/mainSection/HeroBanner.jsx";
import StatSection from "../components/mainSection/StatSection.jsx";
import SocialSection from "../components/mainSection/SocialSection.jsx";
import CardSection from "../components/mainSection/CardSection.jsx";
import TabSection from "../components/mainSection/TabSection.jsx";
import CompareDataSection from "../components/mainSection/CompareDataSection.jsx";
import TouchSection from "../components/mainSection/TouchSection.jsx";
import IconSection from "../components/mainSection/IconSection.jsx";
import TableDataSection from "../components/mainSection/TableDataSection.jsx";
import ApplySection from "../components/mainSection/ApplySection.jsx";

function Home() {
    return (
        <>
            {/* banner section start */}
            <HeroBanner/>
            {/* banner section end */}

            {/* statistics section start */}
            <StatSection/>
            {/* statistics section end */}

            {/* social section start */}
            <SocialSection/>
            {/* social section end */}

            {/* card section start */}
            <CardSection/>
            {/* card section end */}

            {/* tab section start */}
            <TabSection/>
            {/* tab section end */}

            {/* compareData section start */}
            <CompareDataSection/>
            {/* compareData section end */}

            {/* touch section start */}
            <TouchSection/>
            {/* touch section end */}

            {/* icon section start */}
            <IconSection/>
            {/* icon section end */}

            {/* tableData section start */}
            <TableDataSection/>
            {/* tableData section end */}

            {/* apply section start */}
            <ApplySection/>
            {/* apply section end */}
        </>
    )
}

export default Home
