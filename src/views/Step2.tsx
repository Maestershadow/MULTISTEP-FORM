export default function Step2() {
    const pageData = [
        {
            "icon": "../assets/images/icon-arcade.svg",
            "name": "Arcade",
            "monthly": "$9/mo",
            "yearly": "$90/yr",
        },
        {
            "icon": "../assets/images/icon-advanced.svg",
            "name": "Advanced",
            "monthly": "$12/mo",
            "yearly": "$120/yr",
        },
        {
            "icon": "../assets/images/icon-pro.svg",
            "name": "Pro",
            "monthly": "$15/mo",
            "yearly": "$150/yr",
        }
    ]

    return (
        <div className='plan-main-content'>
            <div className='plan-heading'>
                <h1>Select your plan</h1>
                <h2>You have the option of monthly or yearly billing</h2>
            </div>
            <div className='plans'>
                {pageData.map((data) =>
                    <div>
                        <img src={data.icon} alt={data.name} />
                        <div>
                            <h3>{data.name}</h3>
                            <p>{data.yearly}</p>
                            <p>2 months free</p>    
                        </div>                        
                    </div>
                )}
            </div>
        </div>
    );
}