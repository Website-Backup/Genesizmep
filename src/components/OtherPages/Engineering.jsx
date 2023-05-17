import React from 'react'

const Engineering = () => {


  if (window.location.pathname=='/hvac'){
    return(
        <div className='flex flex-col justify-center items-center gap-4 py-10'>
            <h1 className='text-5xl'>HVAC</h1>
            <ul className='flex flex-col gap-3 text-xl px-10' style={{ listStyleType: 'square' }}>
                <li>Detailed study before the design execution with architectural drawing.</li>
                <li>Design for air condition system and heat load calculations to reduce
the building loads without affecting the basic concepts.</li>
                <li>Study the interior layouts in depth before planning the ducts and pipes.</li>
                <li>Design of VAVs and VFD drives for air controlling.</li>
                <li>Design for exhaust system. </li>
                <li>Design of non central and central ac plant</li>
                <li>Design of VRV/VRF systems</li>
                <li>Study of refrigerant using for different plants</li>
                <li>Estimation/budget planning and tender documents</li>
                <li>Testing and commissioning with proper documentation and service
warranty details. Frequent project inspection and report making.</li>
            </ul>
        </div>

    )

  }


  if (window.location.pathname=='/fireprotection'){
    return(
        <div className='flex flex-col justify-center items-center gap-4 py-10'>
            <h1 className='text-5xl'>FIRE PROTECTION</h1>
            <ul className='flex flex-col gap-3 text-xl px-10' style={{ listStyleType: 'square' }}>
                <li>Detailed design as per NBC and check list norms.</li>
                <li>Design of fire hydrant and plant rooms.</li>
                <li>Design of required size of fire duct and staircase details as per norms. </li>
                <li>Design and sizing of fire fighting sump, overhead tank with location. </li>
                <li>Detailed design and selection of sprinklers and pipes.</li>
                <li>Design of fire fighting hydraulic calculation and head loss.</li>
                <li>Design of pump head calculation for high-rise building</li>
                <li>Classification and selection of main pump, jocky pump and diesel pump.</li>
                <li>Design of fire alarm system and fire control panel.</li>
                <li>Design of different type detectors heat/smoke and flame.</li>
                <li>Design of PA system for different zones.</li>
                <li>Coordination with local bodies for approvals and NOC.</li>
            </ul>

        </div>

    )

    
  }


  if (window.location.pathname=='/electrical'){
    return(
        <div className='flex flex-col justify-center items-center gap-4 py-10'>
            <h1 className='text-5xl'>ELECTRICAL</h1>
            <ul className='flex flex-col gap-3 text-xl px-10' style={{ listStyleType: 'square' }}>
                <li>Detailed project study before the design.</li>
                <li>Design of HT/LT power distribution.</li>
                <li>Design of electrical room with location of RMU, Transformers,Generators, Panels and cable ducts with size</li>
                <li>Preparation of single line diagrams for Individual, Residential,Commercial and Hospitalized buildings.</li>
                <li>Selection and calculation of earthing according to the building.</li>
                <li>Description and design of solar power usages and solar invertors.</li>
                <li>Design of ups power for different areas.</li>
                <li>Lighting and power design based on energy saving mode.</li>
                <li>Emergency power backup design with AMF</li>
                <li>Design of lightening protection and surge arrestors.</li>
                <li>Voice /data and LV system design and services.</li>
                <li>Design of integrated building management systems.</li>
                <li>Feasibility study.</li>
                <li>Energy management system.</li>
                <li>Estimation design budget planning and tender documents.</li>
                <li>Design of lifts and escalators for different type of buildings.</li>
                <li>Description and type of cameras and locations with all other instruments.</li>
                <li>TV/Telephone and net working wiring details with crone marking and cabling. </li>
                <li>Design of nurse call networking system for specialty hospitals.</li>
                <li>Design of hydro moving system for specialized buildings.</li>
                <li>Design of medical gas system for hospitals with plant room details</li>
                <li>Testing and commissioning with proper documents.</li>
                <li>Coordination with local bodies for approvals and NOC.</li>
                <li>Frequent project inspection and making inspection reports.</li>
            </ul>

        </div>


    )
    
  }


  if (window.location.pathname=='/plumbing'){
    return(
            <div className='flex flex-col justify-center items-center gap-4 py-10'>
            <h1 className='text-5xl'>PLUMBING</h1>
            <p className='text-lg ss:text-3xl px-10'>Services are rendered from conception to commissioning of 
each project, enabling the owner/ Architect/Planner to arrive 
at an optimum design and installation forthe following:
</p>
            <ul className='flex flex-col gap-3 text-xl px-10' style={{ listStyleType: 'square' }}>
                <li>Design water supply collection, pumping and piping distribution system</li>
                <li>Design hydro pneumatic system for distribution of treated water.</li>  
                <li>Design storm water collection and disposal water system.</li> 
                <li>Design rain water harvesting.</li>
                <li>Design central hot water generation & supply solar water heaters/ water generations.</li>   
                <li>Design Domestic water softening and treatment plant.</li> 
                <li>Design drainage collection disposal system.</li>    
                <li>Design sewage treatment plant.</li>  
                <li>Infrastructure consultancy system.</li>  
            </ul>

            </div>


    )
    
  }


}

export default Engineering