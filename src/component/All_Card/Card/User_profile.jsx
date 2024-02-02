
const User_profile = ({user}) => {
    const { title, body, image } = user;

    return (
        <div>
            <div className="w-[300px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="h-[300px] w-[300px]" src={image} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{body}</p>

                </div>
            </div>

        </div>
    );
};

export default User_profile;