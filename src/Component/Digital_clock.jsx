import React,{useState,useEffect} from 'react'
import './Digital_clock.css'; 



const Digital_clock = () => {
    const [time,setTime]=useState(new Date())

    useEffect(()=>{
        const intervalID=setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{
            clearInterval(intervalID)
        }
    },[])

    function formatTime(){
        let hours = time.getHours()
        const minutes=time.getMinutes()
        const seconds=time.getSeconds()
        const AmPm=hours>=12 ?"PM":"AM"
//24 hrs concept
        hours= hours%12||12

        return  `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(AmPm)}`

    }
// if number is smal than 10 than 0 automatically added
    function padZero(number){

        return (number<10?"0":"")+number
    }
  return (
    <div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}

export default Digital_clock