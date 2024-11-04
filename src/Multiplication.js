import { useState } from 'react';

const Multiplication = () => {
    const [premierNombre, setPremierNombre] = useState("");
    const [deuxiemeNombre, setDeuxiemeNombre] = useState("");
    const [produit, setProduit] = useState(null);
    const [historique, setHistorique] = useState([]);
    const [select, setselect] = useState([]);
    const selectionnermulti = () => {
        const resulat = select.reduce((acc, index) => {
            const partie = historique[index].split('=')[0].split('*');
        return acc * (parseFloat(partie[0]) * parseFloat(partie[1]));
        }, 1);
    setProduit(resulat)
    }
    const selection = (index) => {
        if (select.includes(index)){
            setselect(select.filter(i => i !== index));
        } 
        else {
            setselect([...select, index]);
        }

    } 
    const multiplier = () => {
        const resultat = premierNombre * deuxiemeNombre;
        setProduit(resultat);
        setHistorique([...historique, `${premierNombre} * ${deuxiemeNombre} = ${resultat}`]);
    };

    const supprimer = (index) => {
        setHistorique(historique.filter((_, i) => i !== index));
    };

    const handlePremierNombreChange = (event) => {
        setPremierNombre(Number(event.target.value));
    };

    const handleDeuxiemeNombreChange = (event) => {
        setDeuxiemeNombre(Number(event.target.value));
    };

    return (
        <div>
            <h2>Régale-toi Nabil</h2>
            <input
                type="number"
                placeholder="Ajouter le premier nombre à multiplier"
                value={premierNombre}
                onChange={handlePremierNombreChange}
            />
            <input
                type="number"
                placeholder="Ajouter le deuxième nombre à multiplier"
                value={deuxiemeNombre}
                onChange={handleDeuxiemeNombreChange}
            />
            <button onClick={multiplier}>Multiplier</button>
            <button onClick={selectionnermulti}>Mutiplierlessss</button>
            {produit !== null && <p>Le produit total est : {produit}</p>}
            <ul>
                {historique.map((item, index) => (
                    <li key={index}> 
                    <input type="checkbox" checked={select.includes(index)} onChange={()=> selection(index)} />
                        {item}
                        <button onClick={() => supprimer(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Multiplication;
