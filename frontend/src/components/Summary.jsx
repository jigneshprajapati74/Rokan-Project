import React from "react";

function Summary() {
  return (
    <div className="w-full min-h-[70vh] px-6 mt-8">
      <h6 className="mb-4 text-lg font-semibold border-b py-3">Hi, User!</h6>

      <div className="border-b py-4">
        <div className="mt-8 w-[80%]">
          <h3 className="mb-6 text-base font-semibold">Equity</h3>

          <div className="flex justify-between">
            <div className="flex flex-col justify-center gap-4">
              <h3 className="text-2xl">3.74k</h3>
              <p>Margin available</p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <p>
                Margins used <span>0</span>{" "}
              </p>
              <p>
                Opening balance <span>3.74k</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-[80%]">
        <h3 className="text-base font-semibold">Holdings (13)</h3>

        <div className="flex justify-between mt-6">
          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-2xl text-green-600">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&amp;L</p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
