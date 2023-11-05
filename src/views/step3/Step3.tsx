import { useState } from 'react';
import './Step3.css'


interface StepsInterface {
    first: {
        username: string,
        email: string,
        phone: string
    },
    second: {
        index: number,
        plan: string,
        amount: string,
        type: string
    },
    third:
    {
        selectedIndexes: Array<number>
    }
}

export default function Step3(props: { stepDataValue: StepsInterface; update: (arg0: string, arg1: { selectedIndexes: number[]; }) => void; callback: () => void }) {
    const addOnData = [
        {
            "index": 0,
            "head": "Online service",
            "tail": "Access to multiplayer games",
            "charge": "+$1/mo",
            "charge-year": "+$10/yr",
        },
        {
            "index": 1,
            "head": "Local storage",
            "tail": "Extra 1TB of cloud save",
            "charge": "+$2/mo",
            "charge-year": "+$20/yr",
        },
        {
            "index": 2,
            "head": "Customizable profile",
            "tail": "Custom theme on your profile",
            "charge": "+$2/mo",
            "charge-year": "+$20/yr",
        },
    ]

    const [selectedIndexes, setSelectedIndexes] = useState<Array<number>>(props.stepDataValue.third.selectedIndexes);
    const handleCheckboxChange = (index: number) => {
        if (selectedIndexes.includes(index))
            setSelectedIndexes(selectedIndexes.filter((value) => value !== index));
        else
            setSelectedIndexes([...selectedIndexes, index])
    }


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const subData = {
            "selectedIndexes": selectedIndexes
        }
        props.update("third", subData);
        props.callback();
    }

    
    return (
        <form id='step3' onSubmit={handleSubmit} className='form-main-content'>
            <div className='form-heading'>
                <h1>Pick add-ons</h1>
                <h2>Add-ons help enhance your gaming experience.</h2>
            </div>

            <div className="addons">
                {
                    addOnData.map((data) => <div data-selected={selectedIndexes.includes(data.index)}>
                        <input onChange={() => handleCheckboxChange(data.index)} checked={selectedIndexes.includes(data.index)} type="checkbox" />
                        <div>
                            <div>
                                <h3>{data.head}</h3>
                                <p>{data.tail}</p>
                            </div>

                            <p>{props.stepDataValue.second.type === "monthly" ? data.charge : data['charge-year']}</p>
                        </div>

                    </div>)
                }
            </div>
        </form>
    );
}