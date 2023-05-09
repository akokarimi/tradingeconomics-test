import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getIndicators } from "../store/actions/indicators";

import Loader from "../tools/loader";

const Indicators = () => {
  const indicators = useSelector((state) => state.indicators);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    if (params) {
      dispatch(getIndicators(params.countryname));
    }
  }, [params]);

  return (
    <>
      {indicators.loading || !indicators.data ? (
        <Loader />
      ) : (
        <section className="country">
          <div className="country__info">
            <span>Category:</span>
            <p>{indicators.data.Category}</p>
          </div>

          <div className="country__info">
            <span>Latest Value:</span>
            <p>{indicators.data.LatestValue}</p>
          </div>
          <div className="country__info">
            <span>Date:</span>
            <p>
              {new Intl.DateTimeFormat("en-US").format(
                new Date(indicators.data.LatestValueDate)
              )}
            </p>
          </div>
          <div className="country__info">
            <span>Previous Value:</span>
            <p>{indicators.data.PreviousValue}</p>
          </div>
          <div className="country__info">
            <span>Date:</span>
            <p>
              {new Intl.DateTimeFormat("en-US").format(
                new Date(indicators.data.PreviousValueDate)
              )}
            </p>
          </div>
          <div className="country__info">
            <span>Source:</span>
            <p>{indicators.data.Source}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Indicators;
