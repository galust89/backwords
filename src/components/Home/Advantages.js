import React from "react"
import styles from "../../css/advantages.module.css"
import advantages from "../../constants/advantages"

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      {advantages.map((item, index) => {
        return <Advantage {...item} />
      })}
    </div>
  )
}

const Advantage = ({ icon, text }) => {
  return (
    <div className={styles.advantage}>
      <img className={styles.adImage} src={icon} alt={text} />
      <h4 className={styles.textInfo}>{text}</h4>
    </div>
  )
}

export default Advantages
