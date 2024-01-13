import styles from './Form.module.css'
import Image from 'next/image'
export default function Form() {
    return (
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}><img src="/Instagram.png" alt="Instagram logo" width={190}/></legend>
                            <input
                                placeholder="Phone Number, Username, Email"
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
                            <button className={styles.Button}>Log In</button>
                            <div className={styles.lines}>
                            <hr className={styles.line} width="150" size="2" color="lightgray"/><span className={styles.Line}>OR</span><hr className={styles.line2} width="150" size="2" color="lightgray"/>
                            </div>
                            <p className={styles.facebooklogin}>Log in with Facebook</p>
                            <p className={styles.forgotPassword}>Forgot Password?</p>
                        </fieldset>
                            <div className={styles.signup}>
                                <p className={styles.noaccount}>Don't have an account?</p><span className={styles.signupbutton}>Sign up</span>
                            </div>
                            <p className={styles.gettheapp}>Get the app.</p>
                            <Image className={styles.apps} src="/Images/Google_Microsoft.png" alt="apps" width={300} height={50}/>
                    </form>
                </div>
            </div>
    )
}