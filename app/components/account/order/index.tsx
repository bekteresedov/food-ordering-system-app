import React from "react";
import Title from "../../UI/title";

const Order = () => {
  return (
    <>
      <section>
        <div className="mb-20">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-4">
            Orders
          </Title>
          <div className="overflow-x-auto ">
            <div>
              <table className="bg-[#162A2D] w-full font-mont min-w-[800px] text-white">
                <thead className="uppercase text-xs">
                  <tr>
                    <th className="p-3"> id</th>
                    <th>Address</th>

                    <th>date</th>
                    <th>Total</th>
                    <th>status</th>
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
                    <td>lorem</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
