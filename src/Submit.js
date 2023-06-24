import React, { useState } from 'react'

function Submit() {

    function handleChange(){
        console.log("clicked")
        setSubmit(
            <div className='text-center bg-backgroundC font-bold p-64 text-oliveGreen w-full h-4/12'>
                <h1 className='text-4xl italic '>Thank You.</h1>
                <h1 className='text-2xl italic '>Your submission has been recorded.</h1>
            </div>
        );
    };

    const form = [
        <div className='text-center bg-backgroundC font-bold py-12 text-oliveGreen '>

        <h1 className='text-4xl italic '>Submit a New Accessible Location in New York City</h1>
        <form className='text-xl pt-8'>
            <label>Your Name</label>
            <br/>
            <input type="text" />
            <br/><br/>

            <label>Your Email Address </label>
            <br/>
                <input type="email" />
            
            <br/><br/>

            <label>Complete Location Address</label>
            <br/>
                <input type="text" />
            <br/><br/>

            <label>Complete Location Name</label>
            <br/>
                <input type="text" />
            <br/><br/>

            <label>Location Contact Number</label>
            <br/>
                <input type="text" />
            <br/><br/>

            <fieldset id="group1">
            <label>Does this Location have Wheelchair Accesiblity?</label>
            <br></br>
                <input type="radio" id="yes1" name="group1" value="Yes"/>
                <label htmlFor="yes1">Yes</label><br></br>
                <input type="radio" id="no1" name="group1" value="No"/>
                <label htmlFor="no1">No</label><br></br>
            </fieldset>

            <fieldset id="group2">
            <label>Does this Location have Disability Parking?</label>
            <br/>
            <input type="radio" id="yes2" name="group2" value="Yes"/>
                <label htmlFor="yes2">Yes</label><br></br>
                <input type="radio" id="no2" name="group2" value="No"/>
                <label htmlFor="no2">No</label><br></br>
            </fieldset>

            <button type='submit' className='bg-oliveGreen text-white px-12 py-2 m-4 rounded-full' onClick={handleChange}>Submit</button>
        </form>
        </div>
]


    const submissionContent = [
        <div className='text-center bg-backgroundC font-bold p-64 text-oliveGreen w-full h-4/12'>
            <h1 className='text-4xl italic '>Thank You.</h1>
            <h1 className='text-2xl italic '>Your submission has been recorded.</h1>
        </div>
    ]

    const [submit, setSubmit] = useState(form[0]);

  return (
    <div>
        {submit}
    </div>
    // <div className='text-center bg-backgroundC font-bold py-12 text-oliveGreen '>

    //     <h1 className='text-4xl italic '>Submit a New Accessible Location in New York City</h1>
    //     <form className='text-xl pt-8'>
    //         <label>Your Name</label>
    //         <br/>
    //         <input type="text" />
    //         <br/><br/>

    //         <label>Your Email Address </label>
    //         <br/>
    //             <input type="email" />
            
    //         <br/><br/>

    //         <label>Complete Location Address</label>
    //         <br/>
    //             <input type="text" />
    //         <br/><br/>

    //         <label>Complete Location Name</label>
    //         <br/>
    //             <input type="text" />
    //         <br/><br/>

    //         <label>Location Contact Number</label>
    //         <br/>
    //             <input type="text" />
    //         <br/><br/>

    //         <label>Does this Location have Wheelchair Accesiblity?</label>
    //         <br></br>
    //             <input type="radio" id="yes" name="fav_language" value="Yes"/>
    //             <label for="yes">Yes</label><br></br>
    //             <input type="radio" id="no" name="fav_language" value="No"/>
    //             <label for="no">No</label><br></br>

    //         <label>Does this Location have Disability Parking?</label>
    //         <br/>
    //         <input type="radio" id="yes" name="fav_language" value="Yes"/>
    //             <label for="yes">Yes</label><br></br>
    //             <input type="radio" id="no" name="fav_language" value="No"/>
    //             <label for="no">No</label><br></br>

    //         <button type='submit' className='bg-oliveGreen text-white px-12 py-2 m-4 rounded-full' onClick={setSubmit}>Submit</button>
    //     </form>
    // </div>
  )
}


export default Submit