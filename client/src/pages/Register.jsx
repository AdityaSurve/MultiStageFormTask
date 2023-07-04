import { useState } from "react";
import FormBackground from "../assets/bg-sidebar-desktop.svg";
import { links, paymentMonthly, paymentAnnual } from "../link";
import Dashboard from "./Dashboard";
const Register = () => {
  const [activeStep, setActiveStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("monthly");
  const [payment, setPayment] = useState("Arcade");
  const [onlineService, setOnlineService] = useState(false);
  const [largeStorage, setLargeStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [total, setTotal] = useState("0");
  const calculateTotal = () => {
    if (plan === "monthly") {
      if (payment === "Arcade") {
        if (!onlineService && !largeStorage && !customizableProfile)
          setTotal("9");
        if (onlineService && !largeStorage && !customizableProfile)
          setTotal("10");
        if (largeStorage && !onlineService && !customizableProfile)
          setTotal("11");
        if (customizableProfile && !onlineService && !largeStorage)
          setTotal("11");
        if (onlineService && largeStorage && !customizableProfile)
          setTotal("12");
        if (onlineService && customizableProfile && !largeStorage)
          setTotal("12");
        if (largeStorage && customizableProfile && !onlineService)
          setTotal("13");
        if (onlineService && largeStorage && customizableProfile)
          setTotal("14");
      }
      if (payment === "Advanced") {
        if (!onlineService && !largeStorage && !customizableProfile)
          setTotal("12");
        if (onlineService && !largeStorage && !customizableProfile)
          setTotal("13");
        if (!onlineService && largeStorage && !customizableProfile)
          setTotal("14");
        if (!onlineService && !largeStorage && customizableProfile)
          setTotal("14");
        if (onlineService && largeStorage && !customizableProfile)
          setTotal("15");
        if (onlineService && !largeStorage && customizableProfile)
          setTotal("15");
        if (!onlineService && largeStorage && customizableProfile)
          setTotal("16");
        if (onlineService && largeStorage && customizableProfile)
          setTotal("17");
      }
      if (payment === "Pro") {
        if (!onlineService && !largeStorage && !customizableProfile)
          setTotal("15");
        if (onlineService && !largeStorage && !customizableProfile)
          setTotal("16");
        if (!onlineService && largeStorage && !customizableProfile)
          setTotal("17");
        if (!onlineService && !largeStorage && customizableProfile)
          setTotal("17");
        if (onlineService && largeStorage && !customizableProfile)
          setTotal("18");
        if (onlineService && !largeStorage && customizableProfile)
          setTotal("18");
        if (!onlineService && largeStorage && customizableProfile)
          setTotal("19");
        if (onlineService && largeStorage && customizableProfile)
          setTotal("20");
      }
    } else {
      if (payment === "Arcade") {
        if (!onlineService && !largeStorage && !customizableProfile)
          setTotal("90");
        if (onlineService && !largeStorage && !customizableProfile)
          setTotal("100");
        if (largeStorage && !onlineService && !customizableProfile)
          setTotal("110");
        if (customizableProfile && !onlineService && !largeStorage)
          setTotal("110");
        if (onlineService && largeStorage && !customizableProfile)
          setTotal("120");
        if (onlineService && customizableProfile && !largeStorage)
          setTotal("120");
        if (largeStorage && customizableProfile && !onlineService)
          setTotal("130");
        if (onlineService && largeStorage && customizableProfile)
          setTotal("140");
      }
      if (payment === "Advanced") {
        if (!onlineService && !largeStorage && !customizableProfile)
          setTotal("120");
        if (onlineService && !largeStorage && !customizableProfile)
          setTotal("130");
        if (!onlineService && largeStorage && !customizableProfile)
          setTotal("140");
        if (!onlineService && !largeStorage && customizableProfile)
          setTotal("140");
        if (onlineService && largeStorage && !customizableProfile)
          setTotal("150");
        if (onlineService && !largeStorage && customizableProfile)
          setTotal("150");
        if (!onlineService && largeStorage && customizableProfile)
          setTotal("160");
        if (onlineService && largeStorage && customizableProfile)
          setTotal("170");
      }
      if (payment === "Pro") {
        if (!onlineService && !largeStorage && !customizableProfile)
          setTotal("150");
        if (onlineService && !largeStorage && !customizableProfile)
          setTotal("160");
        if (!onlineService && largeStorage && !customizableProfile)
          setTotal("170");
        if (!onlineService && !largeStorage && customizableProfile)
          setTotal("170");
        if (onlineService && largeStorage && !customizableProfile)
          setTotal("180");
        if (onlineService && !largeStorage && customizableProfile)
          setTotal("180");
        if (!onlineService && largeStorage && customizableProfile)
          setTotal("190");
        if (onlineService && largeStorage && customizableProfile)
          setTotal("200");
      }
    }
  };
  const planToggle = () => {
    if (plan === "monthly") {
      setPlan("annual");
    } else {
      setPlan("monthly");
    }
  };
  return (
    <div className="h-full w-full bg-gray-200 font-pops flex justify-center items-center">
      <div className="w-[50%] h-[70%] bg-white p-3 gap-5 rounded-2xl flex justify-center items-center">
        <div className="relative w-[35%] h-full rounded-xl overflow-hidden">
          <img
            src={FormBackground}
            alt="form background"
            className="z-[0] absolute w-full h-full object-cover"
          />
          <div className="flex flex-col gap-5 py-10 px-5">
            {links.map((link) => (
              <div
                key={link.id}
                className="flex gap-5 tracking-wider cursor-default z-[10000] items-center justify-center"
              >
                <div
                  className={`h-10 w-10 rounded-full transition-all duration-300 flex justify-center items-center ${
                    activeStep === link.id
                      ? `bg-sky-200 text-black`
                      : `text-white border-white border-2`
                  } font-bold`}
                >
                  {link.id}
                </div>
                <div className="flex flex-col w-[60%]">
                  <div className="text-gray-300 text-xs">{`STEP ${link.id}`}</div>
                  <div className="text-white text-sm font-bold">
                    {link.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[75%] h-full px-10 py-10 flex flex-col gap-2">
          {activeStep === 1 && (
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-sky-950">
                Personal Info
              </div>
              <div className="font-semibold text-sm mt-3 text-gray-400">
                Please provide your name, email address, and phone number.
              </div>
              <form
                className="flex flex-col gap-5 mt-5"
                onSubmit={() => {
                  if (name !== "" && email !== "" && phone !== "") {
                    setActiveStep(2);
                  }
                }}
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm text-sky-900 font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Vanessa Mint"
                    className="rounded-lg border-2 text-sky-900 font-semibold text-sm placeholder:text-sm px-4 py-2 cursor-pointer border-gray-300 hover:border-purple-500  transition duration-300 ease-in-out"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-sky-900 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. vanessamint@gmail.com"
                    className="rounded-lg border-2 px-4 py-2 text-sm text-sky-900 font-semibold placeholder:text-sm cursor-pointer border-gray-300 hover:border-purple-500  transition duration-300 ease-in-out"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm text-sky-900 font-semibold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +1 234 567 890"
                    className="rounded-lg border-2 px-4 py-2 text-sm text-sky-900 font-semibold placeholder:text-sm cursor-pointer border-gray-300 hover:border-purple-500  transition duration-300 ease-in-out"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button
                    className="text-white bg-sky-900 active:scale-95 hover:bg-sky-800 font-bold px-5 py-2 rounded-lg"
                    type="submit"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            </div>
          )}
          {activeStep === 2 && (
            <div className="flex flex-col h-full">
              <div className="text-3xl font-bold text-sky-950">
                Select your plan
              </div>
              <div className="font-semibold text-sm mt-3 text-gray-400">
                You have the option of monthly or yearly billing.
              </div>
              <form
                onSubmit={() => setActiveStep(3)}
                className="flex flex-col gap-5 mt-5"
              >
                {plan === "monthly" ? (
                  <div className="grid grid-cols-3 gap-3 h-[10rem] w-full">
                    {paymentMonthly.map((plan) => (
                      <div
                        className={`h-full justify-between transition-all duration-300 border-2 ${
                          payment === plan.id
                            ? `border-purple-500`
                            : `border-gray-300`
                        } hover:border-purple-500 ${
                          payment === plan.id && `bg-gray-200`
                        } rounded-xl cursor-pointer flex-col w-full flex p-3`}
                        key={plan.id}
                        onClick={() => setPayment(plan.id)}
                      >
                        <img
                          src={plan.logo}
                          alt={plan.name}
                          className="w-10 h-10"
                        />
                        <div className="flex flex-col gap-2">
                          <div className="text-sm font-bold text-sky-950">
                            {plan.id}
                          </div>
                          <div className="text-sm font-semibold text-gray-500">
                            {plan.cost}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3 h-[10rem] w-full">
                    {paymentAnnual.map((plan) => (
                      <div
                        className={`h-full justify-between transition-all duration-300 border-2 ${
                          payment === plan.id
                            ? `border-purple-500`
                            : `border-gray-300`
                        } hover:border-purple-500 ${
                          payment === plan.id && `bg-gray-200`
                        } rounded-xl cursor-pointer flex-col w-full flex p-3`}
                        key={plan.id}
                        onClick={() => setPayment(plan.id)}
                      >
                        <img
                          src={plan.logo}
                          alt={plan.name}
                          className="w-10 h-10"
                        />
                        <div className="flex flex-col gap-2">
                          <div className="text-sm font-bold text-sky-950">
                            {plan.id}
                          </div>
                          <div className="text-sm font-semibold text-gray-500">
                            {plan.cost}
                          </div>
                          <div className="text-xs text-sky-950">
                            2 months free
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className=" w-full h-16 flex justify-center items-center gap-3 bg-gray-200 rounded-xl">
                  <div className="text-sm">Monthly</div>
                  <div
                    className={`w-10 h-5 p-1 rounded-full cursor-pointer bg-sky-950 flex ${
                      plan === "monthly" ? `justify-start` : `justify-end`
                    } items-center`}
                    onClick={() => {
                      planToggle();
                      setPayment("Arcade");
                    }}
                  >
                    <div className="h-4 w-4 rounded-full bg-white" />
                  </div>
                  <div className="text-sm">Yearly</div>
                </div>
                <div className="w-full mt-10 flex justify-between items-center">
                  <button
                    onClick={() => {
                      setPayment("Arcade");
                      setPlan("monthly");
                      setName("");
                      setEmail("");
                      setPhone("");
                      setActiveStep(1);
                    }}
                    className="text-gray-400 font-bold"
                  >
                    Go Back
                  </button>
                  <button
                    className="text-white bg-sky-900 font-bold px-5 py-2 rounded-lg"
                    type="submit"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            </div>
          )}
          {activeStep === 3 && (
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-sky-950">
                Pick add-ons
              </div>
              <div className="font-semibold text-sm mt-3 text-gray-400">
                Add-ons help enhance your gaming experience.
              </div>
              <form
                onSubmit={() => {
                  setActiveStep(4);
                  calculateTotal();
                }}
                className="h-full mt-5 w-full"
              >
                <div className="h-full w-full flex flex-col gap-2">
                  <div
                    className={`w-full px-3 h-20 flex transition-all duration-300 items-center cursor-pointer gap-5 justify-center rounded-xl border-2 ${
                      !onlineService
                        ? `border-gray-200`
                        : `border-purple-500 bg-gray-100`
                    } hover:border-purple-500`}
                    onClick={() => setOnlineService(!onlineService)}
                  >
                    <div className="flex justify-center items-center">
                      <div
                        className={`${
                          onlineService
                            ? `bg-purple-500`
                            : `border-2 border-gray-300`
                        } h-5 w-5 transition-all duration-300 rounded p-1`}
                      >
                        {onlineService && (
                          <svg
                            fill="#ffffff"
                            width="100%"
                            height="100%"
                            viewBox="0 0 1920 1920"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
                              fillRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="w-[80%] h-full flex justify-between items-center">
                      <div className="flex flex-col gap-1">
                        <div className="font-bold text-sky-900">
                          Online Service
                        </div>
                        <div className="text-sm font-semibold text-gray-400">
                          Access to multiplayer games
                        </div>
                      </div>
                      <div className="text-sm text-purple-700 font-semibold">
                        +$1/mo
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-full px-3 h-20 flex transition-all duration-300 items-center cursor-pointer gap-5 justify-center rounded-xl border-2 ${
                      !largeStorage
                        ? `border-gray-200`
                        : `border-purple-500 bg-gray-100`
                    } hover:border-purple-500`}
                    onClick={() => setLargeStorage(!largeStorage)}
                  >
                    <div className="flex justify-center items-center">
                      <div
                        className={`${
                          largeStorage
                            ? `bg-purple-500`
                            : `border-2 border-gray-300`
                        } h-5 w-5 rounded transition-all duration-300 p-1`}
                      >
                        {largeStorage && (
                          <svg
                            fill="#ffffff"
                            width="100%"
                            height="100%"
                            viewBox="0 0 1920 1920"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
                              fillRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="w-[80%] h-full flex justify-between items-center">
                      <div className="flex flex-col gap-1">
                        <div className="font-bold text-sky-900">
                          Larger Storage
                        </div>
                        <div className="text-sm font-semibold text-gray-400">
                          Extra 1TB of cloud save
                        </div>
                      </div>
                      <div className="text-sm text-purple-700 font-semibold">
                        +$2/mo
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-full px-3 h-20 flex transition-all duration-300 items-center cursor-pointer gap-5 justify-center rounded-xl border-2 ${
                      !customizableProfile
                        ? `border-gray-200`
                        : `border-purple-500 bg-gray-100`
                    } hover:border-purple-500`}
                    onClick={() => setCustomizableProfile(!customizableProfile)}
                  >
                    <div className="flex justify-center items-center">
                      <div
                        className={`${
                          customizableProfile
                            ? `bg-purple-500`
                            : `border-2 border-gray-300`
                        } h-5 w-5 rounded transition-all duration-300 p-1`}
                      >
                        {customizableProfile && (
                          <svg
                            fill="#ffffff"
                            width="100%"
                            height="100%"
                            viewBox="0 0 1920 1920"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
                              fillRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="w-[80%] h-full flex justify-between items-center">
                      <div className="flex flex-col gap-1">
                        <div className="font-bold text-sky-900">
                          Customizable Profile
                        </div>
                        <div className="text-sm font-semibold text-gray-400">
                          Custom theme on your profile
                        </div>
                      </div>
                      <div className="text-sm text-purple-700 font-semibold">
                        +$2/mo
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <button
                    onClick={() => {
                      setActiveStep(2);
                    }}
                    className="text-gray-400 font-bold"
                  >
                    Go Back
                  </button>
                  <button
                    className="text-white bg-sky-900 active:scale-95 hover:bg-sky-800 font-bold px-5 py-2 rounded-lg"
                    type="submit"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            </div>
          )}
          {activeStep === 4 && (
            <div className="relative flex flex-col h-full">
              <div className="text-3xl font-bold text-sky-950">
                Finishing Up
              </div>
              <div className="font-semibold text-sm mt-3 text-gray-400">
                Double Check everything looks OK before confirming.
              </div>
              <div className="bg-gray-100 mt-5 flex flex-col rounded-lg overflow-hidden">
                <div className="flex justify-between px-5 py-3 items-center w-full">
                  <div className="flex flex-col">
                    <div className="font-bold text-sky-950">{`${payment} (${plan})`}</div>
                    <div
                      className="underline text-sm text-gray-400 mt-2 hover:text-purple-500 cursor-pointer"
                      onClick={() => setActiveStep(2)}
                    >
                      Change
                    </div>
                  </div>
                  <div className="text-sky-950 font-bold">
                    {plan === "monthly" ? (
                      <>
                        {payment === "Arcade" ? (
                          "$9/mo"
                        ) : (
                          <>{payment === "Advanced" ? "$12/mo" : "$15/mo"}</>
                        )}
                      </>
                    ) : (
                      <>
                        {payment === "Arcade" ? (
                          "$90/yr"
                        ) : (
                          <>{payment === "Advanced" ? "$120/yr" : "$150/yr"}</>
                        )}
                      </>
                    )}
                  </div>
                </div>
                {onlineService && (
                  <>
                    <div className="border-[0.5px] border-gray-200 w-full h-0" />
                    <div className="flex justify-between px-5 py-3 items-center w-full">
                      <div className="text-gray-400 font-semibold text-sm">
                        Online Service
                      </div>
                      <div className="text-sky-950 text-sm">+$1/mo</div>
                    </div>
                  </>
                )}
                {largeStorage && (
                  <>
                    <div className="border-[0.5px] border-gray-200 w-full h-0" />
                    <div className="flex justify-between px-5 py-3 items-center w-full">
                      <div className="text-gray-400 font-semibold text-sm">
                        Large Storage
                      </div>
                      <div className="text-sky-950 text-sm">+$2/mo</div>
                    </div>
                  </>
                )}
                {customizableProfile && (
                  <>
                    <div className="border-[0.5px] border-gray-200 w-full h-0" />
                    <div className="flex justify-between px-5 py-3 items-center w-full">
                      <div className="text-gray-400 font-semibold text-sm">
                        Customizable Profile
                      </div>
                      <div className="text-sky-950 text-sm">+$2/mo</div>
                    </div>
                  </>
                )}
              </div>
              <div className="w-full mt-5 flex justify-between items-center px-5">
                <div className="text-sm text-gray-400 font-semibold">
                  Total {`(per ${plan === "monthly" ? "month" : "year"})`}
                </div>
                <div className="font-semibold text-lg text-purple-500">{`+$${total}/${
                  plan === "monthly" ? "mo" : "yr"
                }`}</div>
              </div>
              <div className="absolute bottom-[-1em] w-full mt-7 flex justify-between items-center">
                <button
                  onClick={() => {
                    setActiveStep(3);
                  }}
                  className="text-gray-400 font-bold"
                >
                  Go Back
                </button>
                <button
                  className="text-white bg-sky-900 active:scale-95 hover:bg-sky-800 font-bold px-5 py-2 rounded-lg"
                  onClick={() => {
                    setShowFinalModal(true);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {showFinalModal && (
        <div className="fixed bg-[#00000060] z-[10000] backdrop-filter backdrop-blur-2xl h-screen w-screen top-0 left-0 flex flex-col gap-5 justify-center items-center">
          <Dashboard
            name={name}
            email={email}
            phone={phone}
            plan={plan}
            payment={payment}
            onlineService={onlineService}
            largeStorage={largeStorage}
            customizableProfile={customizableProfile}
            total={total}
          />
          <div className="w-full h-10 flex justify-center items-center">
            <div
              className="bg-sky-600 rounded-xl cursor-pointer hover:bg-sky-700 active:scale-95 text-white px-5 py-2"
              onClick={() => {
                setName("");
                setEmail("");
                setPhone("");
                setPlan("monthly");
                setPayment("Arcade");
                setOnlineService(false);
                setLargeStorage(false);
                setCustomizableProfile(false);
                setTotal("9");
                setShowFinalModal(false);
                window.location.reload();
              }}
            >
              Save and exit
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
