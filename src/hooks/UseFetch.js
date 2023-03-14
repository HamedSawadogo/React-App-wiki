import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useFetch(url) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (! url) 
         return
      
      async function fetchData() {
         axios.get(url).then((res) => setData(res.data.results));
         // le loading est terminé
         setLoading(false);
      }
      setLoading(true);
      fetchData();
   }, [url]);

   return {data, loading};
}
