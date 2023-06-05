function ListHats(props) {
  const deleteHat = async(hat) => {
    const hatUrl = `http://localhost:8090${hat.href}`;
    const fetchConfig = {
      method: "delete",
    }
    const response = await fetch(hatUrl, fetchConfig)
    if (response.ok) {
      props.getHats()
    }
  }
return (
    <div className='container'>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Style</th>
        <th>Fabric</th>
        <th>Color</th>
        <th>Href</th>
      </tr>
    </thead>
    <tbody>
    {props.hats.map(hat => {
      return (
        <tr key={hat.href}>
          <td>{ hat.style_name }</td>
          <td>{ hat.fabric }</td>
          <td>{ hat.color }</td>
          <td>{ hat.location }</td>
          <td><button onClick={() => deleteHat(hat)}>Delete</button></td>
        </tr>
      );
    })}
    </tbody>
  </table>
</div>
)
}

export default ListHats
