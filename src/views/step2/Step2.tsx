import { useState } from 'react';
import './Step2.css'


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


export default function Step2(props: {callback:()=>void; stepDataValue: StepsInterface; update: (arg0: string, arg1: { index: number; plan: string; amount: string; type: string; }) => void; }) {


    const pageData = [
        {
            "index": 0,
            "icon": "/images/icon-arcade.svg",
            "name": "Arcade",
            "monthly": "$9/mo",
            "yearly": "$90/yr",
        },
        {
            "index": 1,
            "icon": "/images/icon-advanced.svg",
            "name": "Advanced",
            "monthly": "$12/mo",
            "yearly": "$120/yr",
        },
        {
            "index": 2,
            "icon": "/images/icon-pro.svg",
            "name": "Pro",
            "monthly": "$15/mo",
            "yearly": "$150/yr",
        }
    ]

    const [isChecked, setIsChecked] = useState(props.stepDataValue.second.type === "yearly");
    const [selectedIndex, setSelectedIndex] = useState(props.stepDataValue.second.index);

    const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked(event.target.checked)
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const subData = {
            "index": selectedIndex,
            "plan": pageData[selectedIndex].name,
            "amount": isChecked ? pageData[selectedIndex].yearly : pageData[selectedIndex].monthly,
            "type": isChecked ? "yearly" : "monthly"
        }

        props.update("second", subData);
        props.callback();

    }

    return (
        <form onSubmit={handleSubmit} id='step2' className='form-main-content'>
            <div className='form-heading'>
                <h1>Select your plan</h1>
                <h2>You have the option of monthly or yearly billing</h2>
            </div>
            <div className='plans'>
                {pageData.map((data) =>
                    <div key={data.name} onClick={() => setSelectedIndex(data.index)} data-selected={data.index === selectedIndex}>
                        <img src={data.icon} alt={data.name} />
                        <div>
                            <h3>{data.name}</h3>
                            <p>{isChecked ? data.yearly : data.monthly}</p>
                            {isChecked && <p style={{ color: "var(--clr-marine-blue)" }}>2 months free</p>}
                        </div>
                    </div>
                )}
            </div>
            <div className="mon-yrl">
                <p data-selected={isChecked}>Monthly</p>
                <input checked={isChecked} onChange={handleCheckboxChange} type="checkbox" id="check" className="toggle" />
                <label htmlFor="check"></label>
                <p data-selected={isChecked}>Yearly</p>
            </div>
        </form>
    );
}