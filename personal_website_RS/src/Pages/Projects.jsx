import React from 'react'

export default function Projects() {
    return (
        <div>
            <div className='mt-10'>
                <div className='text-center opacity-50 text-[25px]'>Browse My Recent</div>
                <div className='text-center font-bold  text-[35px]'>Projects</div>

                <section className='mt-10'>
                    {/* p 1 */}
                    <div class="max-w-sm  border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img class="rounded-t-lg" src="https://play-lh.googleusercontent.com/sdkR0tMVI4G3EdP912E4ukAdo6phHEYnXKvTcJU6zDUawghn8IlFHMtvbU6HjXjaUQ=w240-h480-rw" alt="loading" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FreeSkills</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">he FreeSkills app stands as an innovative and comprehensive tool designed to guide individuals on a journey towards a promising future in the IT industry. With its user-friendly interface and extensive array of resources, the app offers a complete roadmap that equips users with the skills and knowledge necessary to thrive in the ever-evolving world of technology.</p>
                            <a target='_black'  href="https://play.google.com/store/apps/details?id=in.softface.raghavan.freeskills&hl=en&gl=US" class="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:text-gray-400 focus:ring-4 focus:outline-none ">
                                Live Demo
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <a href="#" target='_black' class="inline-flex hidden  items-center  px-3 py-2 text-sm font-medium text-center text-white pointer-events-none rounded-lg hover:text-gray-400 focus:ring-4 focus:outline-none ">
                                Github
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* p2 */}
                </section>
            </div>
            <hr className='mt-10'></hr>
        </div>
    )
}
