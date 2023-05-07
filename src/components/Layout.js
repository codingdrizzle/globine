import Navbar from "./Navbar";

const Layout = ({ children, searchTrigger, handleFiterSelect }) => {
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-between w-[70%] m-auto">
                <div class="relative flex flex-col item-center space-y-2 md:flex-row md:justify-between md:space-y-0 w-full">
                    <input type="search" placeholder='Search' className='w-full md:w-auto border-[1px] p-2 focus:outline-0 focus:border-blue-950 rounded-md' onChange={(e) => searchTrigger(e)} />
                    <FilteredBy handleFiterSelect={handleFiterSelect}/>
                </div>

            </div>
            <div className="flex flex-wrap flex-col-reverse  w-[70%] mx-auto my-10 md:p-8 rounded-lg md:border-[1px]">
                {children}
            </div>
        </>
    );
}

const FilteredBy = ({handleFiterSelect}) => {
    return (
        <div className="w-full md:w-auto flex justify-between items-center">
            <span>Filtered by: </span>
            <select onChange={(e) => handleFiterSelect(e)} class="appearance-none border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value={'All'}>All</option>
                <option value={'Africa'}>Africa</option>
                <option value={'Americas'}>Americas</option>
                <option value={'Asia'}>Asia</option>
                <option value={'Europe'}>Europe</option>
                <option value={'Oceania'}>Oceania</option>
            </select>
            {/*<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 1 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0 0-1.414z" />
                </svg>
            </div>*/}
        </div>
    )
}

export default Layout;