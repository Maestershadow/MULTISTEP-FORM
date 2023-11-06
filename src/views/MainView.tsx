import Step1 from './step1/Step1';

import { useState } from 'react';
import './MainView.css'
import Step2 from './step2/Step2';
import Step3 from './step3/Step3';
import Step4 from './step4/Step4';



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
    third: {
        selectedIndexes: Array<number>
    }
}

interface StepProps {
    stepIndex: number;
    callbackFunc: () => void;
    stepData: StepsInterface;
    updateStepsFunc: (step: string, values: unknown) => void;
    change: () => void;
}

function Step({ stepIndex, callbackFunc, stepData, updateStepsFunc, change }: StepProps) {
    switch (stepIndex) {
        case 1:
            return <Step1 stepDataValue={stepData} update={updateStepsFunc} callback={callbackFunc} />
        case 2:
            return <Step2 callback={callbackFunc} stepDataValue={stepData} update={updateStepsFunc} />
        case 3:
            return <Step3 update={updateStepsFunc} callback={callbackFunc} stepDataValue={stepData} />
        case 4:
            return <Step4 change={change} callback={callbackFunc} stepDataValue={stepData} />
        default:
            return <div className='thanks'>
                <img src="/images/icon-thank-you.svg" alt="thanks" />
                <h2>Thank you!</h2>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform.
                    If you ever beed support, please feel free to email us at support@loremgaming.com
                </p>
            </div>
    }
}

interface First {

    "username": string,
    "email": string,
    "phone": string,

}

interface Second {
    "index": number,
    "plan": string,
    "amount": string,
    "type": string

}

interface Third {
    "selectedIndexes": Array<number>
}


export default function MainView() {
    const [currentPage, setCurrentPage] = useState(1);
    const [allStepsData, setAllStepsData] = useState<StepsInterface>(
        {
            "first": {
                "username": "",
                "email": "",
                "phone": "",
            },
            "second": {
                "index": 0,
                "plan": "",
                "amount": "",
                "type": ""
            },
            "third": {
                "selectedIndexes": []
            }
        }
    );

    function updateSteps(step: string, values: unknown) {
        const stepData: StepsInterface = {
            "first": {
                "username": allStepsData.first.username,
                "email": allStepsData.first.email,
                "phone": allStepsData.first.phone,
            },
            "second": {
                "index": allStepsData.second.index,
                "plan": allStepsData.second.plan,
                "amount": allStepsData.second.amount,
                "type": allStepsData.second.type
            },
            "third":
            {
                "selectedIndexes": allStepsData.third.selectedIndexes
            }
        };
        if (step === "first") {
            stepData.first = values as First;
        }
        else if(step === "second")
        {
            stepData.second = values as Second;
        }
        else if(step === "third")
        {
            stepData.third = values as Third
        }


        setAllStepsData(stepData);
    }

    const stepsData = [
        {
            "number": "1",
            "step": "STEP 1",
            "name": "YOUR INFO"
        },

        {
            "number": "2",
            "step": "STEP 2",
            "name": "SELECT PLAN"
        },

        {
            "number": "3",
            "step": "STEP 3",
            "name": "ADD-ONS"
        },
        {
            "number": "4",
            "step": "STEP 4",
            "name": "SUMMARY"
        },
    ]


    return (
        <main>
            <div className="form-card">
                <div className="steps">
                    {stepsData.map((data) =>
                        <div key={data.number}>
                            <div data-selected={`${currentPage}` === data.number || (currentPage === 5 && data.number === "4")}>
                                <p>{data.number}</p>
                            </div>
                            <div>
                                <h2>{data.step}</h2>
                                <h3>{data.name}</h3>
                            </div>

                        </div>)}
                </div>

                <div className="form">
                    <div className='form-hover'>

                        <Step
                            change={() => setCurrentPage(2)}
                            callbackFunc={() => setCurrentPage(currentPage + 1)}
                            stepIndex={currentPage}
                            stepData={allStepsData}
                            updateStepsFunc={(step, values) => updateSteps(step, values)}
                        />
                    </div>

                    {
                        currentPage !== 5 &&
                        <div className='form-buttons'>
                            <button data-visible={currentPage !== 1 ? "true" : "false"} onClick={() => setCurrentPage(currentPage - 1)} >Go Back</button>
                            <button form={`step${currentPage}`} type='submit' style={{ backgroundColor: currentPage === 4 ? "var(--clr-purplish-blue)" : "" }} data-visible={currentPage !== 5 ? "true" : "false"}  >{currentPage === 4 ? "Confirm" : "Next Step"}</button>
                        </div>
                    }

                </div>
            </div>
        </main>
    );
}