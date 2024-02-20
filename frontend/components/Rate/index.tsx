import styles from "./rate.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ReactStars from "react-rating-stars-component";
import {cookies, useCookies, CookiesProvider } from 'react-cookie';
import React, { useEffect, useState } from "react";
import { updateAverageRate } from "../../server/actions/AverageRate";

interface Props {
    isVisible: boolean;
    CloseRate: () => void;
    locationId: number;
}

const Rate: React.FC<Props> = (props) =>{
      const [cookies, setCookie] = useCookies(['rating']);
  const [rating, setRating] = useState(0);


    function onChange(newName) {
    let isCookieSet: boolean = cookies.rating ? true : false;
    // console.log(cookies.rating);
    // console.log(isCookieSet);
    updateAverageRate(props.locationId, newName, isCookieSet ? cookies.rating : 0, !isCookieSet) // 4th arg: isFirstRating
      .then((response) => console.log("updateAverageRate Response: " + response));
    setCookie('rating', newName, { path: '/' }, {expires: 100});
  }

    useEffect(() => {
      setRating(0);
    }, [props.isVisible]);

    return(
        /* bb is for putting background map so that popup would be more like popup*/
        <>
          <div onClick={() => {props.CloseRate(); setRating(-1); }}className = {`${styles.bb} ${props.isVisible ? styles.showbb: ''}`}></div>
          <div className = {`${styles.bg} ${props.isVisible ? styles.showbg: ''}`}>
            <h1> Rating </h1>
            <div className = {styles.star}>
              <CookiesProvider>
              {rating !== -1 ? (
                <ReactStars
                  activeColor = "#947F57"
                  count = {5}
                  size = {58}
                  onChange = {onChange}
                />
              ) : (
                <h1>Preparing...</h1>
              )}
              </CookiesProvider>
            </div>
          </div>
	    </>
    )
};

export default Rate;
