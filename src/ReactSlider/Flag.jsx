

import styles from './Flag.module.css'
import { Reactslider } from './ReactSlider'


const Flag = () =>
{
    return (
        <div className={styles.FlagBox}>
         <Reactslider />
         <Reactslider />
        </div>
    )
}

export {Flag}