import React from 'react';

export default function Contact() {
  return (
    <section id='contact'>
    <div className="text-center mt-40 p-10">
      <div className="opacity-50 text-3xl mb-4">Feel free to</div>
      <div className="font-bold text-4xl mb-5">Contact Me</div>

      <div className="border  sm:p-1  lg:w-96 mt-20 rounded-md p-10 mx-auto"> {/* Adjusted padding */}
        <p className="text-xl sm:text-sm mb-2">Email: Raghavan2005@zohomail.in</p> {/* Adjusted margin */}

        <div className="flex  justify-center items-center mb-2"> {/* Adjusted margin */}
          <p className="ml-1 sm:text-sm text-xl mr-2">Linkedin -</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/raghavan-s-a3b147232/"
            className="text-base sm:text-sm text-xl hover:text-blue-300"
          >
            @Raghavan S
          </a>
        </div>
        {/* p2 */}
        <div className="flex justify-center items-center mb-2"> {/* Adjusted margin */}
          <p className="ml-1 sm:text-sm text-xl mr-2">X -</p>
          <a
            target="_blank"
            href="https://twitter.com/Raghavan_2005"
            className="text-base text-xl sm:text-sm hover:text-blue-300"
          >
            @Raghavan_2005
          </a>
        </div>
        {/* p3 */}
        <div className="flex justify-center items-center mb-2"> {/* Adjusted margin */}
          <p className="ml-1 text-xl sm:text-sm mr-2">Medium -</p>
          <a
            target="_blank"
            href="https://medium.com/@funwithmetamil"
            className="text-base sm:text-sm text-xl hover:text-blue-300"
          >
            @funwithmetamil
          </a>
        </div>
        {/*  */}
      </div>
    </div>
    <hr className="mt-60 opacity-50"/>
  </section  >
);
}