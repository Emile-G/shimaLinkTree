import react from "react"
import content from '../content'

export default function ShimaLink() {
    return (
        <div className="flex flex-row justify-center items-center min-h-screen bg-shima-phone md:bg-shima bg-center bg-no-repeat bg-cover">
            <main
                className="flex flex-col lg:flex-row bg-purple-300 backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
                <div className="flex-1 p-4 lg:p-6">
                    <div className="text-lg text-white mb-8 flex items-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                                clipRule="evenodd"></path>
                        </svg>
                        <div className="ml-4 font-bold">Shima's Link Tree</div>
                    </div>
                    <div className="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
                        {content.links.socialMedia.map((socialMedia, index) => {
                            return (
                                <a target="_blank" rel="noopener noreferrer" href={socialMedia.link}>
                                    <div className="rounded-2xl bg-purple-300 backdrop-filter backdrop-blur-lg bg-opacity-20 hover:bg-opacity-100 p-4 flex flex-col relative undefined">
                                        <div className="text-white absolute right-3 bottom-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox={socialMedia.viewBox} stroke="currentColor">
                                                <g>
                                                    <path fill="currentColor" strokeWidth={socialMedia.strokeWidth} d={socialMedia.icon} />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="text-white text-lg font-medium">{socialMedia.title}</div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};