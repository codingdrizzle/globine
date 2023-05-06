import Navbar from "./Navbar";

const Layout = ({ children, searchTrigger }) => {
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-between w-[70%] m-auto">
                <input type="search" placeholder='Search' className='border-[1px] p-2 focus:outline-0 focus:border-blue-950 rounded-md w-[100%]' onChange={(e) => searchTrigger(e)}/>
                {/*<span>Sort By</span>*/}
            </div>
            <div className="flex flex-wrap flex-col-reverse  w-[70%] mx-auto my-10 md:p-8 rounded-lg md:border-[1px]">
                {children}
            </div>
        </>
    );
}

export default Layout;