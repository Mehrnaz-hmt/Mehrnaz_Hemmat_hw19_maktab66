import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Details from "../../component/Country";

const Country = () => {
  const params = useParams();
  let [data, setData] = useState(null);
  let [borders, setBorders] = useState([]);

  const fetchBorderCountries = (list) => {
    let countries = list.join(",");
    axios
      .get(`https://restcountries.com/v2/alpha?codes=${countries}`)
      .then((res) => {
        setBorders(res.data);
      });
  };

  useEffect(() => {
    let { id } = params;
    if (id) {
      axios.get(`https://restcountries.com/v2/alpha/${id}`).then((res) => {
        setData(res.data);
        fetchBorderCountries(res.data.borders);
      });
    }
  }, [params]);

  return data !== null ? <Details data={data} borderCountries={borders} /> : "";
};

export default Country;
