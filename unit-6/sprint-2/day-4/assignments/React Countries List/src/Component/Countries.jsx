import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesRow";
import Pagination from "./Pagination";
import { useEffect } from "react";
import{ useState } from "react";


let styles= {
 border :"2px solid black"
}

function Countries() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

   useEffect(  
    ()=>{
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10&orderBy=desc`
          );

          const data = await response.json();
          setCountries(data.data);
          console.log(data);
          setTotalPages(data.totalPages);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }}
        fetchData();
   }, [page]);



  return loading? <LoadingIndicator />:
  (
    <div>
      <h1 data-testid="countries-header"  style={{textAlign :"center"}}>Countries List</h1>
      <table  style={{width: "100%" , backgroundColor: "silver" ,border :"2px solid black", textAlign :"center" ,borderCollapse: "collapse"}}>
        <thead style={{backgroundColor: "crimson"}}>
          <tr>
            <th>ID</th>
            <th>COUNTRY</th>
            <th>POPULATION</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody data-testid="countries-container" style={styles}>

           {countries.map((country) => (
            <CountriesCard
              key={country.country}
              id={country.id}
              Rank={country.Rank}
              country={country.country}
              population={country.population}
            />
          ))}
       
        </tbody>
       </table>
       <div style={{width: "300px", alignContent: "center", margin :"auto"}}>
       <Pagination
            current={page}
            total={totalPages}
            onChange={(newPage) => setPage(newPage)}
        />
        </div>
    </div>
  );
}



export default Countries;
