import useSWR from "swr";
import Posts from "@/components/posts/Posts";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UserPosts() {
    const session = {};

    const { data, isLoading, error } = useSWR(
        session ? `/api/user/posts/${session.user?.userId}` : null,
        fetcher
    );

    console.log("data: ", data);
    if (isLoading) return <p>Loading...</p>;

    if (!session) {
        return <div>Please Login</div>;
    }

    return <Posts posts={data} />;
}
