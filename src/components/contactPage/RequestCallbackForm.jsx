import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';

const RequestCallbackForm = ({ handleSave }) => {
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
    <div className="flex flex-col justify-center items-center px-5 py-4 mb-8">
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
        <div className="flex flex-col gap-8 px-10 py-3  ">

       
             <div className="relative">
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
        
             
              
             <div className="relative">
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
        
             <div className="relative">
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
                className=' bg-textOrange mx-auto text-white text-lg ss:text-xl font-jost px-5 py-3 hover:scale-110 duration-200 rounded-xl max-w-max' 
                type='submit'
                disabled={isSubmitting}
              >
                Submit
              </button>
            
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RequestCallbackForm ;
