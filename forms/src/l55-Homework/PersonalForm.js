import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const PersonalForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        country: 'India',
        address: '',
        city: '',
        state: '',
        zip: '',
        dob: '',
        gender: '',
        jobTitle: '',
        company: '',
        linkdinUrl: '',
        personalweb: '',
        comments: false,
        candidates: false,
        offers: false,
        pushNotifications: '',
    })

    function changeHandler(event) {
        const { type, value, name, checked } = event.target
        setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }
    function submitHandler(event) {
        event.preventDefault();
        const fetchApi = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                if (response.ok) {
                    console.log("response", response)
                }
                const data = await response.json()
                console.log('Data sent successfully', data)
                toast.success("Form Submited Successfully!!")
            } catch (error) {
                console.error('Error:', error)
                toast.error("Error in Form Submission!!")

            }
        }
        fetchApi()

        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            number: '',
            address: '',
            country: 'India',
            city: '',
            state: '',
            zip: '',
            dob: '',
            gender: '',
            jobTitle: '',
            company: "",
            linkdinUrl: '',
            personalweb: '',
            comments: false,
            candidates: false,
            offers: false,
            pushNotifications: ''
        })
    }


    useEffect(() => {
    }, [])

    return (
        <div className='form-container'>
            <h1>Fill your Form Details</h1>
            <form className='form' onSubmit={submitHandler}>
                <label htmlFor=''>First Name</label>
                <input type="text"
                    id='firstname'
                    name='firstname'
                    placeholder="Enter your first name"
                    onChange={changeHandler}
                    value={formData.firstname}
                />

                <label htmlFor=''>Last Name</label>
                <input type="text"
                    id='lastname'
                    name='lastname'
                    placeholder="Enter your last name"
                    onChange={changeHandler}
                    value={formData.lastname}
                />


                <label htmlFor=''>Email Address</label>
                <input type="email"
                    id='email'
                    name='email'
                    placeholder="Enter your email"
                    onChange={changeHandler}
                    value={formData.email}
                />

                <label htmlFor=''>Phone Number</label>
                <input type="number"
                    id='phone'
                    name='number'
                    placeholder="Enter your phone number"
                    onChange={changeHandler}
                    value={formData.number}
                />


                <label htmlFor=''>Country</label>
                <select type="text"
                    id='country'
                    name='country'
                    placeholder="Enter your country"
                    onChange={changeHandler}
                    value={formData.country}
                >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                </select>


                <label htmlFor=''>Street Address</label>
                <input type="text"
                    id='address'
                    name='address'
                    placeholder="1234 Main St"
                    onChange={changeHandler}
                    value={formData.street}
                />

                <label htmlFor=''>City</label>
                <input type="text"
                    id='city'
                    name='city'
                    placeholder="Asansol"
                    onChange={changeHandler}
                    value={formData.city}
                />

                <label htmlFor=''>State/Province</label>
                <input type="text"
                    id='state'
                    name='state'
                    placeholder="West Bengal"
                    onChange={changeHandler}
                    value={formData.state}
                />


                <label htmlFor=''>Zip /Postal Code</label>
                <input type="text"
                    id='zip'
                    name='zip'
                    placeholder="713301"
                    onChange={changeHandler}
                    value={formData.zip}
                />

                <label htmlFor=''>DOB</label>
                <input className='dob' type="date"
                    id='dob'
                    name='dob'
                    placeholder="01-01-1981"
                    onChange={changeHandler}
                    value={formData.dob}
                />


                <div className='gender-div'>
                    <div className='gender-male'>
                        <input
                            className='gender-radio'
                            type="radio"
                            id='male'
                            name='gender'
                            value='male'
                            onChange={changeHandler}
                        />
                        <label htmlFor='male'>Male</label>
                    </div>

                    <div className='gender-female'>
                        <input
                            className='gender-radio'
                            type="radio"
                            id='female'
                            name='gender'
                            value='female'
                            onChange={changeHandler}
                        />
                        <label htmlFor='female'>Female</label>
                    </div>
                </div>
                <label htmlFor=''>Occupation/Job Title</label>
                <input type="text"
                    id='job'
                    name='jobTitle'
                    placeholder="Job title"
                    onChange={changeHandler}
                    value={formData.jobTitle}
                />
                <label htmlFor=''>Company Name</label>
                <input type="text"
                    id='company'
                    name='company'
                    placeholder="Company name"
                    onChange={changeHandler}
                    value={formData.company}
                />

                <label htmlFor=''>LinkedIn Profile URL</label>
                <input type="url"
                    id='linkdinUrl'
                    name='linkdinUrl'
                    placeholder="Linkdin url"
                    onChange={changeHandler}
                    value={formData.linkdinUrl}
                />

                <label htmlFor=''>Personal Website/Portfolio URL</label>
                <input type="url"
                    id='PersonalWebsite'
                    name='personalweb'
                    placeholder="Personal website url"
                    onChange={changeHandler}
                    value={formData.personalweb}
                />

                <fieldset>
                    <legend>By Email</legend>
                    <div className='chackbox-class'>
                        <input
                            type="checkbox"
                            className='checkbox'
                            id='comments'
                            name='comments'
                            onChange={changeHandler}
                            checked={formData.comments}
                        />
                        <label htmlFor='comments'>comments</label>
                    </div>
                    <p>Get notified when someones psts a comments applies for a job.</p>

                    <div className='chackbox-class'>
                        <input
                            className='checkbox'
                            type="checkbox"
                            id='candidates'
                            name='candidates'
                            onChange={changeHandler}
                            checked={formData.candidates}
                        />
                        <label htmlFor='candidates'>Candidates</label>
                    </div>
                    <p>Get notified when when a candidates applies for a job.</p>

                    <div className='chackbox-class'>
                        <input
                            className='checkbox'
                            type="checkbox"
                            id='offers'
                            name='offers'
                            onChange={changeHandler}
                            checked={formData.offers}
                        />
                        <label htmlFor='offers'>Offers</label>
                    </div>
                    <p>Get notified when a candidates accept and reject an offer.</p>
                </fieldset>


                <fieldset>
                    <legend>Push Notification</legend>
                    <p>These are delivered via SMS to our mobie phone</p>

                    <div className='radio-class'>
                        <input
                            className='radio'
                            type="radio"
                            id='pushEverything'
                            name="pushNotifications"
                            value='Everything'
                            onChange={changeHandler}
                        />
                        <label htmlFor='pushEverything'>Everything</label>
                    </div>

                    <div className='radio-class'>
                        <input
                            className='radio'
                            type="radio"
                            id='pushEmail'
                            name="pushNotifications"
                            value='same as email'
                            onChange={changeHandler}
                        />
                        <label htmlFor='pushEmail'>Same as Email</label>

                    </div>
                    <div className='radio-class'>
                        <input
                            className='radio'
                            type="radio"
                            id='pushNothing'
                            name="pushNotifications"
                            value='same as Notifivations'
                            onChange={changeHandler}
                        />
                        <label htmlFor='pushNothing'>No push Notification</label>
                    </div>
                </fieldset>


                <button type="submit">Save</button>
            </form>
        </div>
    )
}
