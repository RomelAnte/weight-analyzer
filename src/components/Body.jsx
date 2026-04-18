import { useState } from "react";
import { ResultCard } from "./ResultCard/ResultCard";

export function Body() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        disableButton();

        if (!weight || !height) {
            alert("Por favor, ingrese valores válidos");
            return;
        }

        if (height <= 0 || weight <= 0) {
            alert("La altura y el peso deben ser mayores que cero");
            return;
        }

        if (height > 3) {
            alert("La altura debe ser menor o igual a 3 metros");
            return;
        }

        const bmi = weight / (height * height);

        setResult({ bmi});
    };

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <label htmlFor="weightInput" className="form-label">Ingrese su peso:</label>
                    <input 
                        type="number" 
                        className="form-control"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        />
                    <label htmlFor="weightInput" className="form-label mt-3">
                        Ingrese su altura (en metros):
                    </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="heightInput" 
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <button className="btn btn-primary mt-3" onClick={handleCalculate}>
                        Calcular
                    </button>

                    <button className="btn btn-secondary mt-3 ms-2" onClick={() => window.location.reload()}>
                        Reiniciar
                    </button>
                </div>
            </div>
            {
                result && <ResultCard bmi={result.bmi} />
            }
        </>
    )
}

function disableButton() {
    const button = document.querySelector("button");
    button.disabled = true;
}

