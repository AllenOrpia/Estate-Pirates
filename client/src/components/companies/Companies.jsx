import React from 'react'

const Companies = () => {
    return (
        <section className="companies-wrapper">
            <div className="companies-container paddings innerWidth flex justify-around items-center  flex-wrap">
                <img width={144} src="./prologis.png" alt="" />
                <img width={144} src="./tower.png" alt="" />
                <img width={144} src="./equinix.png" alt="" />
                <img width={144} src="./realty.png" alt="" />
            </div>
        </section>
    )
}

export default Companies