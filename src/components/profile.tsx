'use client';

import {useSession } from "next-auth/react";

function Profile() {
    const { data: session } = useSession();

    if (!session) {
        return <p>Not signed in</p>;
    }

    return (
        <div>
            <p>Signed in!</p>
        </div>
    );
}

export default Profile;