import styles from './Form.module.css'
export default function Form() {
    return (
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldset}>
                            <legend>Please Log In</legend>
                            <label>Email</label>
                            <input
                                id="email"
                                className={styles.Email}
                                type="email"
                            />
                            <label>Password</label>
                            <input 
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