import { useState } from 'react';
function ShoeForm() {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [picture, setPicture] = useState('');
    const [bin, setBin] = useState(''); //update later

    function handleChange( event ,callback) {
        const { target } = event;
        const { value } = target;
        callback(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {}
        data.name = name;
        data.color = color;
        data.manufacturer = manufacturer;
        data.picture_url = picture;
        data.bin = bin;

        const url = "http://localhost:8080/api/shoes/"
        const json = JSON.stringify(data)
        const fetchConfig = {
            method: "POST", body: json, headers: {'Content-Type': 'application/json'}
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            const newShoe = await response.json();
            console.log(newShoe);
            setName('');
            setColor('');
            setManufacturer('');
            setPicture('');
            setBin('');
        }
    }

    return (
        <div className='row'>
            <div className='offset-3 col-6'>
                <div className='shadow p-4 mt-4'>
                    <h1>Create a new shoe</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={(event) => handleChange(event, setName)} className="form-control" value={name} placeholder='name your shoe' required type="text" name="name" id="name"/>
                            <label html="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={(event) => handleChange(event, setColor)} className="form-control" value={color} placeholder='color' required type="text" name="color" id="color"/>
                            <label html="name">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={(event) => handleChange(event, setManufacturer)} className="form-control" value={manufacturer} placeholder='manufacturer' required type="text" name="manufacturer" id="manufacturer"/>
                            <label html="manufacturer">Manufacturer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={(event) => handleChange(event, setPicture)} className="form-control" value={picture} placeholder='picture url' required type="text" name="picture_url" id="picture_url"/>
                            <label html="picture_url">Picture url</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={(event) => handleChange(event, setBin)} className="form-control" value={bin} placeholder='bin' required type="text" name="bin" id="bin"/>
                            <label html="bin">Bin</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ShoeForm;
