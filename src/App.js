import './App.css';
import { useState } from 'react';
import Multiplication from './Multiplication';
import Addition from './Addition';
import Division from './Division'
import Soustraction from './Soustraction'

const CalculatorTabs = () => {
    const [activeTab, setActiveTab] = useState("multiplication");

    const renderContent = () => {
        switch (activeTab) {
            case "multiplication":
                return <Multiplication />;
            case "addition":
                return <Addition />;
            case "division":
                return <Division />
            case "soustraction":
                return <Soustraction/>;
            default:
                return <Multiplication />;
        }
    };

    return (
        <div>
            <div className="tab-buttons">
                <button onClick={() => setActiveTab("multiplication")}>Multiplication</button>
                <button onClick={() => setActiveTab("addition")}>Addition</button>
                <button onClick = {() => setActiveTab("division")}>Division</button>
                <button onClick = {() => setActiveTab("soustraction")}>Soustraction</button>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default CalculatorTabs;
