import styles from './Form.module.css'

export default function Form() {
    return (
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Please Log In</legend>
                            <input
                                placeholder="Email"
                                id="email"
                                className={styles.Email}
                                type="email"
                            />
                            <input 
                                placeholder="Password"
                                id="password"
                                className={styles.password}
                                type="password"
                            />
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}