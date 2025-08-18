import ExperienceCards, {ECardBg, ECardTitle, LeftWindow, RightWindow} from "./experience-cards.tsx";


const ExperienceSection = () => {

    return <>

        <ExperienceCards>

            <ECardBg url={"/project-images/portfolio.png"} />
            <ECardTitle>Portfolio</ECardTitle>

        </ExperienceCards>

        <ExperienceCards>

            <ECardBg url={"/project-images/portfolio.png"} />
            <ECardTitle>Portfolio</ECardTitle>

        </ExperienceCards>

        <ExperienceCards id={'nativeCard'}>

            <ECardBg url={"/project-images/portfolio.png"} />
            <ECardTitle>Portfolio</ECardTitle>

        </ExperienceCards>

    </>

}

export default ExperienceSection;