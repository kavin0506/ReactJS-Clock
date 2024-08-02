import { useEffect, useState } from "react";

const Clock=()=>{

    const date=new Date();
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

 const [time,setTime]=useState({h:0,m:0,s:0})

 useEffect(()=>{
    setTime({h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()})



 })

 function change(val){
     const result=val<10?"0"+val:val

     return result
 }






    return(
        <div>
            <h4>Digital Clock</h4>
            <div className="flex">
                <p>{change(time.h >12?time.h-12:time.h) }</p>
                <p>{change(time.m)}:</p>
                <p>{change(time.s)}</p>
            </div>
                <div className="days">
                    <h4>{change(date.getDay())}-{change(date.getMonth())}-{date.getFullYear()}</h4>
                    <h4>{ days[date.getDay()]}</h4>

                </div>

        </div>
    )
}


export default Clock;