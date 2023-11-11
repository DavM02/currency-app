import styles from './Button.module.css'

const Button = (props) => {
    return <button {...props} className={styles.mainBtn}>{props.text}</button>
}

export default Button