
import React, { useState } from 'react';

const FormInputs = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthday, setBirthday] = useState('')
    const [address, setAddress] = useState('')
    const [guardianFirstName, setGuardianFirstName] = useState('')
    const [guardianLastName, setGuardianLastName] = useState('')
    const [guardianPhoneNumber, setGuardianPhoneNumber] = useState('')
    const [skillTestQuestion, setSkillTestQuestion] = useState('')

    function hasCharsCheck(dataToCheck) {
        let pattern = /^[a-zA-Z]{2,60}$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasNumsCheck(dataToCheck) {
        let pattern = /^[0-9]$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasEmailCheck(dataToCheck) {
        let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasAddressCheck(dataToCheck) {
        let pattern = /^[a-zA-Z0-9\s,. '-]{3,}$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasDobCheck(dataToCheck) {
        let pattern = /^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasPhoneCheck(dataToCheck) {
        let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasCharsNumsCheck(dataToCheck) {
        let pattern = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ ]?[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasSkillAnswer(dataToCheck) {
        let pattern = /^(?:75)$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    // function errorsReset() {
    //     fieldsCheck.forEach(inputField => {
    //         inputField.error.innerText = ""
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && emailAddress && phoneNumber && birthday && address && guardianFirstName && guardianLastName && guardianPhoneNumber && skillTestQuestion) {
            console.log('values filled');
            // alert(firstName);
        } else {
            console.log('values are missing');
        }
        console.log(firstName,lastName,emailAddress,phoneNumber,birthday,address,guardianFirstName,guardianLastName,guardianPhoneNumber,skillTestQuestion);
    };

    const Cta = () => <h2 className="text-6xl text-left">Chance to be featured on our website &amp; social media!</h2>;
    
    return (

        <div>
        <div className="container flex m-10 p-10">
        <div className="imageContainer md:flex-initial lg:flex-initial">
        <div className="wrapper">
            <div className="centered">
                <Cta />
            </div>
        </div>
    </div>
    
    <div className="flex-initial">
        <form className="milkForm">
            
            <legend className="text-2xl mb-5 mt-2 font-bold">Contestant Information</legend>
            <fieldset>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="firstName" className="uppercase tracking-wide text-black text-s font-bold mb-2">First Name:</label><input  className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="firstName" name="firstName" type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
                    <p className="text-red-600" id="firstNameError"></p>
                    {hasCharsCheck(lastName) ? "" : <p className="text-red-600" id="firstNameError">Please enter your first name.</p>}
                </div>
                <div className="md:w-1/2 px-3">
                    <label htmlFor="lastName" className="uppercase tracking-wide text-black text-s font-bold mb-2">Last Name:</label><input className="w-full hover:bg-gray-200 focus:bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="lastName" name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}></input>
                   {hasCharsCheck(lastName) ? "" : <p className="text-red-600" id="lastNameError">Please enter your last name.</p>}
                </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="emailAddress" className="uppercase tracking-wide text-black text-s font-bold mb-2">Email Address:</label><input
                    className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="emailAddress" name="emailAddress" type="text"
                        placeholder="Email Address" value={emailAddress} onChange={(e)=> setEmailAddress(e.target.value)}></input>
                    {hasEmailCheck(emailAddress) ? "" : <p className="text-red-600" id="emailAddressError">Please enter your email.</p>}
                </div>
                <div className="md:w-1/2 px-3">
                    <label htmlFor="phoneNumber" className="uppercase tracking-wide text-black text-s font-bold mb-2">Phone Number:</label><input  className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="phoneNumber" name="phoneNumber" type="text" placeholder="Phone number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}></input>
                    {hasPhoneCheck(phoneNumber) ? "" : <p className="text-red-600" id="phoneNumberError">Please enter your phone number.</p>}
                </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="birthday" className="uppercase tracking-wide text-black text-s font-bold mb-2">Date Of Birth:</label><input type="date"  className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="dateOfBirth" name="dateOfBirth" type="text" value={birthday} onChange={(e)=> setBirthday(e.target.value)}></input>
                    
                    {hasDobCheck(birthday) ? "" : <p className="text-red-600" id="Error">Please enter an age of 18 or older.</p>}
                </div>

                <div className="md:w-1/2 px-3">
                    <label htmlFor="address" className="uppercase tracking-wide text-black text-s font-bold mb-2">Address:</label><input className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="address" name="address" type="text" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)}></input>
                    <p className="text-red-600" id="addressError"></p>
                    {hasAddressCheck(address) ? "" : <p className="text-red-600" id="Error">Please enter your full address.</p>}
                </div>
                </div>
            </fieldset>
            <legend className="text-2xl font-bold mb-5 mt-2">Guardians Information <small className="text-sm">(Under age 18)</small></legend>
            <fieldset>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="parentFirstName" className="uppercase tracking-wide text-black text-s font-bold mb-2">First Name:</label><input
                    className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="parentFirstName" name="parentFirstName"
                        type="text" placeholder="Guardians First Name" value={guardianFirstName} onChange={(e)=> setGuardianFirstName(e.target.value)}></input>
                    
                    {hasCharsCheck(guardianFirstName) ? "" : <p className="text-red-600" id="lastNameError">Please enter your first name.</p>}
                </div>
                <div className="md:w-1/2 px-3">
               
                    <label htmlFor="parentLastName" className="uppercase tracking-wide text-black text-s font-bold mb-2">Last Name:</label><input  className="w-full hover:bg-gray-200 focus:bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="parentLastName" name="parentLastName" type="text" placeholder="Guardians Last Name" value={guardianLastName} onChange={(e)=> setGuardianLastName(e.target.value)}></input>
                    {/* {hasCharsCheck(guardianLastName) ? <p className="text-red-600" id="lastNameError">Please enter your last name.</p> : ""} */}
                    {hasCharsCheck(guardianLastName) ? "" : <p className="text-red-600" id="lastNameError">Please enter your last name.</p>}
                    
                </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="flex flex-col mb-4">
                    <label htmlFor="parentPhoneNumber" className="uppercase tracking-wide text-black text-s font-bold mb-2">Phone Number:</label><input
                    className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="parentPhoneNumber" name="parentPhoneNumber"
                        type="text" placeholder="Guardians Phone number" value={guardianPhoneNumber} onChange={(e)=> setGuardianPhoneNumber(e.target.value)}></input>
                    
                    {hasPhoneCheck(guardianPhoneNumber) ? "" : <p className="text-red-600" id="parentPhoneNumberError">Please enter your phone number.</p>}
                </div>
            </fieldset>
            <legend className="text-2xl font-bold mb-5 mt-2">Skill Testing Question</legend>
            <fieldset>
                <div className="flex flex-col mb-4">
                    <label htmlFor="skillTestQuestion" className="uppercase tracking-wide text-black text-s font-bold mb-2">55 + 40 / 2 equals:</label><input
                    className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="skillTestQuestion" name="parentPhoneNumber"
                        type="text" placeholder="Your answer" value={skillTestQuestion} onChange={(e)=> setSkillTestQuestion(e.target.value)}></input>
                    <p className="text-red-600" id="skillTestQuestionError"></p>
                    {hasSkillAnswer(skillTestQuestion) ? "" : <p className="text-red-600" id="skillTestQuestionError">Please answer the above question.</p>}
                </div>
                <div className="mt-2">
                    <div>
                        <label className="inline-flex items-center">
                            <input name="formCheckBox" type="checkbox" id="checkOne" required></input>
                            <span className="ml-2">I agree to the <a href="/">rules and regulations.</a></span>
                        </label>
                        <p className="text-red-600" id="text">Please check the box.</p>
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input name="formCheckBox" type="checkbox" id="checkTwo" required></input>
                            <span className="ml-2">I agree to the <a href="/">terms and conditions</a> and <a
                                    href="/">privacy policy.</a></span>
                        </label>
                        <p className="text-red-600" id="textTwo">Please check the box.</p>
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input name="formCheckBox" type="checkbox"></input>
                            <span className="ml-2">I consent to receiving emails regarding our products,
                                newsletter, and up-coming promotions.</span>
                        </label>
                        <h2 className="text-xl pt-5 font-bold">Disclaimer:</h2>
                        <p className="italic text-sm mb-2">Winners will be determined by random draw, but may have
                            their enteries removed for any reason by the judges.</p>
                    </div>
                </div>
            </fieldset>
            
            
            
            <button className="rounded bg-green-600 text-white p-3 mt-2 mb-5 align-right" type="submit" value="submit" id="formSubmit" onClick={handleSubmit}>Agree &amp; Submit</button>
            
        </form>
        </div>
    </div>
</div>
    )
};







export default FormInputs;