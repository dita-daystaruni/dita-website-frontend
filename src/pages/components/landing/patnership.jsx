import React from 'react'

import {patners} from '../../../utils/patnerList';

const Patnership = () => {
  return (
    <section className="bg-gray-200 py-20 max-sm:py-10">
      <h3 className="font-bold text-2xl text-center py-10">Patnerships</h3>
      <p className="px-5 text-center leading-normal text-xl">
        Proud partners in the Daystar University Resource Lab for Technology and
        Computer Science: Microsoft, Google, IBM, Huawei and more!
      </p>
      <div className="flex justify-center mt-16">
        <ul className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
          {patners.map((patner) => (
            <li
              key={patner.id}
              className="flex items-center justify-center col-span-1"
            >
              <img
                src={patner.logo}
                alt={patner.name}
                className="object-contain w-24 h-24 hover:opacity-40 hover:cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Patnership