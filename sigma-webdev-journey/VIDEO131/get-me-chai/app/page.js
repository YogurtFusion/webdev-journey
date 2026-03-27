import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4 ">
        <div className="font-bold text-5xl flex justify-center items-center gap-2">
          Buy Me a Chai
          <span>
            <img  className="invert-img" src="/tea.gif" width={88} alt="" />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers . Start now !
        </p>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>

          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"> </div>

      <div className="text-white container mx-auto py-32">
        <h2 className="text-2xl font-bold text-center mb-14 ">
          Your Fans Can buy you a chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/man.gif"
              alt=""
            />
            <p className="font-bold ">Fans want to help </p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold ">Fans want to help </p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/group.gif"
              alt=""
            />
            <p className="font-bold ">Fans want to help </p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"> </div>

      <div className="text-white container mx-auto py-32">
        <h2 className="text-3xl font-bold text-center mb-14 ">
          Learn more about us
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center max-w-[80vw] gap-8 ">
            <p className="text-center  leading-9 tracking-wider max-w-full">
              At Get Me A Chai, we are dedicated to supporting developers,
              creators, and influencers by connecting them with their
              supporters. Our platform enables individuals to fund their
              projects and ideas, providing a space where creativity and
              innovation can thrive.
            </p>

            <p className="leading-9 tracking-wider max-w-full">
              {" "}
              Our mission is to empower talented individuals by facilitating
              financial support, allowing them to focus on what they do best –
              creating. Whether you're a developer coding the next big app, a
              content creator making engaging videos, or an influencer sharing
              your passion, Get Me A Chai is here to help you achieve your
              goals.{" "}
            </p>

            <p className="leading-9 tracking-wider max-w-full">
              {" "}
              We believe in the power of community and the impact of collective
              support. By providing a platform for patrons to contribute, we aim
              to transform dreams into reality and foster a culture of
              creativity and innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
