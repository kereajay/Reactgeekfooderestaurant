// import "./Nav.css"
let Header = () => {
    return (
        <>
            <div id="navbar1" className="h-24 m-auto   text-center justify-center bg-white">
                <nav className="flex justify-between w-[100%] h-24   fixed  items-center backdrop-filter backdrop-blur-lg">
                    <div id="logo" className="flex justify-center ml-32">
                        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                        <h2 className="font-bold text-2xl ml-2">GeekFoods</h2>
                    </div>
                    <div id="navitems">
                        <ul type="none" className="flex text-lg ">
                            <li className="mr-10">Home</li>
                            <li className="mr-10">Quote</li>
                            <li className="mr-10">Restaurants</li>
                            <li className="mr-10">Foods</li>
                            <li className="mr-10">Contact</li>
                        </ul>
                    </div>
                    <div id="getstarted" className="mr-32">
                        <button
                            id="get"
                            className="bg-blue-500 p-2 rounded text-white text-lg"
                        >
                            Get Started
                        </button>
                    </div>
                </nav>
                <br />
                <br />
            </div>
            <hr />
        </>
    );
};
export default Header;
