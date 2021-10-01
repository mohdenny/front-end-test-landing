import React, { Fragment } from 'react';
import EventOne from './EventOne';
import EventTwo from './EventTwo';

const Instagram = () => {
    return (
        <Fragment>
            <div id="instagram" className="h-auto relative grid lg:grid-cols-2 md:grid-cols-1 gap-4 xl:px-1 mb-4 z-0">
                <div>
                    <EventOne/>
                </div>
                <div>
                    <EventTwo/>
                </div>
            </div>
        </Fragment>
    )
}

export default Instagram;