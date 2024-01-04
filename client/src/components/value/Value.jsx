import React, { useState } from 'react'
import {
    Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion.jsx'

const Value = () => {
  return (
    <section>
        <div className='paddings innerWidth flex justify-center gap-10 items-center lg:flex-nowrap flex-wrap'>
            {/* Left Section */}
            <div >
                <div className='image-container  '>
                    <img src="./value.png" alt="" />
                </div>
            </div>

            {/* Right Side */}
            <div className='flexColStart gap-2 '>
                <span className='text-orange-400 text-xl'>Our Value</span>
                <span className='text-slate-600 text-3xl font-bold'>Value We Provide </span>
                <span className='text-slate-500 text-xl '>
                    We at Estate Pirates pride ourselves in our services.
                    <br />
                    We believe ones home should bring a sense of peace.
                </span>

                <Accordion
                    className='accordion mt-2 border-none text-center'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                >
                    {
                        data.map((item,i) => {
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem className={`accordionItem bg-white border-2 overflow-hidden rounded-lg mb-5 ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flex justify-between items-center flex-wrap cursor-pointer p-2 w-full '>
                                            <AccordionItemState>
                                                { ({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>

                                            <div className="flexCenter icon p-2 rouned-lg text-blue-500">{item.icon}</div>
                                            <p className='text-slate-600 text-3xl font-bold text-center'>
                                                {item.heading}
                                            </p>
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='secondaryText break-all'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            );
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value