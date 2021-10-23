import Axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BaseURL } from "../../Constants/common.constant";
import { isLoading } from "../../Redux/actions/commonAction";

function useFetch() {
  const dispatch = useDispatch();
  const [res, setRes] = useState();

  async function fetchData(params, data) {
    let options;

    if (data !== undefined) {
      console.log("datadatadata00", data);
      options = {
        method: "GET",
        url: BaseURL + "/" + data,
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key":
            "fae002980emsh9d104d1d58e0965p1cf8fajsnc813ba4fb8cd",
        },
      };
    } else if (params !== undefined) {
      options = {
        method: "GET",
        url: BaseURL,
        params: params,
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key":
            "fae002980emsh9d104d1d58e0965p1cf8fajsnc813ba4fb8cd",
        },
      };
    }
    try {
      dispatch(isLoading(true));
      let responce = await Axios.request(options);
      console.log("responce", responce, responce.data.results);
      setRes(responce?.data.results);
      dispatch(isLoading(false));
    } catch (error) {
      console.log("error", error);
      setRes(error);
      dispatch(isLoading(false));
    }

    // if (type == "get") {
    //   try {
    //     dispatch(isLoading(true));
    //     let responce = await Axios.request(options);
    //     console.log("responce", responce, responce.data.data);
    //     setRes(responce?.data.data);
    //     dispatch(isLoading(false));
    //   } catch (error) {
    //     setRes(error);
    //     dispatch(isLoading(false));
    //   }
    // } else if (type == "post") {
    //   try {
    //     dispatch(isLoading(true));
    //     let responce = await Axios.post(url, data);
    //     console.log("responce", responce);
    //     setRes(responce.data);
    //     dispatch(isLoading(false));
    //   } catch (error) {
    //     setRes(error);
    //     dispatch(isLoading(false));
    //   }
    // }
  }
  let clearRes = () => {
    setRes([]);
  };
  return [
    res,
    () => clearRes(),
    (params, data) => {
      fetchData(params, data);
    },
  ];
}
export default useFetch;

//   let res = useFetch(getProductForMen, "get");
