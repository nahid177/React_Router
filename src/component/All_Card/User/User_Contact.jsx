import { useLoaderData } from "react-router-dom";
import User_Card from "../Card/User_Card";

const User_Contact = () => {

    const user_Contact = useLoaderData();
    return (
        <div className="px-[320px] py-[20px] grid grid-cols-3 gap-6">
            {
                user_Contact.map(user_Contact => <User_Card key={user_Contact.id} user_Contact={user_Contact}></User_Card>)
            },
           
           
            



        </div>
    );
};

export default User_Contact;