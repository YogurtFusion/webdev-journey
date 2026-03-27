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
        <div className="text-slate-400" >Creating Animated art for VTT'S</div>
        <div className="text-slate-400" >9718member . 82post . 15,450/release</div>
      </div>

      <div className="payment flex gap-3 w-[80%] mt-11  mx-auto ">
        <div className="suppoters w-1/2 bg-slate-900 rounded-lg text-white p-10">
        <h2 className="text-2xl font-bold my-5 " >Suppoters</h2>
        <ul className="mx-5 text-lg">
          <li className="my-4 flex gap-2 items-center"><img width={33} src="/avatar.gif" alt="" /><span>
            shubham donated <span className="font-bold">$30</span> with a message "bro app mere sabase bare fan ho "  </span>
            </li>
          <li className="my-4 flex gap-2 items-center"><img width={33} src="/avatar.gif" alt="" /><span>
            Rohan donated <span className="font-bold">$30</span> with a message "sir mera autograph loge ?  "  </span>
            </li>
          <li className="my-4 flex gap-2 items-center"><img width={33} src="/avatar.gif" alt="" /><span>
            Rohan donated <span className="font-bold">$30</span> with a message "
            sucess spits on your shoose "  </span>
            </li>
          <li className="my-4 flex gap-2 items-center"><img width={33} src="/avatar.gif" alt="" /><span>
            Tarun donated <span className="font-bold">$30</span> with a message " bro why sucees hates you ? "  </span>
            </li>
        </ul>
        </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10 ">
          <h2 className="text-2xl font-bold m-5 ">Make a Payment</h2>
          <div className="flex gap-2 flex-col ">
            {/* input for name and message */}
            <div>
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enther your name" />
            </div>
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enther your message" />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enther your amount" />

              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            
          </div>

          <div className="flex gap-2 mt-5">
            <button className="bg-slate-800 p-3 rounded-lg"> pay $10</button>
            <button className="bg-slate-800 p-3 rounded-lg"> pay $20</button>
            <button className="bg-slate-800 p-3 rounded-lg"> pay $30</button>
          </div>
          </div>

      </div>
    </>
  );
}

export default Username;
