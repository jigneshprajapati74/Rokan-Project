import React from "react";

function Brokerage() {
  return (
    <div className="flex justify-center">
      <div className="w-[72%]">
        {/* Charges for Account Opening */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Charges for Account Opening
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg table-fixed">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
              </colgroup>
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Type of Account</th>
                  <th className="text-left p-3">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">Online account</td>
                  <td className="p-3 text-green-600 font-semibold">FREE</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">Offline account</td>
                  <td className="p-3 text-green-600 font-semibold">FREE</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">NRI account (offline only)</td>
                  <td className="p-3">₹500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </td>
                  <td className="p-3">₹500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Demat AMC (Annual Maintenance Charge) */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Demat AMC (Annual Maintenance Charge)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg table-fixed">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
              </colgroup>
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Value of Holdings</th>
                  <th className="text-left p-3">AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">Up to ₹4 lakh</td>
                  <td className="p-3 text-green-600 font-semibold">FREE</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">₹4 lakh - ₹10 lakh</td>
                  <td className="p-3">
                    ₹100 per year, charged quarterly
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">Above ₹10 lakh</td>
                  <td className="p-3">
                    ₹300 per year, charged quarterly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Brokerage;
