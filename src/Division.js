import { useState } from 'react';

const Division = () => {
    const [premierNombre, setPremierNombre] = useState("");
    const [deuxiemeNombre, setDeuxiemeNombre] = useState("");
    const [quotient, setQuotient] = useState(null);
    const [historique, setHistorique] = useState([]);
    const [select, setSelect] = useState([]);

    const selectionnerDivision = () => {
        const resultat = select.reduce((acc, index) => {
            const partie = historique[index].split('=')[0].split('/');
            return acc / (parseFloat(partie[0]) / parseFloat(partie[1]));
        }, 1);
        setQuotient(resultat);
    };

    const handlePremierNombreChange = (event) => {
        const value = event.target.value;
        setPremierNombre(value === "" ? "" : Number(value));
    };

    const handleDeuxiemeNombreChange = (event) => {
        const value = event.target.value;
        setDeuxiemeNombre(value === "" ? "" : Number(value));
    };

    const supprimer = (index) => {
        setHistorique(historique.filter((_, i) => i !== index));
        setSelect(select.filter(i => i !== index));
    };

    const diviser = () => {
        if (deuxiemeNombre === 0) {
            alert("Division par zéro impossible");
            return;
        }
        const resultat = Number(premierNombre) / Number(deuxiemeNombre);
        setQuotient(resultat);
        setHistorique([...historique, `${premierNombre} / ${deuxiemeNombre} = ${resultat}`]);
    };

    const selection = (index) => {
        if (select.includes(index)) {
            setSelect(select.filter(i => i !== index)); // Retirer l'élément si déjà sélectionné
        } else {
            setSelect([...select, index]); // Ajouter l'élément si non sélectionné
        }
    };

    return (
        <div>
            <h1>Division</h1>
            <input
                type="number"
                placeholder="Dividende"
                value={premierNombre}
                onChange={handlePremierNombreChange}
            />
            <input
                type="number"
                placeholder="Diviseur"
                value={deuxiemeNombre}
                onChange={handleDeuxiemeNombreChange}
            />
            <button
                onClick={diviser}
                disabled={premierNombre === "" || deuxiemeNombre === ""}
            >
                Diviser
            </button>
            <button
                onClick={selectionnerDivision}
                disabled={select.length === 0}
            >
                Diviser Ensemble
            </button>
            {quotient !== null && <p>Le quotient est : {quotient}</p>}
            <ul>
                {historique.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={select.includes(index)}
                            onChange={() => selection(index)}
                        />
                        <span>
                            {select.includes(index) ? `${select.indexOf(index) + 1} / ` : ""}
                        </span>
                        {item}
                        <button onClick={() => supprimer(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Division;

