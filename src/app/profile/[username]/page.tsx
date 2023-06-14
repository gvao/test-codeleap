import { ProfilePage } from "@/components/profile/"
import PostContextProvider from "@/context/posts"

type ProfileProps = {
    params: object,
}

export default function Profile({ params, ...props }: ProfileProps) {

    const {
        // username,
    } = params

    // console.log(`[profile]: props >> `, username);

    return (
        <PostContextProvider>
            <ProfilePage />
        </PostContextProvider>
    )
}