formik is used for state management
the formik adds field name to the <Field> tag to track the state of that field
each field has three attributes:
field,form,meta

field --> name , value, onChange onBlur
insteda of this:
<input type="text" name="firstName" value={field.value} onChange = {(e)=>{field.setFieldValue(e.target.value)}}>
Do this:
<input type="text" {...field}}>

validationSchema runs before formSubmit
validation runs on following event:
onSubmit
onChange
onBlur
