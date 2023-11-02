import Step1 from './Step1';

import { useState } from 'react';
import './MainView.css'
import Step2 from './Step2';

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
                   {
                    currentPage === 1 ? <Step1 />: <Step2 />
                   } 
                    <div className='form-buttons'>
                        <button onClick={() => setCurrentPage(currentPage + 1)} >Go Back</button>
                        <button onClick={() => setCurrentPage(currentPage + 1)} >Next Step</button>
                    </div>

                </div>
            </div>
        </main>
    );
}