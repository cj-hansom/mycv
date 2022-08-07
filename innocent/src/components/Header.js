import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Avatar } from "@material-ui/core";
import innocent5 from "../asset/images/innocent5.png"






const Footer = (props) => {

    return (
        <div>
            <AppBar position="fixed" color={"secondary"}
                elevation={4}
                style={{ backgroundColor: "black" }}
            >
                <Toolbar>
                    <Avatar
                        alt="innocent uchenye"
                        src={innocent5}
                        sx={{ width: 90, height: 90 }}
                    />
                    <div style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end"
                    }} >
                        <ul style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            width: "35%",
                            alignContent: "flex-end",
                            listStyle: "none"
                        }}>
                            <li>About Me</li>
                            <li>Career</li>
                            <li>Projects</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                </Toolbar>
            </AppBar>

        </div>
    );

}

export default Footer;