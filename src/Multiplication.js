import { useState } from 'react';
import suppsound from './assets/supprimer.mp3'
import multitog from './assets/multitog.mp3'
import multi from './assets/multipli.mp3'
import pol from './assets/pol.mp3'

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
        audioplaymultitog();
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
        if (Number(premierNombre) === 49 && Number(deuxiemeNombre) === 3){
            audioplaypol()
        }
        else {
            audioplaymulti()
        }

    };
    const audioplaypol = () => {
        const audiopol = new Audio(pol)
        audiopol.play()
    }
    const audioplaymulti = () => {
        const audiomulti = new Audio(multi)
        audiomulti.play()
    }
    const audioplaymultitog = () => {
        const audiomultitog = new Audio(multitog)
        audiomultitog.play()
    }
    const audioplaysupp = () => {
        const audiosupp = new Audio(suppsound);
        audiosupp.play();
    }
    const supprimer = (index) => {
        setHistorique(historique.filter((_, i) => i !== index));
        audioplaysupp();
    };

    const handlePremierNombreChange = (event) => {
        const value = event.target.value
        setPremierNombre(value === ""?"" : Number(value));
    };

    const handleDeuxiemeNombreChange = (event) => {
        const value = event.target.value
        setDeuxiemeNombre(value === ""?"" : Number(value));
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
            <button onClick={multiplier} 
            disabled={premierNombre === "" || deuxiemeNombre ===""} 
            >Multiplier</button>
            <button onClick={selectionnermulti}
            disabled={select.length=== 0} >Mutiplierlessss</button>
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
