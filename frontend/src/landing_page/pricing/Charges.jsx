import React from "react";

function Charges() {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="flex flex-col justify-between w-[72%]">
        <h2 className="text-2xl font-medium text-black">Charges explained</h2>
        <div className="flex justify-between mt-6">
          <section className="flex flex-col text-gray-600 w-[48%]">
            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Securities/Commodities transaction tax
              </h3>
              <p>
                Tax by the government when transacting on the exchanges. Charged
                as above on both buy and sell sides when trading equity
                delivery. Charged only on selling side when trading intraday or
                on F&O.
              </p>
              <p>
                When trading at Rokan, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Transaction/Turnover Charges
              </h3>
              <p>
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
              </p>
              <p>
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f 01.01.2016.
              </p>
              <p>
                BSE has revised transaction charges in SS and ST groups to
                ₹1,00,000 per crore of gross turnover.
              </p>
              <p>
                BSE has revised transaction charges for group A, B and other non
                exclusive scrips at ₹375 per crore of turnover on flat rate
                basis w.e.f. December 1, 2022.
              </p>
              <p>
                BSE has revised transaction charges in M, MT, TS and MS groups
                to ₹275 per crore of gross turnover.
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">Call & trade</h3>
              <p>
                Additional charges of ₹50 per order for orders placed through a
                dealer at Rokan including auto square off orders.
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">Stamp charges</h3>
              <p>
                Stamp charges by the Government of India as per the Indian Stamp
                Act of 1899 for transacting in instruments on the stock
                exchanges and depositories.
              </p>
            </div>
            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                NRI brokerage charges
              </h3>
              <ul className="space-y-2 list-inside list-disc">
                <li>
                  For a non-PIS account, 0.5% or ₹50 per executed order for
                  equity and F&O (whichever is lower).
                </li>
                <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Account with debit balance
              </h3>
              <p>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </p>
            </div>
            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Charges for Investor's Protection Fund Trust (IPFT) by NSE
              </h3>
              <ul className="space-y-2 list-inside list-disc">
                <li>
                  Equity and Futures - ₹10 per crore + GST of the traded value.
                </li>
                <li>
                  Options - ₹50 per crore + GST traded value (premium value).
                </li>
                <li>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Margin Trading Facility (MTF)
              </h3>
              <ul className="space-y-2 list-inside list-disc">
                <li>
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li>
                  MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li>
                  MTF pledge charge: ₹15 + GST per pledge and unpledge request
                  per ISIN.
                </li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col text-gray-600 w-[48%]">
            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                GST (Goods and Services Tax)
              </h3>
              <p>
                Tax levied by the government on the services rendered. 18% of
                (brokerage + SEBI charges + transaction charges).
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">SEBI Charges</h3>
              <p>
                Charged at ₹10 per crore + GST by the Securities and Exchange
                Board of India for regulating the markets.
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                DP (Depository Participant) Charges
              </h3>
              <p>
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Rokan fee + ₹2.34 GST)
                is charged on the trading account ledger when stocks are sold,
                irrespective of quantity.
              </p>
              <p>
                Female demat account holders (as first holder) will enjoy a
                discount of ₹0.25 per transaction on the CDSL fee.
              </p>
              <p>
                Debit transactions of mutual funds & bonds get an additional
                discount of ₹0.25 on the CDSL fee.
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">Pledging Charges</h3>
              <p>₹30 + GST per pledge request per ISIN.</p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                AMC (Account Maintenance Charges)
              </h3>
              <p>
                For BSDA demat account: Zero charges if the holding value is
                less than ₹4,00,000. To learn more about BSDA,{" "}
                <a href="#" className="text-blue-600 underline">
                  Click here
                </a>
                .
              </p>
              <p>
                For non-BSDA demat accounts: ₹300/year + 18% GST charged
                quarterly (90 days). To learn more about AMC,{" "}
                <a href="#" className="text-blue-600 underline">
                  Click here
                </a>
                .
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Corporate Action Order Charges
              </h3>
              <p>
                ₹20 plus GST will be charged for OFS / buyback / takeover /
                delisting orders placed through Console.
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Off-Market Transfer Charges
              </h3>
              <p>₹25 per transaction.</p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Physical CMR Request
              </h3>
              <p>
                First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
                for subsequent requests.
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Payment Gateway Charges
              </h3>
              <p>₹9 + GST (Not levied on transfers done via UPI).</p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className="mt-4 text-lg">
                Delayed Payment Charges
              </h3>
              <p>
                Interest is levied at 18% a year or 0.05% per day on the debit
                balance in your trading account.{" "}
                <a href="#" className="text-blue-600 underline">
                  Learn more
                </a>
                .
              </p>
            </div>

            <div className="text-sm space-y-2">
              <h3 className=" mt-4 text-lg">
                Trading using 3-in-1 Account with Block Functionality
              </h3>
              <ul className=" list-inside list-disc space-y-2">
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="text-gray-600 mt-6 space-y-4">
          <h3 className="text-lg">Disclaimer</h3>
          <p className="text-sm">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charges;
