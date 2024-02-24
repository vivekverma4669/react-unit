let styles= {
  border :"2px solid black"
 }
 

function CountriesCard({id, country, population ,Rank})  {
  return (
    <tr data-testid="country-card"  style={{border :"2px solid black"}}>
      <td style={styles}>{id}</td>
      <td data-testid="country-card-name"  style={styles}>{country}</td>
      <td data-testid="country-card-population"  style={styles} >{population}</td>
      <td style={styles} >{Rank}</td>
    </tr>
  );
}

export default CountriesCard;
