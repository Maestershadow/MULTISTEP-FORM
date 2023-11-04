import { useState } from 'react';
import './Step2.css'

export default function Step2() {


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

    const [isChecked,setIsChecked] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
    }

    return (
        <div className='form-main-content'>
            <div className='form-heading'>
                <h1>Select your plan</h1>
                <h2>You have the option of monthly or yearly billing</h2>
            </div>
            <div className='plans'>
                {pageData.map((data) =>
                    <div onClick={()=>setSelectedIndex(data.index)} data-selected={data.index === selectedIndex}>
                        <img src={data.icon} alt={data.name} />
                        <div>
                            <h3>{data.name}</h3>
                            <p>{ isChecked ? data.yearly : data.monthly}</p>
                            {isChecked && <p style={{color: "var(--clr-marine-blue)"}}>2 months free</p>}
                        </div>
                    </div>
                )}
            </div>
            <div className="mon-yrl">
                <p data-selected={isChecked}>Monthly</p>
                <input onChange={handleCheckboxChange} type="checkbox" id="check" className="toggle" />
                <label htmlFor="check"></label>
                <p data-selected={isChecked}>Yearly</p>
            </div>
        </div>
    );
}