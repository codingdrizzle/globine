import FilteredBy from "./FilteredBy";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Layout = ({ children, searchTrigger, handleFiterSelect }) => {
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-between w-[80%] md:w-[70%] m-auto">
                <div class="relative flex flex-col item-center space-y-2 md:flex-row md:justify-between md:space-y-0 w-full">
                    <SearchBar searchTrigger={searchTrigger}/>
                    <FilteredBy handleFiterSelect={handleFiterSelect}/>
                </div>
            </div>
            <div className="flex flex-wrap flex-col-reverse w-[80%] md:w-[70%] mx-auto my-10 md:p-8 rounded-lg md:border-[1px]">
                {children}
            </div>
        </>
    );
}


export default Layout;