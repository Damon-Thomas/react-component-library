import React from "react";
import "./sideBarAnimations.css";

export default function SideBar() {
  const [trigger, setTrigger] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <aside
        className={`z-10 hidden sm:block fixed h-screen left-0 bg-white w-15 `}
      >
        <div className="logo flex justify-center items-center pt-2">
          <svg
            className="w-8 h-8 text-zinc-950"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
          </svg>
        </div>
        <nav className=""></nav>
      </aside>
      <aside
        className={`hiddenbar ease-in duration-500 ${
          open ? "open translate-x-15" : "closed -translate-x-full"
        } h-screen fixed left-0 bg-white shadow-sm w-50`}
      >
        <div className="h-full gap-4 sidebarDetails flex flex-col justify-center items-center">
          <p className="item text-black">content1</p>
          <p className="item text-black">content2</p>
          <p className="item text-black">content3</p>
          <p className="item text-black">content4</p>
          <p className="item text-black">content5</p>
          <p className="item text-black">content6</p>
        </div>
      </aside>
      <div className="z-10 triggerIcon fixed top-0 left-0 sm:left-15 p-2">
        <button
          onClick={() => {
            setTrigger(!trigger);
            setOpen(!open);
          }}
        >
          <svg
            className={`ease-in duration-500 translate-x-0 w-8 h-8 text-zinc-950 sidebar-icon ${
              open ? "open translate-x-50" : "closed translate-x-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
            <path d="m16 15-3-3 3-3" />
          </svg>
        </button>
      </div>
    </>
  );
}
//panel open
//<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left-open"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/></svg>

//panel close
//<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/></svg>
