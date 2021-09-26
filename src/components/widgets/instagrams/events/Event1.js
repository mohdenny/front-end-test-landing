import React from "react";

const Event1 = ({ styled }) => {
    return (
        <div id="event-1" className={`${styled.event1.xxl} border-8 border-solid border-gray-800`}>
            <div className="grid grid-rows-2 h-full absolute">
                <div className="grid grid-cols-2 border-4 border-gray-800 border-solid">
                    <div className="border-4 border-gray-800 border-solid text-xl">
                        bg-vector-1
                    </div>
                    <div className="border-4 border-gray-800 border-solid text-xl">
                        bg-vector-2
                    </div>
                </div>
                <div className="border-4 border-gray-800 border-solid text-xl">
                    bg-vector-3
                </div>
            </div>
        </div>
    )
}

export default Event1;