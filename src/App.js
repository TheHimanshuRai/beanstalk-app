import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = () => {
        const newData = {
            name: name,
            mobile: mobile
        };
        setData([...data, newData]);
        setName('');
        setMobile('');
    };

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
            <button onClick={handleSubmit}>Submit</button>

            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name} - {item.mobile}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
