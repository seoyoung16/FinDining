import { NextPage } from "next";
import Popup from "../../components/Popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils, faX, faLocationDot, faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import {faStar as star} from '@fortawesome/free-regular-svg-icons'
import {faStarHalfStroke} from '@fortawesome/free-regular-svg-icons'
import styles from "./Popup.module.scss";
import { useCallback, useEffect, useState } from "react";
import MenuBoard from "../MenuBoard"
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles2 from "../../components/MenuBoard/MenuBoard.module.scss"
import ReactStars from "react-rating-stars-component";
import { DataProps } from "../../pages/map/index";
import { getAverageRate } from "../../server/actions/AverageRate";

interface Props {
  locationId: number;
  isVisible: boolean;
  closePopup: () => void;
  data: Record<number, DataProps>;
  OpenRate: (locationId: number) => void;
}

interface MenuItem{
  Category: boolean;
  Menu: string;
  Price: string;
}

interface Food{
  Menu: string;
  priceone: string;
  pricetwo: string;
  pricethree: string;
}
interface Food extends Array<Food>{}

interface DisplayHours {
  days: string;
  hours: string;
}

interface Hours {
  open: string;
  close: string;
}

interface WeeklyHours {
  Monday: Hours | string;
  Tuesday: Hours | string;
  Wednesday: Hours | string;
  Thursday: Hours | string;
  Friday: Hours | string;
  Saturday: Hours | string;
  Sunday: Hours | string;
}

interface Address {
  lineOne: string;
  lineTwo: string;
}



const Pop: NextPage<Props, Food> = (props, food) => {
  const [popmenu, setBoard] = useState(0);
  const [hoursToDisplay, setHoursToDisplay] = useState([]);
  const empty: Address = { lineOne: "", lineTwo: "" };
  const [addressToDisplay, setAddressToDisplay] = useState(empty);
  const [imgUrl, setImgUrl] = useState(``);
  const [toggle, setToggle] = useState(0);
  const [i, seti] = useState(0);
  const [avgRate, setAvgRate] = useState("-1");
  const [list, setList] = useState([]);

  const convertToStdTime = (military: string): string => {
    let hour, min;
    if (military.length == 3) { // ex: 700
      hour = parseInt(military[0]);
      min = parseInt(military.substring(1, 3), 10);
    } else if (military.length == 4) { // ex: 1400
      hour = parseInt(military.substring(0, 2));
      min = parseInt(military.substring(2, 4), 10);
    }

    let isAM = true;
    if (hour >= 12 && hour < 24) isAM = false;
    if (hour > 12) hour -= 12;

    return hour + ":" + (min <= 9 ? "0" : "") + min + (isAM ? "AM" : "PM");
  }



  const formatTime = (raw: string) => {
    const times: string[] = raw.split(",");
    const open: string = convertToStdTime(times[0]);
    const close: string = convertToStdTime(times[1]);
    return open + " - " + close;
  }

  const coalesce = (hours: Hours | string, value: string, coalesced: Record<string, string[]>) => {
    if (typeof(hours) === "string") {
      if (!("CLOSED" in coalesced)) coalesced["CLOSED"] = [];
      coalesced["CLOSED"].push(value);
    } else {
      if (!(hours.open + "," + hours.close in coalesced)) coalesced[hours.open + "," + hours.close] = [];
      coalesced[hours.open + "," + hours.close].push(value);
    }
    return coalesced;
  }

  const coalesceAll = (hours: WeeklyHours) => {
    let coalesced: Record<string, string[]> = {};
    coalesced = coalesce(hours.Monday, "MON", coalesced);
    coalesced = coalesce(hours.Tuesday, "TUE", coalesced);
    coalesced = coalesce(hours.Wednesday, "WED", coalesced);
    coalesced = coalesce(hours.Thursday, "THU", coalesced);
    coalesced = coalesce(hours.Friday, "FRI", coalesced);
    coalesced = coalesce(hours.Saturday, "SAT", coalesced);
    coalesced = coalesce(hours.Sunday, "SUN", coalesced);

    // coalesced format at this point: key=>"openTime,closeTime" | value=>['MON','TUE','FRI',...]

    let preHoursToDisplay: Array<DisplayHours> = [];
    let coalescedStr, timeStr: string;
    let prev: string;
    let isDash: boolean;
    let isSame: boolean;
    for (const key in coalesced) {
      for (let i = 0; i < coalesced[key].length; i++) {
        if (i == 0) {
          coalescedStr = coalesced[key][i];
          prev = coalesced[key][i];
          isSame = true;
        } else {
          if (
            (coalesced[key][i] === "TUE" && prev === "MON")
            || (coalesced[key][i] === "WED" && prev === "TUE")
            || (coalesced[key][i] === "THU" && prev === "WED")
            || (coalesced[key][i] === "FRI" && prev === "THU")
            || (coalesced[key][i] === "SAT" && prev === "FRI")
            || (coalesced[key][i] === "SUN" && prev === "SAT")
          ) {
            // Is consecutive, so should use dash.
            isDash = true;
            prev = coalesced[key][i];
            isSame = false;

            if (i == coalesced[key].length-1) {
              coalescedStr += "-" + prev;
            }
          } else {
            // Not consecutive, so should use comma.
            if (isDash && !isSame) coalescedStr += "-" + prev;
            isDash = false;
            coalescedStr += ", " + coalesced[key][i];
            prev = coalesced[key][i];
            isSame = true;
          }
        }
      }

      timeStr = (key === "CLOSED") ? "CLOSED" : formatTime(key);
      preHoursToDisplay.push({ days: coalescedStr, hours: timeStr });
    }

    setHoursToDisplay(preHoursToDisplay);
  }
  
  const category: Food = [
    // {Menu: (((props.data[props.locationId].menu).length>i) ? props.data[props.locationId].menu[i].category : ""), priceone: "", pricetwo: "", pricethree: (((props.data[props.locationId].menu).length>i) ? "Price" : "")}
  ]

  const menus: Food = [
    // {Menu: (((props.data[props.locationId].menu).length>i) ? props.data[props.locationId].menu[i].name : ""), priceone: "", pricetwo: (((props.data[props.locationId].menu).length>i) ? "" : "We don't support"), pricethree: (((props.data[props.locationId].menu).length>i) ? props.data[props.locationId].menu[i].price : "menu for this store")}
  ]

  useEffect(() => {
    let hours: WeeklyHours = {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: ""
    };
    // Convert data hours from ['openTime','closeTime'] to {open: 'openTime', close: 'closeTime'} for above coalesce operations.
    const dataHours: Record<string, string | string[]> = props.data[props.locationId].hours;
    for (const key in dataHours) {
      if (typeof(dataHours[key]) === "string") {
        hours[key] = dataHours[key];
      } else {
        hours[key] = {
          open: dataHours[key][0],
          close: dataHours[key][1]
        }
      }
    }
    coalesceAll(hours);
    
    setAddressToDisplay({ lineOne: props.data[props.locationId].address, lineTwo: "Knoxville, TN 37916" }); // 1502 Cumberland Ave | Knoxville, TN 37916
    setImgUrl(props.data[props.locationId].image);
    
    setAvgRate("-1");
    getAverageRate(props.locationId)
      .then((response) => { setAvgRate(response ? response : "-1") })
    var dup: Array<string> = []
    var dup2: Array<MenuItem> = [];
    for(const key in props.data[props.locationId].menu){
      if(dup[dup.length-1]!=props.data[props.locationId].menu[key].category){
        const DupProps: MenuItem = {
          Category: true,
          Menu: props.data[props.locationId].menu[key].category,
          Price: ""
        }
        dup2.push(DupProps);
        dup.push(props.data[props.locationId].menu[key].category);
      }
      const MenuProps: MenuItem = {
        Category: false,
        Menu: props.data[props.locationId].menu[key].name,
        Price: props.data[props.locationId].menu[key].price
      }
      dup2.push(MenuProps);
    }
    setList(dup2);
  }, [props.isVisible]);

  useEffect(() => {
    menus = [
      // {Menu: "ChickenBurger", priceone: "", pricetwo: (toggle ? "$ 12.34" : "$9.34"), pricethree: "$ 56.78"},
      // {Menu: "SpicyBurger", priceone: "", pricetwo: "$ 56.78", pricethree: "$ 90.12"},
      // {Menu: "SpicyBurger", priceone: "", pricetwo: "$ 56.78", pricethree: "$ 90.12"}
    ]
  }, [toggle]);

  return (
    /* bb is for putting background map so that popup would be more like popup*/
    <>
      <div onClick={() => {props.closePopup(); setBoard(0); setToggle(0)}} className = {`${styles.bb} ${props.isVisible ? styles.showBB : ''}`} ></div>
      <div className = {`${styles.back} ${props.isVisible ? styles.showBack : ''}`}>
        {!popmenu?(
        <>
        <div>
          {/* <a href="http://localhost:3000/map" className={styles.wrap}><FontAwesomeIcon icon={faLocationDot} /></a> */}
          <a className={styles.wrap} onClick={() => { setBoard((prevState) => (prevState ? 0 : 1)) }}><FontAwesomeIcon icon={faUtensils} /></a>
          <a className = {styles.store}> {props.data[props.locationId].name} </a>
          <a onClick={() => {props.closePopup(); setBoard(0); setToggle(0)}} className={`${styles.wrap} ${styles.wrapRight}`}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></a>
        </div>

        <div style={{backgroundImage: `url(${imgUrl})`}} className = {styles.img}></div>
        <div className = {styles.opcl}><FontAwesomeIcon icon={faClock} /> OPEN / CLOSE </div>
	  <div className = {styles.star}>
	    {avgRate !== "-1" ? (
        <ReactStars
          activeColor = "#947F57"
          value = {avgRate}
          count = {5}
          size = {58}
          edit = {false}
          isHalf={true}
        />
	    ) : (
          <h1>Loading...</h1>
	    )}
          </div>
        <div className = {styles.splitleft}>
            {hoursToDisplay.map(item=>(
              <div className = {styles.simp}>{item.days} <span className = {styles.time}>{item.hours}</span></div>
            ))}
        </div>
        <div className = {styles.splitright}>
          <div onClick = {() => {props.OpenRate(props.locationId)}} className = {`${styles.ListButton} ${styles.votes}`}></div>
          
	  <div className = {styles.address}> {addressToDisplay.lineOne}</div>
          <div className = {styles.address}> {addressToDisplay.lineTwo}</div>
        </div>
        </>
        ) : (
          <>
          <div onClick={() => { setBoard((prevState) => (prevState ? 1 : 0)) }} className = {styles2.bb}>
            <div className = {styles2.bg}>
                {/* Icons */}
                <div>
                    <div className = {styles2.splitleft}>
                      <a onClick={() => { setBoard((prevState) => (prevState ? 0 : 1)) }} className = {styles2.emoji}><FontAwesomeIcon icon={faHouse} /></a>
                    </div>
                    <div className = {styles2.splitright}>
                      <div className = {styles2.button} id = {styles2.buttonFunc}>
                        <input onClick={() => {setToggle((toggle) => (toggle ? 0 : 1))}} type = "checkbox" className = {styles2.checkbox} />
                          <div className = {styles2.knobs}>
                            <span>Regular Fontsize</span>
                          </div>
                        <div className = {styles2.layer}></div>
                      </div>
                    </div>
                </div>
                {/*Menu */}
                <div className = {styles2.scroll}>
                  {list.map(item=>(
                    <div>
                      {item.Category ? 
                      (<div>
                        <div className = {styles2.solid}></div>
                          <div className = {styles2.row}>
                            <div className = {toggle ? styles2.biglist : styles2.list}>
                              <div className = {styles2.category}> {item.Menu}</div>
                            </div>
                          </div>
                          <div className = {styles2.dot}></div>
                      </div>
                      ):(
                        <div className = {styles2.row}>
                        <div className = {styles2.divider}></div>
                        <div className = {toggle ? styles2.bigmenu : styles2.menu}>
                          <div className = {styles2.name}> {item.Menu}</div>
                          <div className = {styles2.price}> {item.Price}</div>
                        </div>
                      </div>
                      )}
                    </div>
                  ))}
                <div className = {styles2.solid}></div>
                  {list.length==0 ? 
                    (
                      <div className = {toggle ? styles2.bigdefault : styles2.default}>Sorry! <br></br> We don't serve menu info <br></br>for this store :( </div>
                    ):(
                      <div></div>
                    )}
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </>
  );
}

export default Pop;
