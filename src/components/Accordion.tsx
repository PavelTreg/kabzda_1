import React from 'react';
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
   }
function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody collapsed ={props.collapsed} />
    </div>
}
type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>---{props.title} ----</h3>
    )

}
type AccordionBodyPropsType = {
    collapsed: boolean
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    if (props.collapsed === true) {
    return <select>
        <ul>
        <li> 1</li>
        <li> 2</li>
        <li> 3</li>
      </ul>
    </select>

}
    else {

    return <ul>
        <li> 1</li>
        <li> 2</li>
        <li> 3</li>
    </ul>
}
}

export default Accordion;
