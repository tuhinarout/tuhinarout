import React from 'react'
import { featuresData } from './Data'
import Card from './Card'
import Title from '../Title'

const Feathures = () => {
  return (
    <div>
        <section
      id="features"
      className="w-full py-4 px-10"
    >
      <Title title="Skills" des="What I Learn" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-20 text-white">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
    </div>
  )
}

export default Feathures