import Link from "next/link";
import { nav } from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={nav}>
            <Link href="/">Home</Link>
            <Link href="/user/posts">Your Posts</Link>
            <Link href="/user/edit">Edit Profile</Link>
            <Link href="/user/add-post">New Post</Link>
        </nav>
    );
}
