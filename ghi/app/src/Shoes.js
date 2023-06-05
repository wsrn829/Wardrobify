import { useState } from 'react';

function Shoes(props) {
    console.log(props.shoes);

    const [shoes, setShoes] = useState(props.shoes);

    const deleteShoe = async (event, id) => {
        event.preventDefault();
        const url = `http://localhost:8080/api/shoes/${id}`;
        const response = await fetch(url, {method: "DELETE" });
        if (response.ok) {
          setShoes(shoes.filter((shoe) => shoe.id !== id));
        }
      };


    return (
    <div className="col">
        {shoes.map((shoe,index) => {
            return(
            <div key={index} className="card mb-3 shadow">
                <img src={shoe.picture_url} width="400" alt={shoe.name} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{shoe.name}</h5>
                    <h6 className="card-text text-muted">{shoe.color}</h6>
                    <h6 className="card-text text-muted">{shoe.manufacturer}</h6>
                    <h6 className="card-text text-muted">{shoe.bin.closet_name}</h6>
                    <button className="btn btn-danger" onClick={(event) => deleteShoe(event, shoe.id)}>Delete</button>
                </div>
            </div>);
        })}
    </div>
)}

export default Shoes;
