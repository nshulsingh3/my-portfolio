import { useState } from "react";
import ArrowLeft from "./assets/arrow-left.svg";
import Link from "./assets/url.svg";
import Check from "./assets/check.svg";

function WhatIDoSection() {
  const libraries = [
    {
      name: "React Redux",
      description:
        "React Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently and run in different environments.",
      link: "https://react-redux.js.org/",
      highlights: [
        {
          text: "Implemented and integrated API's with reducer state management",
        },
      ],
    },
    {
      name: "Redux Toolkit",
      description:
        "Redux Toolkit is the official, recommended way to write Redux logic. It provides a set of tools that simplify the most common Redux tasks.",
      link: "https://redux-toolkit.js.org/",
      highlights: [
        {
          text: "Reduced API calls by efficiently using cache memory",
        },

        {
          text: "Accelerated UI integrations with ease",
        },
      ],
    },
    {
      name: "React Router",
      description:
        "React Router is a collection of navigational components for React applications. It enables dynamic routing in a web app.",
      link: "https://reactrouter.com/",
      highlights: [
        {
          text: "Handled routing for Register, Log-in and redirect URL's flows",
        },
      ],
    },
    {
      name: "React Flow",
      description:
        "React Flow is a library for building node-based editors and diagrams. It provides a customizable and performant way to visualize and interact with data.",
      link: "https://reactflow.dev/",
      highlights: [
        {
          text: "Built a drag and drop UI to handle worklfow of AI services",
        },
        {
          text: "Handled validations on connecting endpoints of services",
        },
      ],
    },
    {
      name: "Material UI",
      description:
        "Material UI is a popular React UI framework with a comprehensive set of components. It follows Google's Material Design guidelines.",
      link: "https://mui.com/",
      highlights: [
        {
          text: "Implemented Light and Dark Modes and established base to support different variants of UI components",
        },
        {
          text: "Built dashboards, UI screens followed with different requirement sets",
        },
      ],
    },
    {
      name: "Blocknote",
      description:
        "Blocknote is a rich text editor for React applications. It offers a user-friendly interface for creating and editing text content.",
      link: "https://blocknotejs.org/",
      highlights: [
        {
          text: "Integrated notion like editor with external handlers to insert clauses",
        },
        {
          text: "Added support of auto scroll features to certain sections of configured templates",
        },
        {
          text: "Extracted HTML output to create a document in final stage",
        },
      ],
    },
    {
      name: "React Quill",
      description:
        "React Quill is a Quill component for React, a rich text editor. It provides a powerful and flexible text editing experience.",
      link: "https://github.com/zenoamaro/react-quill",
      highlights: [
        {
          text: "Implemented a custom toolbar to handle various Word-like features",
        },
      ],
    },
    {
      name: "React Player",
      description:
        "React Player is a React component for playing media from various sources. It supports a wide range of media formats and streaming protocols.",
      link: "https://github.com/CookPete/react-player",

      highlights: [
        {
          text: "Engineered a Video Player with external handlers supporting live streaming events",
        },
        {
          text: "Created a custom seekbar to handle drag and on-click functionalities",
        },
      ],
    },
    {
      name: "Syncfusion",
      description:
        "Syncfusion is a UI component suite for building web, mobile, and desktop applications. It offers a wide range of components for different platforms.",
      link: "https://www.syncfusion.com/",
      highlights: [
        {
          text: "Developed a DOCX Viewer using SyncFusion with zoom and search functionality",
        },
        {
          text: "Connected with backend team to meet up the requirements",
        },
      ],
    },
    {
      name: "JSONLogic",
      description:
        "JSONLogic is a library for building complex rules and conditions using JSON. It allows you to create and evaluate logical expressions in a structured format.",
      link: "http://jsonlogic.com/",
      highlights: [
        {
          text: "Built a form to handle nested if-else logic to n-levels",
        },
        {
          text: "Extracted the rule sets including comparators with AND/OR operations to execute the AI workflow",
        },
      ],
    },
    {
      name: "Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development. It provides low-level utility classes to build custom designs.",
      link: "https://tailwindcss.com/",
      highlights: [
        {
          text: "Experimented and built responsive layouts in personal learnings",
        },
      ],
    },
    {
      name: "Web Sockets",
      description:
        "Web Sockets is a protocol for full-duplex communication channels over a single TCP connection. It enables real-time, bidirectional communication between a client and a server.",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      highlights: [
        {
          text: "Implemented notification service using Socket.io",
        },
      ],
    },
  ];

  const [showGrid, setShowGrid] = useState(true);
  const [activeTile, setActiveTile] = useState(libraries[0]);

  return (
    <div className="mt-6 w-[90vw] md:w-[75vw] lg:w-[55vw] flex-col m-auto pb-6">
      <h2 className="text-xl font-bold text-sky-700 text-center md:text-left">
        {"Hands-on experience with:"}
      </h2>
      {showGrid ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6">
          {libraries.map((library, index) => {
            return (
              <div
                className="flex shadow-md cursor-pointer items-center bg-gradient-to-br hover:from-cyan-500 hover:to-sky-600 from-blue-500/[0.9] to-sky-500/[0.7] h-35 text-white p-4 rounded-[10px] justify-center  hover:bg-sky-800"
                key={index}
                onClick={() => {
                  setActiveTile(library);
                  setShowGrid(false);
                }}
              >
                {library.name}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex-col shadow-md mt-6  bg-gradient-to-r from-purple-500/[0.1] to-blue-700/[0.10] p-4 rounded-[10px]">
          <div className="flex items-center justify-around md:justify-start md:gap-6">
            <img
              src={ArrowLeft}
              onClick={() => setShowGrid(true)}
              className="w-4 stroke-current text-cyan-600 cursor-pointer"
            />
            <h1
              onClick={() => setShowGrid(true)}
              className="text-2xl font-bold text-cyan-600 cursor-pointer text-center md:text-left"
            >
              {activeTile.name}
            </h1>
            <img
              src={Link}
              className="w-4 stroke-current text-cyan-600 cursor-pointer"
              onClick={() => window.open(activeTile.link, "_blank")}
            />
          </div>
          <div className="text-lg font-italic text-sky-700 cursor-pointer text-balance md:text-wrap text-center md:text-left mt-3">
            {activeTile.description}
          </div>
          {activeTile.highlights?.length > 0 && (
            <div className="bg-gradient-to-br from-orange-500/[0.1] to-green-700/[0.10] p-4 rounded-[10px] mt-4 shadow-sm">
              <div className="text-lg font-bold text-[#243c5a] cursor-pointer text-left ">
                {"Highlights"}
              </div>
              {activeTile.highlights?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 text-lg text-sky-700  text-left md:text-left mt-1 items-start"
                  >
                    <img
                      src={Check}
                      className="w-4 stroke-current text-sky-700  cursor-pointer mt-2"
                    />
                    <div>{item.text}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WhatIDoSection;
