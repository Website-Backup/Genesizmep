import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';

const BrochureForm = ({ handleSave }) => {


    const InputStyles = " relative bottom-1 rounded-md px-10 py-2  border-solid border-[2px]";
  const ContactSchema = Yup.object().shape({
    Name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Please enter your Name'),
    Email: Yup.string().email('Invalid email').required('Please enter your Email'),
    PhoneNumber: Yup.string().required('Please enter your Phone Number')
  });
  
    return (
    <div className="flex flex-col justify-center items-center py-4 mb-8">
      <div className='flex justify-between items-center mb-5 shadow-xl'>

      </div>

      <Formik
        initialValues={{
          Name: '',
          Email: '',
          PhoneNumber: ''
        }}
        onSubmit={(values, onSubmitProps) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleSave(values);
            const link = document.createElement('a');
            link.href = '../../../public/assets/brochure.pdf'; // Replace with the actual file path
            link.download = 'brochure.pdf'; // Replace with the desired file name
            link.click();
            onSubmitProps.resetForm();
          }, 400);
        }}
       validationSchema={ContactSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm,
          
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className=' shadow-xl  max-w-screen-ss justify-center flex border-solid border-[2px] flex-col py-5 rounded-2xl'
            style={{backgroundColor: "white"}}
          >
        <div className="flex flex-col gap-8 justify-center items-center px-3 md:px-10 py-2 md:py-3  ">

            <p className="font-bold text-lg text-center">Kindly fill the form to download our brochure</p>
             <div className="relative text-left">
                <p>Name:</p>
             <input
                id='Name'
                type='text'
                name='Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className={InputStyles}
                placeholder='Name*'
               
                  >
                  </input>
                  {errors.Name && touched.Name ? (
             <label className=" absolute left-0 top-[-20px] bg-white px-2 text-red-500 text-sm" for="Name">{errors.Name}</label>
           ) : null}
            
             </div>
        
             
              
             <div className="relative text-left">
             <p>Phone Number:</p>
            
            <input
              id='PhoneNumber'
              type='tel'
              name='PhoneNumber'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.PhoneNumber}
              className={InputStyles}
              placeholder='PhoneNumber*'
             
            />
            {errors.PhoneNumber && touched.PhoneNumber ? (
             <label className=" absolute left-0 top-[-20px] bg-white px-2 text-red-500 text-sm" for="PhoneNumber">{errors.PhoneNumber}</label>
           ) : null}
            </div>             
        
             <div className="relative text-left">
                <p>Email:</p>
             
             <input
               id='Email'
               type="email"
               name='Email'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.Email}
               className={InputStyles}
               placeholder='Email*'
              
             />
            {errors.Email && touched.Email ? (
             <label className=" absolute left-0 top-[-20px] bg-white px-2 text-red-500 text-sm" for="Email">{errors.Email}</label>
           ) : null}
             </div>
             


          
             
            
         
         
         
         
         </div>

              <button
                className=' bg-textOrange mx-auto text-white text-lg ss:text-xl font-jost px-3 py-2 hover:scale-110 duration-200 rounded-xl max-w-max' 
                type='submit'
                disabled={isSubmitting}
              >
                Download Brochure
              </button>
            
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BrochureForm ;
