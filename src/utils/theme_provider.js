// Theme Colors
const primaryBlue = '#336CB6';
const primaryGreen = '#079B4B';
const darkBlack = '#060606';
const lightBlack = '#292929';
const darkGray = '#605F5F';
const mediumGray = '#A6A6A6';
const lightGray = '#E7E7E7';

// Themes
const light = {
    bg: 'white',
    bg2: lightBlack
}

const dark = {
    bg: lightBlack,
}


 export const theme = mode => mode === 'light' ? light : dark;