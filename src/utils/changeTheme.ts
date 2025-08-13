export enum ThemeType {
    light,
    dark,
}

const themeVariations: object = {

    [ThemeType.light]: {
        /* Text Colors */
        "--primary-text-color": "black",
        "--inverted-text-color": "white",

        /*  background colors */
        "--primary-background-color": "white",
        "--inverted-background-color": "black",
        "--btn-hovered-background-color": "green",
        "--header-background": "white",

        /* initial scales */
        "--background-scale": 0,
        "--card_background_scale": 0,
        "__card_border_scale": 0,

        /* borders */
        "--border-color": "black",
        "--icon-color": "black",

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

        /* initial scales */
        "--background-scale": 1,
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


    root.style.setProperty("--background-scale", "1");

}

export const removeTheme = () => {

    const root = document.documentElement;
    root.style.setProperty("color-scheme", "none");
    root.style.setProperty("--border-color", "black");
    root.style.setProperty("--header-background", "white");
    root.style.setProperty("--primary-text-color", "black");
    root.style.setProperty("--scale", "0");

}