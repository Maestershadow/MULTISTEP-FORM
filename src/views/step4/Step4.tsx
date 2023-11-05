import './Step4.css'

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

export default function Step4(props: { stepDataValue: StepsInterface; }) {
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

    function process() {
        const indexes = props.stepDataValue.third.selectedIndexes;
        const chargesArray = [
            props.stepDataValue.second.amount,
            ...addOnData.filter((value) => indexes.includes(value.index)).map((value) => props.stepDataValue.second.type === "monthly" ? value.charge : value['charge-year'])
        ]

        let totalCharges = 0;

        chargesArray.forEach((charge) => {
            const charges = charge;
            const numbers = charges.match(/\d+/g);
            let empt = '';
            if (numbers) {
                for (const num of numbers)
                    empt += `${num}`
            }
            totalCharges += parseInt(empt, 10)
        })


        return totalCharges
    }

    return (
        <form id='step4' className='form-main-content'>
            <div className='form-heading'>
                <h1>Finishing up</h1>
                <h2>Double-check everything looks OK before confirming.</h2>
            </div>

            <div className="summary">
                <div className="summary-values">
                    <div>
                        <h2>{`${props.stepDataValue.second.plan}(${props.stepDataValue.second.type})`}<span>Change</span></h2>
                        <p>{`${props.stepDataValue.second.amount}`}</p>
                    </div>
                    <div>
                        {props.stepDataValue.third.selectedIndexes.map((value) =>
                            <p>{addOnData[value].head}<span>{props.stepDataValue.second.type === "monthly" ? addOnData[value].charge : addOnData[value]['charge-year']}</span></p>
                        )}
                    </div>
                </div>
                <p>Total (per month)<span>+${process()}/{props.stepDataValue.second.type === "monthly" ? "mo" : "yr"}</span></p>
            </div>
        </form>
    );
}