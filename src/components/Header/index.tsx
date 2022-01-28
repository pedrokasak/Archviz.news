import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
export function Header () {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/archviznews.png" alt="Logo" width="200" height="60"/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                    <a></a>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}