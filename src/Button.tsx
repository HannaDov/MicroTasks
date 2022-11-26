import React from 'react';

type ButtonPropsType={
    title:string
    callback:()=>void

}

export const Button = (props: ButtonPropsType) => {
    const OnClickHandler = () => {
        return (props.callback()
        )
    }
   /* const foo1 = () => {
        return (
            console.log(100200)
        )
    }
    const foo2 = (value: number) => {
        console.log(value)
    }*/
    return (
        <>
            <button onClick={OnClickHandler}>{props.title}</button>
           {/* <button onClick={(e) => OnClickHandler("Tiji")}>Chanel-2</button>
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>*/}

        </>
    )
}