// components/HeroSection.js
import React from "react"

const HeroSection = () => {
  const teamMembers = [
    {
      name: "Mouloud",
      github: "https://github.com/mouloud247",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
    },
    {
      name: "M.Mohamed",
      github: "https://github.com/M07am3dM",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
    },
    {
      name: "C.Mohamed",
      github: "https://github.com/mohamed-cheraitia",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
      photo: "../imgs/mohamed.jpg",
    },
    {
      name: "Oussama",
      github: "https://github.com/0m3ga13/",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
    },
    {
      name: "Melissa",
      github: "https://github.com/melissasidisid",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
    },
  ]

  return (
    <div className="relative h-screen overflow-hidden  py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1536300099515-6c61b290b654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset="1" stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset="1" stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>{" "}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Who Are We?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are a talented team of frontend developers from Recoded Bootcamp,
            passionate about creating amazing web experiences.
          </p>
        </div>
        <div className=" mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <div className="mb-2">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 bg-black object-cover rounded-full border text-center mx-auto mb-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <ul className="list-disc list-inside text-gray-300">
                  {member.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Profile <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
