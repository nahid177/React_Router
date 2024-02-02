import { useEffect, useState } from "react";
import User_profile from "../Card/user_profile";

const User = () => {
    const [bottles, setBottles] = useState([])

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div className="px-[270px] py-[20px] grid grid-cols-3 gap-6">

            {
                bottles.map(user => <User_profile
                    user={user}
                    key={bottles.id}>
                </User_profile>)
            }
        </div>
    );
};

export default User;