import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCountry } from "../store/actions/countries";

import Loader from "../tools/loader";

const Country = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    if (params) {
      dispatch(getCountry(params.countryname));
    }
  }, [params]);

  return (
    <>
      {countries.loading || !countries.data ? (
        <Loader />
      ) : (
        <section className="country">
          <div className="country__imagebox">
            <img src={countries.data.flags.png} alt="" />
          </div>
          <div className="country__info">
            <span>Name:</span>
            <p>{countries.data.name.common}</p>
          </div>

          <div className="country__info">
            <span>Region:</span>
            <p>{countries.data.region}</p>
          </div>
          <div className="country__info">
            <span>Poulation:</span>
            <p>
              {new Intl.NumberFormat("en-US").format(countries.data.population)}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Country;
