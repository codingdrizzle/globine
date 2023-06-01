import { useState } from 'react';
import classNames from 'classnames';

function Tabs({ tabs, getTab }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index, tab) => {
        setActiveTab(index);
        getTab(tab)
    };

    return (
        <div className="flex justify-start w-full min-h-10 overflow-hidden">
            <div className="flex border-b-2 border-gray-300 w-full">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={classNames(
                            'py-2 px-4 font-semibold text-gray-600 border-b-2 hover:border-gray-500 focus:outline-none flex flex-wrap',
                            {
                                'tab-selected': activeTab === index,
                            }
                        )}
                        onClick={() => handleTabClick(index, tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Tabs;
