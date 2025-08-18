import React from "react";
import ButtonCard from "../global/button-card.tsx";



const ExperienceCards = React.memo(({children, id}) => {

    return <div style={{width: '25vw'}}>

            <div id={id} className={'expCard'}>
                {children}
            </div>

    </div>

})

export const ECardsTitle = React.memo(({children}) => {

    return <p className={"ETitle"}>

        {children}

    </p>

})

export const ECardBg = React.memo(({children}) => {

    return <>

        <img src={children} className={"EBackground"}/>

    </>

})

export const ECardSections = React.memo(({children}) => {

    return <>

        <ButtonCard>
            <div className={"EBtnSection"}>

                <div>
                    {children}
                </div>

                {/* Todo Add icon*/}
            </div>
        </ButtonCard>

    </>

})

export const ECardSections = React.memo(({children}) => {

    return <>

        <p className={"Etitle"}>
            {children}
        </p>

    </>

})

ExperienceCards.sTitle = React.memo(({children}) => {

    return <>

        <p className={"EsTitle"}>
            {children}
        </p>

    </>

})

ExperienceCards.leftWindow = React.memo(({children}) => {

    return <>

        <section className={"ELeftWindow"}>
            {children}
        </section>

    </>

})

ExperienceCards.rightWindow = React.memo(({children}) => {

    return <>

        <section className={"ERightWindow"}>
            {children}
        </section>

    </>

})

export default ExperienceCards;