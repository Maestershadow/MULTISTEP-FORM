import './Step4.css'

export default function Step4() {
    return (
        <div className='form-main-content'>
            <div className='form-heading'>
                <h1>Finishing up</h1>
                <h2>Double-check everything looks OK before confirming.</h2>
            </div>

            <div className="summary">
                <div className="summary-values">
                    <div>
                        <h2>Arcade(Monthly)<span>Change</span></h2>
                        <p>$9/mo</p>
                    </div>
                    <div>
                        <p>Online service <span>+$1/mo</span></p>
                        <p>Larger storage <span>+$2/mo</span></p>
                    </div>
                </div>
                <p>Total (per month)<span>+$12/mo</span></p>    
            </div>
        </div>
    );
}