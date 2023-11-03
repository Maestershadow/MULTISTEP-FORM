

export default function Step1() {

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


    return (
        <div className='form-main-content'>
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
        </div>
    );
}