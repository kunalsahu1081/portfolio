export enum ThemeType {
    light,
    dark,
}

const themeVariations: object = {

    [ThemeType.light]: {
        /* Text Colors */
        "--primary-text-color": "#color: #64ffda;",
        "--inverted-text-color": "black",

        /*  background colors */
        "--primary-background-color": "#0a192f",
        "--inverted-background-color": "white",
        "--btn-hovered-background-color": "green",
        "--header-background": "white",
        "--upcoming-background-color": "#0a192f",

        /* initial scales */
        "--upcoming-background-scale": 1,
        "--card_background_scale": 0,
        "__card_border_scale": 0,

        /* borders */
        "--border-color": "#0a192f",
        "--icon-color": "white",

        /* Disable color schemes taking effect from other libraries*/
        "color-scheme": "none",
    },
    [ThemeType.dark]: {
        "--primary-text-color": "white",
        "--inverted-text-color": "black",

        "--primary-background-color": "black",
        "--inverted-background-color": "white",
        "--btn-hovered-background-color": "green",
        "--header-background": "black",
        "--upcoming-background-color": "black",

        /* initial scales */
        "--upcoming-background-scale": 1,
        "--card_background_scale": 0,
        "__card_border_scale": 0,

        /* borders */
        "--border-color": "white",
        "--icon-color": "white",

        /* Disable color schemes taking effect from other libraries*/
        "color-scheme": "none",
    }

}


export const changeTheme = (theme: ThemeType) => {

    const root = document.documentElement;
    const properties = themeVariations[theme];

    setTimeout(() => {
        for (const property in properties) {
            root.style.setProperty(property, properties[property]);
        }
    }, 200)

    setTimeout(() => {
        root.style.setProperty("--background-scale", properties["--upcoming-background-scale"]);
        root.style.setProperty("--scaling-background-color", properties["--upcoming-background-color"]);
        root.style.setProperty("--upcoming-background-scale", "0");
    }, 300)


    root.style.setProperty("--upcoming-background-scale", properties["--upcoming-background-scale"]);
    root.style.setProperty("--upcoming-background-color", properties["--upcoming-background-color"]);
}
