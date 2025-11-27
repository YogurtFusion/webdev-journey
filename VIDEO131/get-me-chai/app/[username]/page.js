import React from "react";

function Username({ params }) {
  return (
    <>
      <div className="cover w-full bg-red-50 relative ">
        <img
          className="object-cover w-full h-[350] "
        
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=g6HitpHZigKvTCOxoDp--T61h2BEQeCThLTXU5q-Vls%3D&token-time=1764806400"
          // alt="Random cat GIF"
        />
        <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full ">
          <img
            className="rounded-[100%]  "
            width={150}
            height={150}
            src="https://picsum.photos/500"
            alt="pic"
          />
        </div>
      </div>

      <div className="info flex flex-col justify-center items-center my-24 gap-2 ">
        <div className="font-bold text-lg">@{params.username}</div>
        <div>Creating Animated art for VTT'S</div>
        <div>9718 member82 post$15, 450/release</div>
      </div>
    </>
  );
}

export default Username;
