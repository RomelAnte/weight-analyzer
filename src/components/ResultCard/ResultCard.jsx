import { useState } from "react";

import flacoImg from "../../assets/images/results/flaco.png";
import normalImg from "../../assets/images/results/normal.png";
import gordoImg from "../../assets/images/results/gordo.png";

import flacoAudio from "../../assets/audio/flaco/Bag Raiders - Shooting Stars.mp3";
import normalAudio from "../../assets/audio/normal/g3ox_em - GigaChad Theme (Phonk House Version).mp3";
import gordoAudio from "../../assets/audio/gordo/OYE GELDA ESCUCHATE ESTO [EPICENTER BASS].mp3";

import "./ResultCard.css";

export function ResultCard({ bmi }) {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return (
        <>            
            {loading ? (
                <div className="spinner"></div>
            ) : (
                <div className="card mt-4">
                    <div className="card-body">
                        { 
                            bmi < 18.5 ? (
                                <>
                                    <img src={flacoImg} alt="Flaco" className="mb-3 spin-zoom" style={{ width: "50%", margin: "0 auto", justifyContent: "center", display: "flex" }} />
                                    <audio src={flacoAudio} autoPlay />
                                </>
                            ) : bmi < 25 ? (
                                <>
                                    <img src={normalImg} alt="Normal" className="mb-3 spin-zoom" style={{ width: "50%", margin: "0 auto", justifyContent: "center", display: "flex" }} />
                                    <audio src={normalAudio} autoPlay />
                                </>
                            ) : (
                                <>
                                    <img src={gordoImg} alt="Gordo" className="mb-3 spin-zoom" style={{ width: "50%", margin: "0 auto", justifyContent: "center", display: "flex" }} />
                                    <audio src={gordoAudio} autoPlay />
                                </>
                            )
                        }
                    </div>
                </div>
            )}

        </>
    );
}