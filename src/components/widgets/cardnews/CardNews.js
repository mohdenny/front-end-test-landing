import React from "react";

const CardNews = () => {
    return(
        <div id="card-news" className="grid grid-cols-12 border-8 border-solid border-gray-800">
            <div id="news-body" className="col-start-3 col-end-4 border-8 border-solid border-gray-800">
                <p className="font-bold">Berita <span className="text-red-700">Terkini</span></p>
            </div>
            <div id="news-body" className="col-start-9 col-end-11 border-8 border-solid border-gray-800">
                <p className="text-gray-500 text-sm font-semibold ">Lihat Berita Lainnya</p>
                <div className=""></div>
            </div>
            <div id="news-body" className="col-start-3 col-end-11 grid grid-cols-3 border-8 border-solid border-gray-800">
                <div id="news-1" className="border-8 border-solid border-gray-800">
                    bagimu
                </div>
                <div id="news-2" className="border-8 border-solid border-gray-800">
                    bagimu
                </div>
                <div id="news-3" className="border-8 border-solid border-gray-800">
                    bagimu
                </div>
            </div>
        </div>
    )
}

export default CardNews;