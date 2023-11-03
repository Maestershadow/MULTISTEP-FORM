import Step1 from './step1/Step1';

import { useState } from 'react';
import './MainView.css'
import Step2 from './step2/Step2';
import Step3 from './step3/Step3';
import Step4 from './step4/Step4';

interface StepProps {
    stepIndex: number;
  }

function Step({stepIndex}:StepProps)
{
    switch (stepIndex) {
        case 1:
            return <Step1 /> 
        case 2:
            return <Step2 /> 
        case 3:
            return <Step3 /> 
        case 4:
            return <Step4 /> 
        default:
            return <></>
           
    }    
}

export default function MainView() {
    const [currentPage, setCurrentPage] = useState(1);

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
                    {stepsData.map((data) => <div>
                        <div data-selected={`${currentPage}` === data.number}>
                            <p>{data.number}</p>
                        </div>
                        <div>
                            <h2>{data.step}</h2>
                            <h3>{data.name}</h3>
                        </div>

                    </div>)}
                </div>

                <div className="form">
                    <Step stepIndex={currentPage} />
                    <div className='form-buttons'>
                        <button data-visible={currentPage !== 1 ? "true":"false"} onClick={() => setCurrentPage(currentPage - 1)} >Go Back</button>
                        <button style={{backgroundColor: currentPage === 4?"var(--clr-purplish-blue)":""}} data-visible={currentPage !== 5 ? "true": "false"} onClick={() => setCurrentPage(currentPage + 1)} >{currentPage === 4 ? "Confirm": "Next Step"}</button>
                    </div>

                </div>
            </div>
        </main>
    );
}