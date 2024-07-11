import React, { useState } from "react";
import Select from 'react-select';


function Page4() {
    const messagerDropDowanData = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
    ];
    const countryData = [
        { label: 'USA', value: 'USA' },
        { label: 'Pakistan', value: 'Pakistan' },
        { label: 'India', value: 'India' },

    ];
    const notificationLangaugeData = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
    ];

    

    let [contact ,setContact]=useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        userNameorPhone:""
    })



    // let setContactData=(e)=>{
    //     setContact( {...contact,  e.target.name:e.target.value})
    // }
    let ShowCantactData=()=>{
       console.log(contact)
    }


    return <>
        <div className="p-4 font-bold text-2xl text-left ">
            User : <span className="text-orange-300">username</span>
        </div>

        <section>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-4 m-2 p-2 pla " >
                <div className="border-2 border-slate-200 col-span-1 px-1 text-left">
                    <div className="text-2xl text-left p-2">
                        Contact Detial

                    </div>
                    <div className="flex items-start justify-start  ">
                        <div className="m-2">
                            <label htmlFor="firstname">First name*</label><br />
                            <input type="text" id='firstname' name="firstName" className="h-10 bg-slate-200 p-2 w-[100%]" onChange={(e)=>setContact( {...contact,  firstName:e.target.value})} />
                        </div>
                        <div className="m-2">
                            <label htmlFor="lastname">Last name*</label><br />
                            <input type="text" id='lastname' name="lastName" className="h-10 bg-slate-200 p-2 w-[100%]" onChange={(e)=>setContact( {...contact,  lastName:e.target.value})}/>
                        </div>
                    </div>
                    <div className="m-2">
                        <label htmlFor="phonenumber">Phone Number</label><br />
                        <input type="text" id='phonenumber' name="phoneNumber" className="h-10 bg-slate-200 p-2 w-[100%]" onChange={(e)=>setContact( {...contact,  phoneNumber:e.target.value})} />
                    </div>

                    <div className="flex items-start justify-start">
                        <div className="m-2 w-[50%]">
                            <label htmlFor="firstname">Messager</label><br />
                            <Select
                                options={messagerDropDowanData}
                                placeholder="Exact period"
                                onChange={opt => console.log(opt.label, opt.value)}
                            />
                        </div>
                        <div className="m-2">
                            <div className="overflow-x-visible w-[100%] h-6">username or phone number</div>
                            <input type="text" id='phonenumber' name="userNameorPhone" className="h-10 bg-slate-200 p-2 w-[100%]"  onChange={(e)=>setContact( {...contact,  userNameorPhone:e.target.value})}/>
                        </div>
                    </div>
                    <label className="overflow-clip">to edit contact detial ,Please contact your manager</label><br />


                    <div className="flex items-start justify-start">
                        <div className="m-2 w-[50%]">
                            <label >Country</label><br />
                            <Select
                                options={countryData}
                                placeholder="Exact period"
                                onChange={opt => console.log(opt.label, opt.value)}
                            />
                        </div>
                        <div className="m-2 w-[50%]">
                            <label >Notification langauge</label><br />
                            <Select
                                options={notificationLangaugeData}
                                placeholder="Exact period"
                                onChange={opt => console.log(opt.label, opt.value)}
                            />
                        </div>
                    </div>
                    <div className="w-[100%] bg-orange-300 rounded-full py-2 text-center text-white mb-2 cursor-pointer"  onClick={ShowCantactData}>
                        SAVE CHANGES
                    </div>

                </div>

{/* second div  */}

                <div className="border-2 border-slate-200 col-span-1 px-1 text-left">
                <div className="text-2xl text-left p-2">
                        Contact Detial

                    </div>
                    <span>
                        Detials
                    </span>
                </div>



                {/* third div  */}
                <div className="border-2 border-slate-200 col-span-1 px-1 text-left">
                    <div className="text-2xl text-left p-2">
                    Change Password

                    </div>
                    <div className="m-2">
                        <label htmlFor="phonenumber">Phone Number</label><br />
                        <input type="text" id='phonenumber' className="h-10  p-2 w-[100%] border-2 border-slate-200" />
                    </div>
                    <div className="flex items-start justify-start  ">
                        <div className="m-2">
                            <label htmlFor="firstname">New Password</label><br />
                            <input type="text" id='firstname' className="h-10 p-2 w-[100%] border-2 border-slate-200" />
                        </div>
                        <div className="m-2">
                            <label htmlFor="">old Password</label><br />
                            <input type="text" id='lastname' className="h-10  p-2 w-[100%] border-2 border-slate-200" />
                        </div>
                    </div>
             
                    <div className="w-[100%] cursor-pointer bg-orange-300 rounded-full py-2 text-center text-white mb-2" >
                         CHANGE PASSWORD
                    </div>

                </div>

                {/* fouth div  */}
                <div className="border-2 border-slate-200 col-span-1 px-1 text-left">
                <div className="text-2xl text-left p-2">
                        Subscription

                    </div>
                    <div className="text-2xl text-center py-4 font-semibold ">
                        No Information

                    </div>
                </div>
                {/* five div  */}

                <div className="border-2 border-slate-200 col-span-1 p-2 text-left space-y-2 ">
                <div className="text-2xl text-left p-2">
                       Manage Two Factor authentication

                    </div>
                    <span>
                      Google Authenticator enbled. no
                    </span>
                    <div className="w-[100%] cursor-pointer bg-orange-300 rounded-full py-2 text-center text-white mb-4" >
                         CHANGE PASSWORD
                    </div>
                </div>

            </div>


        </section>

    </>;
}

export default Page4;
