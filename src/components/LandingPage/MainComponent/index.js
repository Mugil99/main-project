import Button from '../../Common/Button';
import './styles.css'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import { motion } from 'framer-motion';
import { RWebShare } from 'react-web-share';
function MainComponent(){
    return(
        <div className='flex-info'>
            <div className='left-component'>
                <motion.h1 className='track-crypto-heading'
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5}}
                >Track Crypto</motion.h1>
                <motion.h1 
                 initial={{opacity:0,y:50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:0.5,delay:0.5}}
                className='real-time-heading'>Real Time.</motion.h1>
                <motion.p className='info-text'
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.5,delay:1}}>
                Track crypto through a public api in real time. Visit the dashboard to do so!
                </motion.p>
                <motion.div className='btn-flex'
                initial={{opacity:0,x:50}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.5,delay:1.5}}>
                    <a href='/dashboard'>
                    <Button text={"Dashboard"} onClick={()=>console.log("click")}/>
                    </a>
                    <RWebShare
                    data={{
                        text:"Crypto Dashboard made using React JS.",
                        url:"#",
                        title:"CryptoDashboard.",
                    }}
                    onClick={()=>console.log("Shared successfully")}
                    >
                        <Button text={"Share"} outlined={true}/>
                    </RWebShare>
                </motion.div>
            </div>
            <div className='phone-container'>
               <motion.img src={iphone} 
               initial={{y:-10}}
               animate={{y:10}}
               transition={{
                type:"smooth",
                repeatType:"mirror",
                duration:2,
                repeat:Infinity,
               }}
               className='iphone'/> 
               <img src={gradient} className='gradient'/> 
            </div>
        </div>
    )
}
export default MainComponent;