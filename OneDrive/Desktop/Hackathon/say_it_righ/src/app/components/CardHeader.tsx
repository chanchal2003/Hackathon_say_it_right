import React from 'react'
import { TbPlaneTilt } from "react-icons/tb";

type Props = {}

// const CardHeader = (props: Props) => {
//     return (
//         <div className="flex absolute top-60 left-[259.6px] w-[1000px] justify-between">
//             <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <div className="flex flex-col items-center pb-5 pt-5">
//                     <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
//                     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
//                     <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>

//                 </div>
//             </div>
//             <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <div className="flex flex-col items-center pb-5 pt-5">
//                     <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
//                     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
//                     <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>

//                 </div>
//             </div>
//             <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <div className="flex flex-col items-center pb-5 pt-5">
//                     <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
//                     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
//                     <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>

//                 </div>
//             </div>

//         </div>

//     )
// }

const CardHeader = (props: Props) => {
    return (
        <div className="flex absolute top-60 left-[259.6px] w-[1000px] justify-between">
            <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-5 pt-5">
                    {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
                    <button className="w-24 h-24 mb-3 rounded-full shadow-lg">
                        <TbPlaneTilt></TbPlaneTilt>
                    </button>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>

                </div>
            </div>
            <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-5 pt-5">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>

                </div>
            </div>
            <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-5 pt-5">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>

                </div>
            </div>

        </div>

    )
}

export default CardHeader;