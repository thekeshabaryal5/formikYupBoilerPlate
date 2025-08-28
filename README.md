# Formik Boilerplate

This is a React app (bootstrapped with Vite) that contains a **Formik boilerplate** for handling forms with custom reusable components like inputs, checkboxes, radio buttons, and selects.

## 🚀 Features

- Clean project structure inside the `src/Formik/` folder
- Reusable templates for different form components
- Validation with yup

---

## 📁 Project Structure

```
src/Formik/
├── FormikInput.jsx      # Template to create a form field of type text, number, email , password
├── FormikRadio.jsx      # Template to create a form field of radio type
├── FormikSelect.jsx     # Template to create a form field of select type
├── FormikCheckBox.jsx   # Template to create a form field of checkbox type
├── FormikTextArea.jsx   # Template to create a form field of checkbox type
├── UseComponent.jsx     # Demo form using all templates

```

---

## 🛠️ Installation

```bash
git clone  https://thekeshabaryal5@github.com/thekeshabaryal5/formikYupBoilerPlate.git
cd formikYupBoilerPlate
npm install
npm run dev
```

## 🧩 Available Components

### 1. FormikInput

Custom input field with validation error handling.<br>
<strong>Props</strong>

- name → field name
- label → label text
- type → input type (text, email, number, password, etc.)
- required → boolean

### 2. FormikRadio

Custom radio buttons.<br>
<strong>Props</strong>

- name → field name
- label → label text
- options → array of {label,value}

### 3. FormikSelect

Custom dropdown.<br>
<strong>Props</strong>

- name → field name
- label → label text
- options → array of {label,value}

### 4. FormikCheckBox

Custom checkbox with formik integration.<br>
<strong>Props</strong>

- name → field name
- label → label text

### 5. FormikTextArea

Custom textarea.<br>
<strong>Props</strong>

- name → field name
- label → label text

## ✅ Example Usage

<strong>See UseComponent.jsx for complete demo</strong>

```
<FormikInput
  name="fullName"
  label="Full Name"
  type="text"
  required={true}
/>
```

- you can optionally provide the other props like onChange it you want to customize

## 🛡 Validation

Validation is handled with Yup.
Example rules already included:

- Full name (only alphabets + spaces, 10–20 chars)
- Email (valid format)
- Nepali phone number (starts with 97/98, 10 digits)
- Age (must be ≥ 18)
- Password (min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)

P.S You can customize the rules as per requirement

## 📌 Notes

- This project is meant as a boilerplate.
- Copy the src/formik folder into your own project and use the components directly.
- Or extend them as per your project needs.

## 🙋‍♂️ Author

- **Keshab Aryal** – [@thekeshabaryal5](https://github.com/thekeshabaryal5)
