import { ProfilePage } from "@/components/profile/"

type ProfileProps = {
    params: object,
}

export default function Profile({ params, ...props }: ProfileProps) {

    const {
        // username,
    } = params

    // console.log(`[profile]: props >> `, username);


    return (
        <>

            <ProfilePage />
        </>
    )
}