import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';


const RequestForm = ({ data, handleSave, }) => {
    const InputStyles = " relative bottom-1 rounded-md p-2  border-solid border-[2px]";
  const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().required('Required'),
    companyName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    city: Yup.string().min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
    state: Yup.string().min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
    area: Yup.string().required('Required'),
    service: Yup.string()
  });
  
    return (
    <div className="flex flex-col justify-center items-center px-5 py-4 mb-8">
      <div className='flex justify-between items-center mb-5'>
        <h3 className=" text-xl ss:text-2xl font-jost font-bold" >
        Request a proposal - We will contact you back in 24 hours!
        </h3>

      </div>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          city: '',
          state:'',
          area:'',
          service:''
        }}
        onSubmit={(values, onSubmitProps) => {
          setTimeout(() => {            
            handleSave(values);
            onSubmitProps.resetForm();
            alert('We recieved your Request. Our team will contact you soon!');
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
            className='   max-w-screen-ss justify-center flex border-solid border-[2px] flex-col py-5 rounded-2xl'
          >
        
        <div className=" flex justify-center flex-col gap-4 md:grid md:grid-cols-2 md:gap-y-4 py-5 md:gap-x-5 md:grid-flow-row p-8">

       
             <div className=" relative">
             <input
                id='firstName'
                type='text'
                name='firstName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className={InputStyles}
                placeholder='firstName*'
               
                  >
                  </input>
                  {errors.firstName && touched.firstName ? (
             <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="firstName">{errors.firstName}</label>
           ) : null}
            
             </div>
              
             <div className="relative">
             <input
               id='lastName'
               type='text'
               name='lastName'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.lastName}
               className={InputStyles}
               placeholder='lastName*'
              
             />
             {errors.lastName && touched.lastName ? (
             <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="lastName">{errors.lastName}</label>
           ) : null}
             </div>
             
        
             <div className="relative">
             <input
               id='email'
               type="email"
               name='email'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
               className={InputStyles}
               placeholder='email*'
              
             />
            {errors.email && touched.email ? (
             <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="email">{errors.email}</label>
           ) : null}
             </div>
             
            <div className="relative">
            <input
              id='phoneNumber'
              type='tel'
              name='phoneNumber'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              className={InputStyles}
              placeholder='phoneNumber*'
             
            />
            {errors.phoneNumber && touched.phoneNumber ? (
             <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="phoneNumber">{errors.phoneNumber}</label>
           ) : null}
            </div>


           
             
             
             <div className="relative col-start-1 col-end-3">
             <input
               id='companyName'
               type='text'
               name='companyName'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.companyName}
               className={`${InputStyles} w-full `}
               placeholder='companyName*'
              
             />
           {errors.companyName && touched.companyName ? (
             <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="companyName">{errors.companyName}</label>
           ) : null}
             </div>
            
            <div className="relative">
            <input
              id='city'
              type="text"
              name='city'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              className={InputStyles}
              placeholder='city*'
             
            />
         {errors.city && touched.city ? (
             <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="city">{errors.city}</label>
           ) : null}
            </div>
            
            <div className=" relative">
            <input
              id='state'
              type='text'
              name='state'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              className={InputStyles}
              placeholder='state*'
             
            />
       {errors.state && touched.state ? (
             <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="state">{errors.state}</label>
           ) : null}
            </div>
          
             <div className=" col-start-1 col-end-3 relative">
             <input
               id='area'
               name='area'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.area}
               className={`${InputStyles}  w-full`}
               placeholder='Enter the total area in sqFt'
                  maxLength={30}
                  
             />
             {errors.area && touched.area ? (
             <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="area">{errors.area}</label>
           ) : null}
             </div>
            
            <div className=" col-start-1 col-end-3 relative">

        
            <select
            id="service"
            name='service'
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.service}
            className={`${InputStyles}  w-full uppercase`}
            >
              <option value="All MEP">All MEP</option>
               <option value="HVAC">HVAC</option>
               <option value="Electrical">Electrical</option>
               <option value="Fire protection">Fire protection</option>
               <option value="Plumbing">Plumbing</option>
             
            </select>
             {/* <label className=" absolute left-4 top-[-20px] bg-white px-2 text-red-500" for="type">Select the type of project*</label> */}
          
           </div>
         
         
         </div>

              <button
                className=' bg-textOrange mx-auto text-white text-lg ss:text-xl font-jost px-5 py-3 hover:scale-110 duration-200 rounded-xl max-w-max' 
                type='submit'
                disabled={isSubmitting}
              >
                Request A Proposal
              </button>
            
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RequestForm;
