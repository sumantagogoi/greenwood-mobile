import { ThemeProvider, createTheme } from '@mui/material/styles';
import SavoyRegular from '../assets/Savoy_Regular.ttf';
import SavoyBold from '../assets/Savoy_Regular.ttf';
import OpenSansRegular from '../assets/Savoy_Regular.ttf';
import OpenSansBold from '../assets/Savoy_Regular.ttf';

const theme = createTheme({
    typography: {
      fontFamily: 'Savoy Regular, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Savoy Regular';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('SavoyRegular'), local('SavoyRegular'), url(${SavoyRegular}) format('TrueType');           
          }
        `,
      },
    },
  },
//   typography: {
//     fontFamily: 'Avenir Book, Arial',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Avenir Book';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: local('AvenirBook'), local('AvenirBook'), url(${AvenirBook}) format('TrueType');           
//         }
//       `,
//     },
//   },
// },
  
  );

  export default theme