"use client"
import Image from 'next/image'
import 'tailwindcss/tailwind.css';
import { useState,useEffect} from 'react';

function getElementWidth() {
    const element = document.getElementById('element-to-measure');
    const inputWidt = document.getElementById('inputWidth');

    const width = element.offsetWidth;
    inputWidt.style.width = width+'px';
    const width2 = inputWidt.offsetWidth;

    console.log('Element width:', width + " InpuWith :",width2);

}

export default function Calculator() {
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        setExpression((prevEpression)=>prevEpression+value);
    };

    const clearDisplay = () => {
        setExpression('');
    };

    const calculateResult = () => {
        try {
            const result = eval(expression);
            setExpression(result.toString());
        } catch (error) {
            setExpression('Error');
        }
    };

    useEffect(() => {
        getElementWidth();
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">

            <div className='keeper flex-col items-center justify-center text-2xl rounded-2xl    '>
                <input onChange={()=> getElementWidth()} id='inputWidth' className='bg-transparent  text-white w-auto  text-2xl lg:w-auto  rounded-t-2xl'  type="text"  value={expression} required readOnly />
                <div  onChange={()=> getElementWidth()}  className='numbers text-black  bg-transparent text-2xl rounded-2xl '>

                    <div id="element-to-measure">
                        <button  onClick={() => handleButtonClick('7')}>7</button>
                        <button   onClick={() => handleButtonClick('8')}>8</button>
                        <button  onClick={() => handleButtonClick('9')}>9</button>
                        <button className=' expression'  onClick={() => handleButtonClick('+')}>+</button>
                    </div>
                    <div>
                        <button  onClick={() => handleButtonClick('4')}>4</button>
                        <button  onClick={() => handleButtonClick('5')}>5</button>
                        <button   onClick={() => handleButtonClick('6')}>6</button>
                        <button className=' expression'  onClick={() => handleButtonClick('-')}>-</button>
                    </div>
                    <div>
                        <button  onClick={() => handleButtonClick('1')}>1</button>
                        <button onClick={() => handleButtonClick('2')}>2</button>
                        <button  onClick={() => handleButtonClick('3')}>3</button>
                        <button className=' expression'  onClick={() => handleButtonClick('*')}>*</button>
                    </div>
                    <div>
                        <button  onClick={() => handleButtonClick('0')}>0</button>
                        <button  onClick={() => handleButtonClick('.')}>.</button>
                        <button className=' bg-[#ffa500] result'  onClick={calculateResult}>=</button>
                        <button className=' expression'  onClick={() => handleButtonClick('/')}>/</button>
                    </div>
                    <div>
                        <button className=' expression c'  onClick={clearDisplay}>C</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
