import React from "react"

import Card from "./Card"

const SummaryCard = ({ vacantDays, conflictCount, conflictSubjects }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 my-8">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-bold">Summary</h1>
      
            <div className="flex-col items-center justify-center flex-grow gap-4 my-4">
            <Card
              color="text-red-500"
              title="Number of Conflict/s"
              value={conflictCount }
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 5v2m4-2v6m8-6v1M6 10v6m0 2.5v.5m4-.5v.5m0-5v2m4-3v2m0-10v5m4-1v4m-1.879 8.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L16.12 17.12m2.122 2.122l2.121 2.121"></path>
                </svg>
              }
            />
            <Card
              title="Vacant Day/s"
              value={""+vacantDays}
              color="text-green-500"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24">
                  <g fill="currentColor">
                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-5.25 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.5-1.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.5-1.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.5-1.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.5-1.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-1.5-3a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></path>
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75m13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5z"
                      clipRule="evenodd"></path>
                  </g>
                </svg>
              }
            />
            </div>
          </div>
        </div>
    
    </>
  )
}

export default SummaryCard
