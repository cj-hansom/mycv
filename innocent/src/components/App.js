import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";




const darktheme = createTheme({
    palette: {
        mode: 'dark',
    },

});


const App = (props) => {

    return (
        <ThemeProvider theme={darktheme}>
            <CssBaseline />
            <div class="bg_image"
                style={{
                    backgroundImage: `url(${require("../asset/images/background.jpg")})`,
                    backgroundSize: "cover",
                    height: "150vh",
                    color: "#f5f5f5",
                    backgroundAttachment: "fixed",
                }}>
                <div>
                    <Header />
                </div>
                <div >

                    <div >
                        <About />
                    </div>

                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );

}

export default App;

