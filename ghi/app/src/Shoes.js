function Shoes(props) {
    console.log(props);

    return(
    <div className="col">
        {props.shoes.map((shoe,index) => {
            return(
            <div key={index}className="card mb-3 shadow">
                <img src={shoe.picture_url} width="400" alt={shoe.name} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{shoe.name}</h5>
                    <h6 className="card-text text-muted">{shoe.color}</h6>
                    <h6 className="card-text text-muted">{shoe.manufacturer}</h6>
                    <h6 className="card-text text-muted">{shoe.bin}</h6>
                </div>
            </div>)})}
    </div>
)}

export default Shoes;
