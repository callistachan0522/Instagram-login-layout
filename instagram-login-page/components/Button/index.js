import styles from './Button.module.css'
import Link from 'next/link'
export default function Button({
    title="log in",
    color
}) {
    return (
        <button className={styles.Button}>Log In</button>
    )
}