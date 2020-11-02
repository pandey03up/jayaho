import React,{useState} from 'react';
import ratio from '../../static/ratio.png'

import './Main.css';
const Main = () =>{
    const [i,set_i] = useState(0)
    const [option,set_option] = useState('definition')
    const [questions,set_questions] = useState([
        {
            num: 10,
            den: 8,
            options : [
                {
                    num : 5,
                    den : 2,
                    solution : false
                },
                {
                    num : 5,
                    den : 4,
                    solution : true
                },
                {
                    num : 5,
                    den : 6,
                    solution : false
                },
                {
                    num : 5,
                    den : 8,
                    solution : false
                }
            ]
        },
        {
            num: 20,
            den: 25,
            options : [
                {
                    num : 4,
                    den : 2,
                    solution : false
                },
                {
                    num : 4,
                    den : 7,
                    solution : false
                },
                {
                    num : 4,
                    den : 5,
                    solution : true
                },
                {
                    num : 4,
                    den : 9,
                    solution : false
                }
            ]
        },
        {
            num: 21,
            den: 27,
            options : [
                {
                    num : 7,
                    den : 6,
                    solution : false
                },
                {
                    num : 7,
                    den : 9,
                    solution : true
                },
                {
                    num : 8,
                    den : 9,
                    solution : false
                },
                {
                    num : 7,
                    den : 10,
                    solution : false
                }
            ]
        }
    ])
    const check = (solution) =>{
        if(solution === true){
            set_i(i+1)
        }
    }
    return(
        <div style = {{width:window.innerWidth}}>
            <div id = 'main_heading'>
                <h2>Ratio</h2>
                <select id='toggle' onChange = {(event)=> set_option(event.target.value)}>
                    <option value = 'definition'>Definition</option>
                    <option value = 'game'>Let's Play</option>
                </select>
            </div>
            {
                option === 'definition'? <div>
                    <section id = 'definition'>
                    <div id='full_definition'>
                        In mathematics, a ratio indicates how many times one number contains another.
                        The numbers in a ratio may be quantities of any kind, such as counts of people 
                        or objects, or such as measurements of lengths, weights, time, etc. In most 
                        contexts, both numbers are restricted to be positive.
                        <br />
                        The ratio of numbers A and B can be expressed as:<br />
                        <ul>
                            <li>the ratio of A to B</li>
                            <li>A∶B</li>
                            <li>A is to B</li>
                            <li>a fraction with A as numerator and B as denominator that represents the quotient
                            (i.e., A divided by B, or A/B). This can be 
                            expressed as a simple or a decimal fraction, or as a percentage, etc.</li>
                        </ul>
                        <b>A colon (:) is often used in place of the ratio symbol</b>
                    </div>
                    <div id = 'image'>
                        <img src = {ratio} alt = "ratio" width="100%"/>
                    </div>
                </section>
                <section id='calculation'>
                    <h3>Calculation</h3>
                    If A and B are 2 numbers then ratio of A to B is: <br />
                    <div className = 'equation'>
                        <span >A:B = A/B</span> <br />
                    </div>
                    always try to minimize to ratio as much as possible.
                </section>
                <section id='properties'>
                    <h3>Properties</h3>
                    <ul>
                        <li>We express a ratio only between two quantities of the same units. </li>
                        <li>We use the symbol ‘:’ to denote ratios.</li>
                        <li>We call two ratios as equivalent if their corresponding fractions are equivalent.</li>
                        <li>For ratios written as a : b, the first term i.e. a is known as the antecedent and the second term i.e. b is known as the consequent.</li>
                        <li>The order of the terms in ratios is very important i.e. the positions of antecedent and consequent are not interchangeable.</li>
                        <li>If more than one like quantities are expressed in a ratio format, the resultant is termed as a Continued Ratios or a Compassion between the quantities. It can simply be represented as a : b : c : d…</li>
                        <li><b>By converting the ratios to decimal numbers or percentages, you can compare them on a level field.</b></li>
                    </ul>
                </section>
            </div> :
            <div style = {{width:window.innerWidth}}>
                <section id="play_game">
                    <h3>Let's Play</h3>

                    {
                        i !== 3 ? <div className = 'game_area'>
                        <section id = 'area'>
                            <div className = 'options'>
                                {
                                    questions[i].options.map(option=>{
                                        return(
                                            <div className = 'individual' onClick = {()=> check(option.solution)}>
                                            {option.num}/{option.den}
                                        </div>
                                        )
                                    })
                                }
                            </div>
                            <div className = 'options'>
                                <div className = 'individual'>{questions[i].num}/{questions[i].den}</div>
                            </div>
                        </section>
                    </div> : 
                    <div className = "game_area">Well Done</div>
                    }
                    
                </section>
            </div> 
            }
        </div>
    )
}
export default Main;