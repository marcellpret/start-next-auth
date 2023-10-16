import { btn, logout, login } from "./AuthButton.module.css";

export default function AuthButton() {
    const session = null;

    if (session) {
        return (
            <>
                <button className={`${btn} ${logout}`}>Sign out</button>
            </>
        );
    }
    return (
        <>
            <button className={`${btn} ${login}`}>Sign in</button>
        </>
    );
}
