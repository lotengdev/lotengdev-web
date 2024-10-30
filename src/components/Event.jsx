// import event from "./../../public/images/event.png"

export function EventPage() {
  return (
    <div className="w-full h-[80vh] bg-[#f5f5f5] flex flex-col items-center justify-center gap-10">
      <div className="w-[60%] h-[70%] bg-white shadow-md rounded-3xl flex items-center justify-center gap-14">
        <img src="./images/event.png" className="w-auto h-[70%]" />
        <div className=" flex flex-col items-start justify-center h-full w-[40%] gap-4">
          <div className="space-y-1">
            <h3 className="text-[#41B883] font-bold text-md flex items-center justify-start gap-1">
              <img src="./images/calender.svg" />
              Acara Mendatang
            </h3>
            <h1 className=" font-extrabold text-2xl">
              Loteng Dev Meetup #2: Prepare for Hacktoberfest
            </h1>
          </div>
          <div className="space-y-1">
            <h3 className=" text-[#606060] text-sm flex items-center justify-start gap-1">
              <img src="./images/meet.svg" className="size-[1.4rem]" />
              Online Google Meet
            </h3>
            <h3 className=" text-[#606060] text-sm flex items-center justify-start gap-1">
              <img src="./images/vector.svg" className="size-[1.4rem]" />
              Minggu, 17 Juli 2022
            </h3>
            <h3 className=" text-[#606060] text-sm flex items-center justify-start gap-1">
              <img src="./images/clock.svg" className="size-[1.4rem]" />
              20.00 WITA ~ Selesai
            </h3>
          </div>
          <button className="bg-[#007BFF] flex items-center justify-center gap-1 text-xs text-white px-4 py-2 rounded-sm"
            onClick={() => window.open("https://github.com/lotengdev/MeetupTopics/issues", "__blank")}
          >
            <img src="./images/edit.svg" className="size-[1.2rem]" />
            Ikut Acara
          </button>
        </div>
      </div>
    </div>
  );
}
