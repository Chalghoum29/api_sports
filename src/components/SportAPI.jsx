
import { useEffect, useState } from "react"
import axios from "axios"


const SportsApi = () => {

    const [sports, setSports] = useState([])
    const [loading, setLoading] = useState(true)
    const [soccer, setSoccer] = useState("")

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
            params: {Category: 'soccer'},
            headers: {
              'x-rapidapi-host': 'livescore6.p.rapidapi.com',
              'x-rapidapi-key': 'e80820237bmsh5b32410e7d81ef2p1a6594jsnea2291b51c03'
            }
          };
          
          const fetchdata = () =>
         { axios.request(options).then(function (response) {
             setSports(response.data.Stages);
          }).catch(function (error) {
              console.error(error);
          });}
          fetchdata()
          setLoading(false)
        }
          , [])
          return (
            <div>
                {
                    loading? <h1>loading...</h1>
                :
               <div>
                   {
                       sports.map(el=>
                        <div>
                            {el.Ccd}
                        </div>
                        )
                    }
               </div>
            }
            </div>
        )
    }
    
    export default SportsApi