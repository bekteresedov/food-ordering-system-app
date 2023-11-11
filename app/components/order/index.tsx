import React from "react";
import Title from "../UI/title";
import Button from "../UI/button";
import Image from "next/image";
const Order = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 justify-between text-white min-h-[300px]">
          <div className="w-full py-20">
            <div className="w-11/12 mx-auto  overflow-x-auto ">
              <div>
                <table className="bg-[#162A2D] w-full font-mont min-w-[800px]">
                  <thead className="uppercase text-xs">
                    <tr>
                      <th className="p-3">Order id</th>
                      <th>Customer</th>
                      <th>Address</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-center bg-green dark:bg-dbg  text-[14px] hover:bg-red dark:hover:bg-red transition-all">
                    <tr>
                      <td className="flex items-center gap-1 justify-center p-4">
                        324242343
                      </td>
                      <td>Baktar Asad</td>
                      <td>Kurdamir</td>
                      <td>$ 34</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green dark:bg-dbg mt-10 flex justify-between items-center px-5 py-10">
                <div>12</div>
                <div>12</div>
                <div>12</div>
                <div>12</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
