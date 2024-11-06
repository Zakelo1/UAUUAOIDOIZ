import { useState } from 'react';

const Addition = () => {
    const [premierNombre, setPremierNombre] = useState("");
    const [deuxiemeNombre, setDeuxiemeNombre] = useState("");
    const [somme, setSomme] = useState(null);
    const [historique, setHistorique] = useState([]);
    const [select, setSelect] = useState([]);

    const selectionnermulti = () => {
        const resultat = select.reduce((acc, index) => {
            const partie = historique[index].split('=')[0].split('+');
            return acc + (parseFloat(partie[0]) + parseFloat(partie[1]));
        }, 0); // Valeur initiale pour l'accumulateur
        setSomme(resultat);
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
    };

    const additionner = () => {
        const resultat = Number(premierNombre) + Number(deuxiemeNombre); // Conversion en nombre pour éviter la concaténation
        setSomme(resultat);
        setHistorique([...historique, `${premierNombre} + ${deuxiemeNombre} = ${resultat}`]);
    };

    const selection = (index) => {
        if (select.includes(index)) {
            setSelect(select.filter(i => i !== index));
        } else {
            setSelect([...select, index]);
        }
    };

    return (
        <div>
            <h1>Addition</h1>
            <input
                type="number"
                placeholder="Nombre 1"
                value={premierNombre}
                onChange={handlePremierNombreChange}
            />
            <input
                type="number"
                placeholder="Nombre 2"
                value={deuxiemeNombre}
                onChange={handleDeuxiemeNombreChange}
            />
            <button
                onClick={additionner}
                disabled={premierNombre === "" || deuxiemeNombre === ""}
            >
                Additionner
            </button>
            <button
                onClick={selectionnermulti}
                disabled={select.length === 0}
            >
                Additionner Ensemble
            </button>
            {somme !== null && <p>Le somme total est : {somme}</p>}
            <ul>
                {historique.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={select.includes(index)}
                            onChange={() => selection(index)}
                        />
                        {item}
                        <button onClick={() => supprimer(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Addition;
