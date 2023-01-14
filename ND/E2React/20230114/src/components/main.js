import React from 'react';
import { useState } from 'react';

const Main = () => {
    // const id = useId();
    const [pvm, setPvm] = useState(21);
    const [sumBePvm, setSumBePvm] = useState(0);
    const [onlyPvm, setOnlyPvm] = useState(0);
    const [total, setTotal] = useState(0);

    const fnPvm = (e) => {
        console.log('fnPvm')
        let a = e.target.value;
        let b = sumBePvm;//Activ???
        let c = b * a / 100;
        let d = b * (a / 100 + 1);//Activ???
        setPvm(a);
        setSumBePvm(b);
        setOnlyPvm(c);
        setTotal(d);
    }

    const fnSumBePvm = (val) => {
        console.log('fnSumBePvm')
        let b = val;
        let a = pvm;
        let c = b * a / 100;
        let d = b * (a / 100 + 1);
        setSumBePvm(b);
        setOnlyPvm(c);
        setTotal(d);

        console.log(pvm + ' v/ ' + val + ' / ' + onlyPvm + ' / ' + total)
        console.log(pvm + ' v+/ ' + b + ' / ' + onlyPvm + ' / ' + total)
        console.log(pvm + ' / ' + sumBePvm + ' / ' + onlyPvm + ' / ' + total)
    }


    const fnTotal = (val) => {
        console.log('fnTotal')
        let d = val;
        let a = pvm;
        let b = d / (a / 100 + 1);
        let c = b * a / 100;
        //    setPvm(a);
        setSumBePvm(b);
        setOnlyPvm(c);
        setTotal(d);
    }




    return (
        <main>
            <form>

                <div className='col' style={{ alignItems: 'flex-end' }}>
                    <label>PVM tarifas</label>
                    <label>Suma (be PVM)</label>
                    <label>PVM suma</label>
                    <label>Bendra suma (su PVM) </label>
                </div>
                <div className='col'>
                    <select onChange={fnPvm} name="vat_percent" id="vat_percent">
                        <option value="21">21%</option>
                        <option value="9">9%</option>
                        <option value="5">5%</option>
                    </select>
                    <input onChange={(e) => fnSumBePvm(e.target.value)} type="text" id="sumBePvm" defaultValue={sumBePvm} />
                    <input type="text" id="sumPvm" disabled="disabled" defaultValue={onlyPvm} />
                    <input onChange={fnTotal} type="text" id="total" defaultValue={total} />
                </div>

            </form>

            <div>Įveskite sumą be PVM arba bendrą sumą (su PVM).</div>
        </main>
    );

}


// const handleForm = (e) => {
//     e.preventDefault();
//     if (document.querySelector('#text').value.trim().length === 0) return;
//     setTasks([...tasks, { name: document.querySelector('#text').value, done: false }]);
//     document.querySelector('#text').value = '';
// }

// const handleDone = (e, index) => {
//     tasks[index].done = !tasks[index].done;
//     setTasks([...tasks]);
// }



// const Main = () => {
//     const html =
//         <main>
//             <form>

//                 <div className='col' style={{ alignItems: 'flex-end' }}>
//                     <label>PVM tarifas</label>
//                     <label>Suma (be PVM)</label>
//                     <label>PVM suma</label>
//                     <label>Bendra suma (su PVM) </label>
//                 </div>
//                 <div className='col'>
//                     <select onChange={f} name="vat_percent" id="vat_percent">
//                         <option value="21">21%</option>
//                         <option value="9">9%</option>
//                         <option value="5">5%</option>
//                     </select> 
//                     <input onChange={f} type="text" id="sumBePvm" defaultValue={2} />
//                     <input type="text" id="sumPvm" defaultValue={''} disabled="disabled" />
//                     <input onChange={f} type="text" id="total" defaultValue={0} />
//                 </div>

//             </form>

//             <div>Įveskite sumą be PVM arba bendrą sumą (su PVM).</div>
//         </main>
//     return html;
// }
export default Main;