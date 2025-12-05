import React from "react";
function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center min-h-screen">
        <div className="flex items-center justify-center w-[60%] h-[37vh]">
          <p className="text-[25px] text-center">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </p>
        </div>
        <div className="flex items-center justify-center text-[17px] gap-8 text-gray-800 border-t">
          <div className="w-[60%] flex justify-center mt-24 gap-12">
            <div className="w-[50%]">
              <p>
                We kick-started operations on the 15th of August, 2010 with the
                goal of breaking all barriers that traders and investors face in
                India in terms of cost, support, and technology.
              </p>
              <br />
              <p>
                Today, our disruptive pricing models and in-house technology
                have made us the biggest stock broker in India.
              </p>
              <br />
              <p>
                Over 1.6+ crore clients place billions of orders every year
                through our powerful ecosystem of investment platforms,
                contributing over 15% of all Indian retail trading volumes.
              </p>
            </div>
            <div className="w-[50%]">
              <p>
                In addition, we run a number of popular open online educational
                and community initiatives to empower retail traders and
                investors.
              </p>
              <br />
              <p>
                <a href="" className="text-blue-500">Rainmatter</a>, our fintech fund and incubator, has invested in
                several fintech startups with the goal of growing the Indian
                capital markets.
              </p>
              <br />
              <p>
                And yet, we are always up to something new every day. Catch up
                on the latest updates on our <a href="" className="text-blue-500">blog</a> or see what the media is <a href="" className="text-blue-500">saying about</a> us or learn more about our business and product <a href="" className="text-blue-500">philosophies</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
