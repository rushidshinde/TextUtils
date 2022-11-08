import React from 'react'

export default function AboutUs(props) {

  return (
    <div>
        <div className="container mt-5 pt-5" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
            <h1 className="mb-4">About</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
                        # TextUtils
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
                            <strong>TextUtils</strong> is a utility which can be used to manipulate the text in the way you want
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
                        # Upper Case
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
                            The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
                            To do this, you simply have to select the text that you need changing and pasting into the box above and then select the <strong>UPPER CASE</strong> tab.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
                            # Lower Case
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor : props.mode === 'light' ? '#f8f9fa' : '#071E3D', color : props.mode === 'light' ? '#071E3D' : '#ffffff'}}>
                            If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the <strong>lower case</strong> tab.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
