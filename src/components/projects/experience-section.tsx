import ExperienceCards from "./experience-cards.tsx";


const ExperienceSection = () => {

    return <>

        <ExperienceCards.newCard>

            <ExperienceCards.leftWindow>asdf</ExperienceCards.leftWindow>
            <ExperienceCards.rightWindow>asdf</ExperienceCards.rightWindow>

        </ExperienceCards.newCard>

        <ExperienceCards.newCard>

            <ExperienceCards.leftWindow>asdf</ExperienceCards.leftWindow>
            <ExperienceCards.rightWindow>asdf</ExperienceCards.rightWindow>

        </ExperienceCards.newCard>

        <ExperienceCards.newCard id={'nativeCard'}>

            <ExperienceCards.leftWindow>asdf</ExperienceCards.leftWindow>
            <ExperienceCards.rightWindow>asdf</ExperienceCards.rightWindow>

        </ExperienceCards.newCard>

    </>

}

export default ExperienceSection;