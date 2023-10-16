import { profile } from "./Profile.module.css";

import SignIn from "./sign-in";
import ProfileInfo from "./info";

export default function Profile() {
    const session = null;
    return (
        <section className={profile}>
            {session ? <ProfileInfo session={session} /> : <SignIn />}
        </section>
    );
}
