import React, {useEffect, useState} from 'react';

function CreateHat(props) {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.fabric = fabric;
        data.style_name = style_name;
        data.color = color;
        data.picture_url = picture_url;
        data.location = location;

        const hatUrl = 'http://localhost:8090/api/hats/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(hatUrl, fetchConfig);
        if (response.ok) {
          const newHat = await response.json();
          console.log(newHat);
          setFabric('');
          setStyleName('');
          setColor('');
          setPictureUrl('');
          setLocation('');
          props.getHats();
        }
    }

  const [fabric, setFabric] = useState('');
  const handleFabricChange = (event) => {
    const value = event.target.value;
    setFabric(value);
  }

  const [style_name, setStyleName] = useState('');
  const handleStyleChange = (event) => {
    const value = event.target.value;
    setStyleName(value);
  }

  const [color, setColor] = useState('');
  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  }

  const [picture_url, setPictureUrl] = useState('');
  const handlePictureUrlChange = (event) => {
    const value = event.target.value;
    setPictureUrl(value);
  }

  const [location, setLocation] = useState('');
  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
  }

  const [locations, setLocations] = useState([]);
  const fetchData = async () => {

    const url = 'http://localhost:8100/api/locations/';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setLocations(data.locations);
    } else {
        console.error(response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Add a new hat!</h1>
        <form onSubmit={handleSubmit} id="create-conference-form">
          <div className="form-floating mb-3">
            <input onChange={handleFabricChange} value={fabric} placeholder="Fabric" required type="text" name="fabric" id="fabric" className="form-control" />
            <label htmlFor="fabric">Fabric</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleStyleChange} value={style_name} placeholder="Style Name" required type="text" name="style_name" id="style_name" className="form-control" />
            <label htmlFor="style_name">Style Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleColorChange} value={color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
            <label htmlFor="color">Color</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handlePictureUrlChange} value={picture_url} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
            <label htmlFor="picture_url">Picture URL</label>
          </div>
          <div className="mb-3">
            <select onChange={handleLocationChange} required name="locations" id="locations" className="form-select">
                <option value="">Choose a Location</option>
                {locations.map((location) => {
                    return (
                        <option key={location.id} value={location.href}>
                        {location.closet_name}
                        </option>
                    );
                })}
            </select>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default CreateHat;
