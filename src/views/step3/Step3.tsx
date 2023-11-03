import './Step3.css'

export default function Step3() {
    const addOnData = [
        {
            "head": "Online service",
            "tail": "Access to multiplayer games",
            "charge": "+$1/mo",
            "charge-year": "",
        },
        {
            "head": "Local storage",
            "tail": "Extra 1TB of cloud save",
            "charge": "+$2/mo",
            "charge-year": "",
        },
        {
            "head": "Customizable profile",
            "tail": "Custom theme on your profile",
            "charge": "+$2/mo",
            "charge-year": "",
        },
    ]

    return (
        <div className='form-main-content'>
            <div className='form-heading'>
                <h1>Pick add-ons</h1>
                <h2>Add-ons help enhance your gaming experience.</h2>
            </div>

            <div className="addons">
                {
                    addOnData.map((data) => <div>
                        <input type="checkbox" />
                        <div>
                            <div>
                                <h3>{data.head}</h3>
                                <p>{data.tail}</p>
                            </div>

                            <p>{data.charge}</p>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
}