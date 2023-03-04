
import React, { useEffect, useState } from 'react'
import Img from "./The (2).png"
import styles from './Homepage.module.css'
import {useNavigate}from "react-router-dom"
import {AiFillSetting} from 'react-icons/ai'
import { HiSpeakerWave ,HiSpeakerXMark } from 'react-icons/hi2'
const HomePage:React.FC = () =>
{    
    const [Loading,setLoading] = useState(false)
    const [Music,setMusic] = useState(true)
    const navigate=useNavigate();

    const handelPaly = () =>
    {
       //redirect to secound Page
       navigate("/slider")
    }
    const handelMusic = () => setMusic(!Music)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        },3000);
    },[])



    return (
        <>
        <div className={styles.BackgroundImg}  data-aos="zoom-in"> 
        <img src={Img} alt="" />
        <div>
        { Loading ? <button className={styles.Button} onClick={handelPaly} >Play</button>:<p className={styles.loading}>Loading...</p>}
         <div  className={styles.Setting}>
         {Music ? <HiSpeakerWave onClick={handelMusic} /> : <HiSpeakerXMark onClick={handelMusic} />}
         </div>
        </div>
        </div>
        </>
    )
}





export {HomePage}