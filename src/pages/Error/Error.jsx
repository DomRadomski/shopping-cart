import { useRouteError, Link } from "react-router-dom"
import styles from "./Error.module.css"

export default function Error() {
  const error = useRouteError()

  return (
    <div className={styles.errorPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Oops!</h1>

        <p className={styles.message}>
          Sorry, something went wrong. Probably not your fault.
          Probably.
        </p>

        <div className={styles.errorBox}>
          <i>{error?.statusText || error?.message}</i>
        </div>

        <Link to="/" className={styles.button}>
            Back Home
        </Link>
      </div>
    </div>
  )
}
