import { useLoaderData } from "react-router-dom";

const Card_Read_More = () => {
    const user = useLoaderData();
    const { name, username, email, phone, website, address, company } = user;
    const { street, suite, city, zipcode } = address;
    const { name:companyName, catchPhrase, bs } = company;

    return (
        <div className="px-[580px] py-[140px]">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {name}</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Username : {username}</h5>
                <p>Email : {email}</p>
                <p>Phone : {phone}</p>
                <h2 className="font-semibold text-[#9C95FF]">Website :{website}</h2>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Address:</h5>
                <ul>
                    <li>Street: {street}</li>
                    <li>Suite: {suite}</li>
                    <li>City: {city}</li>
                    <li>Zipcode: {zipcode}</li>
                </ul>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Company:</h5>
                <ul>
                    <li>Name: {companyName}</li>
                    <li>Catch Phrase: {catchPhrase}</li>
                    <li>BS: {bs}</li>
                </ul>



            </div>
        </div>
    );
};

export default Card_Read_More;