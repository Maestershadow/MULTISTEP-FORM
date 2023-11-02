import './MainView.css'

export default function MainView() {
    const pageData = [
        {
            "field": "Name",
            "type": "text",
            "hint": "e.g. Stephen King"
        },
        {
            "field": "Email Address",
            "type": "email",
            "hint": "e.g. stephenking@lorem.com"
        },
        {
            "field": "Phone Number",
            "type": "tel",
            "hint": "e.g. +1 234 567 890"
        }
    ]

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
                        <div>
                            <p>{data.number}</p>
                        </div>
                        <div>
                            <h2>{data.step}</h2>
                            <h3>{data.name}</h3>
                        </div>

                    </div>)}
                </div>

                <form action="post" className="form">
                    <div className='form-heading'>
                        <h1>Personal info</h1>
                        <h2>Please provide your name, email address, and phone number</h2>
                    </div>
                    <div className='input-fields'>
                        {pageData.map((data) =>
                            <div>
                                <label htmlFor="name">{data.field}</label>
                                <input type={data.type} name="name" id="name" placeholder={data.hint} />
                            </div>
                        )}
                    </div>
                    <button className='form-button'>Next Step</button>
                </form>
            </div>
        </main>
    );
}