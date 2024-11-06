import { useState } from 'react';

const SoustractionL = () => {
    const [premierNombre, setPremierNombre] = useState("");
    const [deuxiemeNombre, setDeuxiemeNombre] = useState("");
    const [différence, setdifférence] = useState(null);
    const [historique, setHistorique] = useState([]);
    const [select, setSelect] = useState([]);


    const soustraire = () => {
        const res = parseFloat(premierNombre) - parseFloat(deuxiemeNombre);
        setdifférence(res);
        setHistorique([...historique, `${premierNombre} - ${deuxiemeNombre} = ${res}`]);
    };


    const selection = (index) => {
        if (select.includes(index)) {
            setSelect(select.filter(i => i !== index));
        } else {
            setSelect([...select, index]);
        }
    };

    const supprimer = (index) => {
        setHistorique(historique.filter((_, i) => i !== index));
    };

    const handlePremierNombreChange = (event) => {
        const value = event.target.value;
        setPremierNombre(value === "" ? "" : Number(value));
    };

    const handleDeuxiemeNombreChange = (event) => {
        const value = event.target.value;
        setDeuxiemeNombre(value === "" ? "" : Number(value));
    };
    const soustraireensemble = () => {
        const resultat = select.reduce((acc, index, i) => {
            const partie = historique[index].split('=')[0].split('-');
            const diff = parseFloat(partie[0]) - parseFloat(partie[1]);
            
            return i === 0 ? diff : acc - diff; // Utilise `diff` comme point de départ
        }, 0);
    
        setdifférence(resultat);
    };

    return (
        <div>
            <h1>Soustraction</h1>
            <input
                type="number"
                placeholder="Premier nombre"
                value={premierNombre}
                onChange={handlePremierNombreChange}
            />
            <input
                type="number"
                placeholder="Deuxième nombre"
                value={deuxiemeNombre}
                onChange={handleDeuxiemeNombreChange}
            />
            <button onClick={soustraireensemble} disabled={premierNombre === "" || deuxiemeNombre === ""}>
                Soustraire Emsemble
            </button>
            <button onClick={soustraire} disabled={premierNombre === "" || deuxiemeNombre === ""}>
                Soustraire
            </button>

            {différence !== null && <p>Résultat : {différence}</p>}

            <ul>
                {historique.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={select.includes(index)} onChange={() => selection(index)} />
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

export default SoustractionL;
