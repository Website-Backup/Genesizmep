import React from 'react'

const ThirdPage = () => {
  return (
    <div className=' flex flex-col md:grid md:grid-cols-2 items-stretch  justify-items-stretch'>
        <img src='./assets/contactPage/contactP.webp'></img>
        <div className=' font-jost text-2xl text-white bg-black py-7 text-center px-5 flex flex-col gap-4 justify-center'>
            <p>We strive to offer the best MEP engineering consulting services available. We are happy to provide you with additional information if you have any further inquiries or questions.</p>
            <p>If you'd like to work with us, please submit your resume via the Career Opportunities page. Applicants for jobs submitted here will not be considered.</p>
        </div>
    </div>
  )
}

export default ThirdPage;