import React from "react";
import MyCard from "./Card";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import css from "../asset/images/html.png";
import javaScript from "../asset/images/javaScript.png";
import node from "../asset/images/node.png";
import gitHub from "../asset/images/gitHub.png";
import firebase from "../asset/images/firebase.png";
import react from "../asset/images/react.png";
import android from "../asset/images/android.png";
import innocent5 from "../asset/images/innocent5.png"
import { display } from "@mui/system";










const About = () => {
    return (
        <div style={{

            width: "100%", height: "200vh",
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 0, 0, 0.4)',
                backgroundImage: `url(${require("../asset/images/innocent1.jpg")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 180%",
                height: "90vh",
                width: "100%",
                alignItems: "center",
                marginTop: 60,
                justifyContent: "center",
                display: "flex"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000000d9"
                }}>
                    <div style={{
                        width: "90%", height: "70%",
                        display: "flex", flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <div style={{ widt: "50%", height: "30%", lineHeight: 1 }}>

                            <h1 style={{
                                fontstyle: "bold", fontWeight: 500,
                                color: "white",
                            }}>Hey, i'm Innocent</h1>
                            <h1 style={{
                                fontstyle: "bold", fontWeight: 600,
                                fontSize: "300%",
                                color: "white",
                            }}>Full Stack</h1>
                            <h1 style={{
                                fontstyle: "bold", fontWeight: 600,
                                fontSize: "300%",
                                color: "#1287ff",
                            }}> Developer</h1>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="css" src={css} />
                                <Avatar alt="javaScript" src={javaScript} />
                                <Avatar alt="node" src={node} />
                                <Avatar alt="gitHub" src={gitHub} />
                                <Avatar alt="firebase" src={firebase} />
                                <Avatar alt="android" src={android} />
                                <Avatar alt="react" src={react} />
                            </Stack>
                        </div>
                        <MyCard>

                        </MyCard>
                    </div>
                </div>
            </div>


            <div style={{
                backgroundColor: "#1e1c19",
                width: "100%",
                height: "50%",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                lineHeight: 1.5,
                flexDirection: "column"
            }}>
                <Avatar alt="innocent uchenye" src={innocent5}
                    sx={{ width: 100, height: 100 }}
                />

                <h1 style={{
                    fontstyle: "bold", fontWeight: 600,
                    fontSize: "150%",
                    color: "white",
                }}>About Me</h1>
                <p style={{
                    width: "50%", textAlign: "center",
                }}>
                    I am Innocent Chijioke uchenye, but you
                    can call me cj-hansom. I am a confident, highly
                    organized, and dedicated individual who has very good communication
                    skills and can easily adapt to situations, i am excellent at decision
                    making and performing tasks efficiently with minimum supervision.
                    I am a result-driven and goal-oriented person who thinks proactively
                    and sees problems as a motivation and strives to find lasting solutions.

                </p>
            </div>

        </div>
    )
}

export default About