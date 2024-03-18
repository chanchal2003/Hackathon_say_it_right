import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {}

const FAQs = (props: Props) => {
    return (
        <>
            <div className='m-auto w-[510px] text-gray-600 mb-5'>
                <h1 className="w-[120px] m-auto text-5xl font-semibold">FAQ's</h1>
                <p className='text-xl pt-4 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Accordion type="single" collapsible className="w-1/2 m-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='ml-5'>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='ml-5'>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='ml-5'>Is it animated?</AccordionTrigger>
                    <AccordionContent className='ml-5'>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className='ml-5'>Is it animated?</AccordionTrigger>
                    <AccordionContent className='ml-5'>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className='ml-5'>Is it animated?</AccordionTrigger>
                    <AccordionContent className='ml-5'>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default FAQs;