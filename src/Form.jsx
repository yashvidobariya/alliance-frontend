import React, { useEffect, useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { CustTypeOptions, JobAndWorkType, UsProcedure, USStateOptions } from './Data';
import { Formdata } from '../src/Router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../src/style.css'
import axios from 'axios';

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('');
  const [estimator, setestimator] = useState('');
  const [proposal, setproposal] = useState('');
  // =======project=======
  const [jobName, setJobName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  // ======customer=====  
  const [customerName, setCustomerName] = useState('');
  const [claimNumber, setClaimNumber] = useState('');
  const [poNumber, setPoNumber] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [customerZip, setCustomerZip] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [customerCell, setCustomerCell] = useState('');
  // ======owner=====
  const [ownername, setOwnername] = useState('');
  const [owneraddress, setOwneraddress] = useState('');
  const [ownercity, setOwnercity] = useState('');
  const [ownerstate, setOwnerstate] = useState('');
  const [ownerzip, setOwnerzip] = useState('');
  const [ownerphone, setOwnerphone] = useState('');
  const [owneremail, setOwneremail] = useState('');
  const [ownercontact, setOwnercontact] = useState('');
  const [ownercell, setOwnercell] = useState('');
  // ======referral
  const [referralname, setreferralname] = useState('');
  const [referraladdress, setreferraladdress] = useState('');
  const [referralcity, setreferralcity] = useState('');
  const [referralstate, setreferralstate] = useState('');
  const [referralzip, setreferralzip] = useState('');
  const [referralphone, setreferralphone] = useState('');
  const [referralemail, setreferralemail] = useState('');
  const [referralcontact, setreferralcontact] = useState('');
  const [referralcell, setreferralcell] = useState('');
  // =======adtiotion-content
  const [acname1, setacname1] = useState('');
  const [acname2, setacname2] = useState('');
  const [acname3, setacname3] = useState('');
  const [accmpname1, setaccmpname1] = useState('');
  const [accmpname2, setaccmpname2] = useState('');
  const [accmpname3, setaccmpname3] = useState('');
  const [acphone1, setacphone1] = useState('');
  const [acphone2, setacphone2] = useState('');
  const [acphone3, setacphone3] = useState('');
  const [acemail1, setacemail1] = useState('');
  const [acemail2, setacemail2] = useState('');
  const [acemail3, setacemail3] = useState('');
  // ====scopework
  const [scopework, setscopework] = useState('')
  // ==========agencyinformation
  const [epaId, setEpaId] = useState('');
  const [hazManifest, setHazManifest] = useState('');
  const [nonHazManifest, setNonHazManifest] = useState('');
  const [nonHazManLT1, setNonHazManLT1] = useState('');
  const [trash, setTrash] = useState('');
  const [projectType, setProjectType] = useState('');
  const [buildingSize, setBuildingSize] = useState('');
  const [numberOfFloors, setNumberOfFloors] = useState('');
  const [buildingAge, setBuildingAge] = useState('');
  const [numDwellingUnits, setNumDwellingUnits] = useState('');
  const [priorUse, setPriorUse] = useState('');
  const [procedure, setProcedure] = useState('');
  const [survey, setSurvey] = useState('');
  // ======customer-type
  const [customerTypes, setCustomerTypes] = useState([]);
  const [jobAndWorkTypes, setJobAndWorkTypes] = useState([]);
  // ======amount=
  const [contractAmount, setContractAmount] = useState('');
  const [lockBoxCombo, setLockBoxCombo] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  // ===========company


  const onRemove = (selectedList, removedItem) => {
    //console.log('Remaining Items:', selectedList);
  };

  const validation = () => {
    let newErrors = {};
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const tenDigitPattern = /^\d{10}$/;

    //  if (!estimator) newErrors.estimator = 'estimator is required';
    // if (!proposal) newErrors.proposal = 'proposal is required';
    if (!jobName) newErrors.jobName = 'Job Name is required';
    // if (!selectedDate) newErrors.selectedDate = 'Job walk date is required';
    //  if (!time) newErrors.time = 'Job walk time is required';
    // if (!address) newErrors.address = 'Address is required';
    // if (!city) newErrors.city = 'City is required';
    // if (!state) newErrors.state = 'State is required';
    // if (!zip) newErrors.zip = 'Zip is required';
    if (!customerName) newErrors.customerName = 'Customer Name is required';
    //if (!claimNumber) newErrors.claimNumber = 'Claim Number is required';
    //if (!poNumber) newErrors.poNumber = 'PO Number is required';
    // if (!customerAddress) newErrors.customerAddress = 'Customer Address is required';
    // if (!customerCity) newErrors.customerCity = 'Customer City is required';
    //if (!customerState) newErrors.customerState = 'Customer State is required';
    //  if (!customerZip) newErrors.customerZip = 'Customer Zip is required';
    // // =======owner
    // if (!ownername) newErrors.ownername = 'ownername is required';
    // if (!owneraddress) newErrors.owneraddress = 'owner Address is required';
    // if (!ownercity) newErrors.ownercity = 'owner City is required';
    // if (!ownerstate) newErrors.ownerstate = 'owner State is required';
    // if (!ownerzip) newErrors.ownerzip = 'owner Zip is required';
    // // ======== additionalcontact
    // if (!acname1) newErrors.acname1 = 'name is required';
    // if (!acname2) newErrors.acname2 = 'name is required';
    // if (!acname3) newErrors.acname3 = 'name is required';
    // if (!acemail1) newErrors.acemail1 = 'email is required';
    // if (!acemail2) newErrors.acemail2 = 'email is required';
    // if (!acemail3) newErrors.acemail3 = 'email is required';
    // if (!accmpname1) newErrors.accmpname1 = 'Company is required';
    // if (!accmpname2) newErrors.accmpname2 = 'Company is required';
    // if (!accmpname3) newErrors.accmpname3 = 'Company is required';
    // if (!acphone1) newErrors.acphone1 = 'phone is required';
    // if (!acphone2) newErrors.acphone2 = 'phone is required';
    // if (!acphone3) newErrors.acphone3 = 'phone is required';

    // // =========referrral===
    // if (!referralname) newErrors.referralname = 'ownername is required';
    // if (!referraladdress) newErrors.referraladdress = 'owner Address is required';
    // if (!referralcity) newErrors.referralcity = 'owner City is required';
    // if (!referralstate) newErrors.referralstate = 'owner State is required';
    // if (!referralzip) newErrors.referralzip = 'owner Zip is required';
    // // // ====customer
    // if (!zip) newErrors.zip = 'Zip is required';
    // if (!customerName) newErrors.customerName = 'Customer Name is required';
    // if (!claimNumber) newErrors.claimNumber = 'Claim Number is required';
    // if (!poNumber) newErrors.poNumber = 'PO Number is required';
    // if (!customerAddress) newErrors.customerAddress = 'Customer Address is required';
    // if (!customerCity) newErrors.customerCity = 'Customer City is required';
    // if (!customerState) newErrors.customerState = 'Customer State is required';
    // if (!customerZip) newErrors.customerZip = 'Customer Zip is required';
    // // // ======scopework
    //if (!scopework) newErrors.scopework = 'scopework is required';
    // // // ===========customertype
    // if (customerTypes.length === 0) newErrors.customerTypes = 'At least one customer type must be selected';
    // console.log("custmoretype", customerTypes)
    // if (jobAndWorkTypes.length === 0) newErrors.jobAndWorkTypes = 'At least one job and work type must be selected';
    // // // =========agencyinformation
    // if (!epaId) newErrors.epaId = 'EPA ID is required';
    // if (!hazManifest) newErrors.hazManifest = 'Haz. Manifest is required';
    // if (!nonHazManifest) newErrors.nonHazManifest = 'Non-Haz. Manifest is required';
    // if (!nonHazManLT1) newErrors.nonHazManLT1 = 'Non-Haz. Man.<1% is required';
    // if (!trash) newErrors.trash = 'Trash is required';
    // if (!projectType) newErrors.projectType = 'Project type is required';
    // if (!buildingSize) newErrors.buildingSize = 'Building size is required';
    // if (!numberOfFloors) newErrors.numberOfFloors = 'Number of floors is required';
    // if (!buildingAge) newErrors.buildingAge = 'Building age is required';
    // if (!numDwellingUnits) newErrors.numDwellingUnits = 'Number of dwelling units is required';
    // if (!priorUse) newErrors.priorUse = 'Present/Prior use is required';
    // if (!procedure) newErrors.procedure = 'Procedure is required';
    // if (!survey) { newErrors.survey = 'Survey is required'; }
    // // // =======amount
    // if (!contractAmount) newErrors.contractAmount = 'Contract Amount is required';
    // else if (isNaN(contractAmount)) newErrors.contractAmount = 'Contract Amount must be a number';
    // if (!lockBoxCombo) newErrors.lockBoxCombo = 'Lock Box Combo is required';
    // if (!specialInstructions) newErrors.specialInstructions = 'Special Instructions are required';

    // if (!email) {
    //   newErrors.email = 'E-mail is required';
    // } else if (!emailPattern.test(email)) {
    //   newErrors.email = 'Invalid email pattern';
    // }
    // if (!contact) {
    //   newErrors.contact = 'Contact is required';
    // } else if (!tenDigitPattern.test(contact)) {
    //   newErrors.contact = 'Contact number must be 10 digits';
    // }
    // if (!phone) {
    //   newErrors.phone = 'Phone is required';
    // } else if (!tenDigitPattern.test(phone)) {
    //   newErrors.phone = 'Phone number must be 10 digits';
    // }
    // if (!customerEmail) {
    //   newErrors.customerEmail = 'E-mail is required';
    // } else if (!emailPattern.test(customerEmail)) {
    //   newErrors.customerEmail = 'Invalid email pattern';
    // }
    // if (!customerPhone) {
    //   newErrors.customerPhone = 'Phone is required';
    // } else if (!tenDigitPattern.test(customerPhone)) {
    //   newErrors.customerPhone = 'Phone number must be 10 digits';
    // }
    // if (!customerContact) {
    //   newErrors.customerContact = 'Contact is required';
    // }
    // if (!customerCell) {
    //   newErrors.customerCell = 'Cell is required';
    // }
    // if (!ownerphone) {
    //   newErrors.ownerphone = 'Phone is required';
    // } else if (!tenDigitPattern.test(ownerphone)) {
    //   newErrors.ownerphone = 'Phone number must be 10 digits';
    // }
    // if (!owneremail) {
    //   newErrors.owneremail = 'E-mail is required';
    // } else if (!emailPattern.test(owneremail)) {
    //   newErrors.owneremail = 'Invalid email pattern';
    // }
    // if (!ownerphone) {
    //   newErrors.ownerphone = 'Phone is required';
    // } else if (!tenDigitPattern.test(ownerphone)) {
    //   newErrors.ownerphone = 'Phone number must be 10 digits';
    // }
    // if (!ownercontact) {
    //   newErrors.ownercontact = 'Contact is required';
    // }
    // if (!ownercell) {
    //   newErrors.ownercell = 'Cell is required';
    // }
    // if (!referralphone) {
    //   newErrors.referralphone = 'Phone is required';
    // } else if (!tenDigitPattern.test(referralphone)) {
    //   newErrors.ownerphone = 'Phone number must be 10 digits';
    // }
    // if (!referralemail) {
    //   newErrors.referralemail = 'E-mail is required';
    // } else if (!emailPattern.test(referralemail)) {
    //   newErrors.referralemail = 'Invalid email pattern';
    // }
    // if (!referralphone) {
    //   newErrors.referralphone = 'Phone is required';
    // } else if (!tenDigitPattern.test(referralphone)) {
    //   newErrors.referralphone = 'Phone number must be 10 digits';
    // }
    // if (!referralcontact) {
    //   newErrors.referralcontact = 'Contact is required';
    // }
    // if (!referralcell) {
    //   newErrors.referralcell = 'Cell is required';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (validation()) {
      const data = {
        estimator: estimator,
        proposal: proposal,
        job_walkDate: selectedDate,
        job_walkTime: time,
        job_name: jobName,
        job_address: address,
        job_city: city,
        job_state: state,
        job_zip: zip,
        job_email: email,
        job_contact: contact,
        job_phone: phone,
        customer_name: customerName,
        customer_claim: claimNumber,
        customer_po: poNumber,
        customer_address: customerAddress,
        customer_city: customerCity,
        customer_state: customerState,
        customer_zip: customerZip,
        customer_phone: customerPhone,
        customer_email: customerEmail,
        customer_contact: customerContact,
        customer_cell: customerCell,
        owner_name: ownername,
        owner_address: owneraddress,
        owner_city: ownercity,
        owner_state: ownerstate,
        owner_zip: ownerzip,
        owner_phone: ownerphone,
        owner_email: owneremail,
        owner_contact: ownercontact,
        owner_cell: ownercell,
        referral_name: referralname,
        referral_address: referraladdress,
        referral_city: referralcity,
        referral_state: referralstate,
        referral_zip: referralzip,
        referral_phone: referralphone,
        referral_email: referralemail,
        referral_contact: referralcontact,
        referral_cell: referralcell,
        ac_name1: acname1,
        ac_company1: accmpname1,
        ac_phone1: acphone1,
        ac_email1: acemail1,
        ac_name2: acname2,
        ac_company2: accmpname2,
        ac_phone2: acphone2,
        ac_email2: acemail2,
        ac_name3: acname3,
        ac_company3: accmpname3,
        ac_phone3: acphone3,
        ac_email3: acemail3,
        scope_work: scopework,
        customer_type: customerTypes,
        job_and_work_type: jobAndWorkTypes,
        epa_id: epaId,
        haz_manifest: hazManifest,
        non_haz_man: nonHazManifest,
        non_haz_man_1pr: nonHazManLT1,
        trash: trash,
        project_type: projectType,
        building_size: buildingSize,
        number_of_floors: numberOfFloors,
        building_age: buildingAge,
        no_of_dwelling_units: numDwellingUnits,
        present_prior_use: priorUse,
        procedure: procedure,
        survey: survey,
        contract_amount: contractAmount,
        lock_box_combo: lockBoxCombo,
        instruction_notes: specialInstructions
      };

      //  console.log("data", data);

      try {
        //  console.log("try")
        const response = await fetch(Formdata, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });

        // console.log("reaspo9nse", response);

        if (!response.ok) {
          alert("form data not submmitted");
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Saved Customer Data:', result);
        alert("form data submmitted");
      } catch (error) {
        alert("form data not submmitted");
        console.error('Error ', error);
      }


      // try {
      //   console.log("Trying to save data...");

      //   const response = await axios.post(Formdata, data, {
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   });

      //   console.log('Saved Customer Data:', response.data);
      //   // Handle success (e.g., show a success message, redirect, etc.)

      // } catch (error) {
      //   console.error('Error saving customer data:', error);
      //   // Handle error (e.g., show an error message, etc.)
      // }

    }
  };


  const projectonSelect = (selectedList, selectedItem) => {
    if (selectedItem) {
      console.log("select projectonSelect", selectedItem);
      setState(selectedItem.name);
    }
  };

  const customeronSelect = (selectedList, selectedItem) => {
    if (selectedItem) {
      setCustomerState(selectedItem.name);
      console.log("select customerselect", selectedItem);
    }
  };

  const owneronSelect = (selectedList, selectedItem) => {
    if (selectedItem) {
      setOwnerstate(selectedItem.name);
      console.log("select owneritem", selectedItem);
    }
  };

  const refferralselect = (selectedList, selectedItem) => {
    if (selectedItem) {
      setreferralstate(selectedItem.name);
      console.log("select refferralselect", selectedItem);
    }
  };

  const agencyinfoselect = (selectedList, selectedItem) => {
    if (selectedItem) {
      setProcedure(selectedItem.name);
      console.log("select agencyinfoselect", selectedItem);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  return (
    <>
      <div className='flex items-center justify-between border-b-2 border-black'>
        <img src="/image/logo.png" className='w-[120px]' alt="Logo" />
        <h1 className='text-4xl font-bold text-black'>TICK SHEET</h1>
      </div>

      <div className='flex flex-col justify-between mt-4 md:flex-row'>
        <div>
          <div>
            <label className='font-bold'>Estimator: </label>
            <input className='border-b-2 border-black outline-none' type="text" value={estimator}
              onChange={(e) => setestimator(e.target.value)} />
          </div>
          {errors.estimator && <p className='text-red-500'>{errors.estimator}</p>}
          <div>
            <label className='font-bold'>Proposal# </label>
            <input className='border-b-2 border-black outline-none' type="text" value={proposal}
              onChange={(e) => setproposal(e.target.value)} />
          </div>
          {errors.proposal && <p className='text-red-500'>{errors.proposal}</p>}
        </div>
        <div>
          <div>
            <label className='font-bold'>Job Walk Date: </label>
            {/* <input className='border-b-2 border-black outline-none' type="text" /> */}
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MM/dd/YYYY"
              isClearable
              placeholderText="Select a date"
            />
            {errors.selectedDate && <p className='text-red-500'>{errors.selectedDate}</p>}
          </div>
          <div>
            <label className='font-bold'>Job Walk Time: </label>
            <input type="time" id="timeInput" name="timeInput" value={time} onChange={(e) => setTime(e.target.value)}></input>
            {errors.time && <p className='text-red-500'>{errors.time}</p>}
          </div>
        </div>
      </div>
      <section className='flex mt-5'>
        <div className='w-1/2 p-3 mr-3 border-2 rounded-md'>
          <h1 className='mb-2 font-extrabold border-b-2'>PROJECT</h1>
          <div className='flex'>
            <label className='font-bold'>JOB NAME : </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />
          </div>
          {errors.jobName && <p className='text-red-500'>{errors.jobName}</p>}


          <div className='flex'>
            <label className='font-bold'>Address : </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {errors.address && <p className='text-red-500'>{errors.address}</p>}

          <div className='flex items-center flex-grow space-x-2 responsive-flex'>
            <div className='flex'>
              <label className='font-bold'>City : </label>
              <input
                className='w-full border-b-2 border-black outline-none'
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            {errors.city && <p className='text-red-500'>{errors.city}</p>}

            <div className='flex items-center '>
              <label className='font-bold'>State :  </label>
              {/* <input className='w-full border-b-2 border-black outline-none' type="text" /> */}
              <Multiselect
                options={USStateOptions.options}
                displayValue="name"
                onSelect={projectonSelect}
                singleSelect={true}
                placeholder="Select a State"
                className="p-2 outline-none cursor-pointer custom-width"
              />
            </div>
            {errors.state && <p className='text-red-500'>{errors.state}</p>}

            <div className='flex items-center flex-grow space-x-2'>
              <label className='font-bold'>Zip : </label>
              <input
                className='w-full border-b-2 border-black outline-none'
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            {errors.zip && <p className='text-red-500'>{errors.zip}</p>}
          </div>

          <div className='flex'>
            <label className='font-bold'>E-mail : </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {errors.email && <p className='text-red-500'>{errors.email}</p>}

          <div className='flex'>
            <label className='font-bold'>Contact : </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label className='font-bold'>Phone : </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {errors.contact && <p className='text-red-500'>{errors.contact}</p>}
          {errors.phone && <p className='text-red-500'>{errors.phone}</p>}

          {/* <button
            onClick={projecthandleSave}
            className='float-right px-5 py-2 m-6 text-white bg-black rounded-lg hover:bg-gray-800 active:bg-gray-900 focus:outline-none'
            aria-label="Save"
          >
            Save
          </button> */}
        </div>
        <div className='w-1/2 p-3 ml-3 border-2 rounded-md '>
          <h1 className='mb-2 font-extrabold border-b-2'>CUSTOMER</h1>
          <div className='flex'>
            <label className='font-bold'>CUSTOMER : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={customerName}
              onChange={(e) => setCustomerName(e.target.value)} />
          </div>
          {errors.customerName && <p className='text-red-500'>{errors.customerName}</p>}

          <div className='flex'>
            <label className='font-bold'>Claim # </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={claimNumber}
              onChange={(e) => setClaimNumber(e.target.value)} />

            <label className='font-bold'>PO # </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={poNumber}
              onChange={(e) => setPoNumber(e.target.value)} />

          </div>
          {errors.claimNumber && <p className='text-red-500'>{errors.claimNumber}</p>}
          {errors.poNumber && <p className='text-red-500'>{errors.poNumber}</p>}

          <div className='flex'>
            <label className='font-bold'>Address : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)} />
          </div>
          {errors.customerAddress && <p className='text-red-500'>{errors.customerAddress}</p>}

          <div className='flex items-center flex-grow space-x-2 responsive-flex'>
            <div className='flex'>
              <label className='font-bold'>City : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={customerCity}
                onChange={(e) => setCustomerCity(e.target.value)} />
            </div>
            {errors.customerCity && <p className='text-red-500'>{errors.customerCity}</p>}

            <div className='flex items-center'>
              <label className='font-bold'>State :  </label>
              {/* <input className='w-full border-b-2 border-black outline-none' type="text" /> */}
              <Multiselect
                options={USStateOptions.options}
                displayValue="name"
                onSelect={customeronSelect}
                singleSelect={true}
                placeholder="Select a State"
                className="w-full p-2 outline-none cursor-pointer"
              />
              {errors.customerState && <p className='text-red-500'>{errors.customerState}</p>}
            </div>
            <div className='flex flex-grow space-x-2 text-center'>
              <label className='font-bold'>Zip : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={customerZip}
                onChange={(e) => setCustomerZip(e.target.value)} />

            </div>
            {errors.customerZip && <p className='text-red-500'>{errors.customerZip}</p>}
          </div>
          <div className='flex'>
            <label className='font-bold'>Phone : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)} />
            <label className='font-bold'>E-mail : </label>
            <input className='w-full border-b-2 border-black outline-none' type="email" value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)} />
          </div>
          {errors.customerEmail && <p className='text-red-500'>{errors.customerEmail}</p>}
          {errors.customerPhone && <p className='text-red-500'>{errors.customerPhone}</p>}
          <div className='flex'>
            <label className='font-bold'>Contact : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={customerContact}
              onChange={(e) => setCustomerContact(e.target.value)} />
            <label className='font-bold'>Cell : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={customerCell}
              onChange={(e) => setCustomerCell(e.target.value)} />
          </div>
          {errors.customerCell && <p className='text-red-500'>{errors.customerCell}</p>}
          {errors.customerContact && <p className='text-red-500'>{errors.customerContact}</p>}

        </div>
      </section>
      <section className='flex mt-5'>
        <div className='w-1/2 p-3 mr-3 border-2 rounded-md'>
          <h1 className='mb-2 font-extrabold border-b-2'>OWNER</h1>
          <div className='flex'>
            <label className='font-bold'>OWNER : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={ownername}
              onChange={(e) => setOwnername(e.target.value)} />
          </div>
          {errors.ownername && <span className="text-red-500">{errors.ownername}</span>}
          <div className='flex'>
            <label className='font-bold'>Address : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={owneraddress}
              onChange={(e) => setOwneraddress(e.target.value)} />
          </div>
          {errors.owneraddress && <span className="text-red-500">{errors.owneraddress}</span>}

          <div className='flex items-center flex-grow space-x-2 responsive-flex'>
            <div className='flex'>
              <label className='font-bold'>City : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={ownercity}
                onChange={(e) => setOwnercity(e.target.value)} />
            </div>
            {errors.ownercity && <span className="text-red-500">{errors.ownercity}</span>}
            <div className='flex items-center'>
              <label className='font-bold'>State :  </label>
              {/* <input className='w-full border-b-2 border-black outline-none' type="text" /> */}
              <Multiselect
                options={USStateOptions.options}
                displayValue="name"
                onSelect={owneronSelect}
                singleSelect={true}
                placeholder="Select a State"
                className="w-full p-2 outline-none cursor: pointer"
              />
              {errors.ownerstate && <span className="text-red-500">{errors.ownerstate}</span>}
            </div>
            <div className='flex items-center flex-grow space-x-2 '>
              <label className='font-bold'>Zip : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={ownerzip}
                onChange={(e) => setOwnerzip(e.target.value)} />
            </div>
            {errors.ownerzip && <span className="text-red-500">{errors.ownerzip}</span>}
          </div>
          <div className='flex'>
            <label className='font-bold'>Phone : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={ownerphone}
              onChange={(e) => setOwnerphone(e.target.value)} />
            <label className='font-bold'>E-mail : </label>
            <input className='w-full border-b-2 border-black outline-none' type="email" value={owneremail}
              onChange={(e) => setOwneremail(e.target.value)} />
          </div>
          {errors.ownerphone && <span className="text-red-500">{errors.ownerphone}</span>}
          {errors.owneremail && <span className="text-red-500">{errors.owneremail}</span>}
          <div className='flex'>
            <label className='font-bold'>Contact : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={ownercontact}
              onChange={(e) => setOwnercontact(e.target.value)} />
            {errors.ownercontact && <span className="text-red-500">{errors.ownercontact}</span>}
            <label className='font-bold'>Cell : </label>
            <input className='w-full border-b-2 border-black outline-none' type="text" value={ownercell}
              onChange={(e) => setOwnercell(e.target.value)} />
          </div>
          {errors.ownercell && <span className="text-red-500">{errors.ownercell}</span>}
        </div>

        <div className='w-1/2 p-3 ml-3 border-2 rounded-md'>
          <h1 className='mb-2 font-extrabold border-b-2'>REFERRAL</h1>

          <div className='flex'>
            <label className='font-bold'>REFERRAL NAME: </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={referralname}
              onChange={(e) => setreferralname(e.target.value)}
            />
          </div>
          {errors.referralname && <div className="text-red-500">{errors.referralname}</div>}

          <div className='flex'>
            <label className='font-bold'>Address: </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={referraladdress}
              onChange={(e) => setreferraladdress(e.target.value)}
            />
          </div>
          {errors.referraladdress && <div className="text-red-500">{errors.referraladdress}</div>}

          <div className='flex items-center flex-grow space-x-2 responsive-flex'>
            <div className='flex'>
              <label className='font-bold'>City: </label>
              <input
                className='w-full border-b-2 border-black outline-none'
                type="text"
                value={referralcity}
                onChange={(e) => setreferralcity(e.target.value)}
              />
            </div>
            {errors.referralcity && <div className="text-red-500">{errors.referralcity}</div>}

            <div className='flex items-center'>
              <label className='font-bold'>State:  </label>
              <Multiselect
                options={USStateOptions.options}
                displayValue="name"
                singleSelect={true}
                onSelect={refferralselect}
                placeholder="Select a State"
                className='p-2 outline-none responsive-select'
              />

            </div>
            {errors.referralstate && <div className="text-red-500">{errors.referralstate}</div>}

            <div className='flex items-center space-x-2'>
              <label className='font-bold'>Zip: </label>
              <input
                className='w-full border-b-2 border-black outline-none'
                type="text"
                value={referralzip}
                onChange={(e) => setreferralzip(e.target.value)}
              />
            </div>
            {errors.referralzip && <div className="text-red-500">{errors.referralzip}</div>}
          </div>

          <div className='flex'>
            <label className='font-bold'>Phone: </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={referralphone}
              onChange={(e) => setreferralphone(e.target.value)}
            />
            <label className='font-bold'>E-mail: </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="email"
              value={referralemail}
              onChange={(e) => setreferralemail(e.target.value)}
            />
          </div>
          {errors.referralphone && <div className="text-red-500">{errors.referralphone}</div>}
          {errors.referralemail && <div className="text-red-500">{errors.referralemail}</div>}
          <div className='flex'>
            <label className='font-bold'>Contact: </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={referralcontact}
              onChange={(e) => setreferralcontact(e.target.value)}
            />

            <label className='font-bold'>Cell: </label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={referralcell}
              onChange={(e) => setreferralcell(e.target.value)}
            />
          </div>
          {errors.referralcell && <div className="text-red-500">{errors.referralcell}</div>}
          {errors.referralcontact && <div className="text-red-500">{errors.referralcontact}</div>}

        </div>


      </section>
      <section className='flex mt-5'>
        <div className='w-1/2 p-3 mr-3 border-2 rounded-md'>
          <h1 className='mb-2 font-extrabold border-b-2'>ADDITIONAL CONTACTS</h1>
          <div>
            <div className='flex'>
              <label className='font-bold'>Name : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={acname1}
                onChange={(e) => setacname1(e.target.value)} />
              <label className='font-bold'>Company : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={accmpname1}
                onChange={(e) => setaccmpname1(e.target.value)} />
            </div>
            {errors.acname1 && <p className='text-red-500'>{errors.acname1}</p>}
            {errors.accmpname1 && <p className='text-red-500'>{errors.accmpname1}</p>}

            <div className='flex'>
              <label className='font-bold'>Phone : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={acphone1}
                onChange={(e) => setacphone1(e.target.value)} />
              <label className='font-bold'>E-mail : </label>
              <input className='w-full border-b-2 border-black outline-none' type="email" value={acemail1}
                onChange={(e) => setacemail1(e.target.value)} />
            </div>
            {errors.acphone1 && <p className='text-red-500'>{errors.acphone1}</p>}
            {errors.acemail1 && <p className='text-red-500'>{errors.acemail1}</p>}
          </div>
          <div className='mt-5'>
            <div className='flex'>
              <label className='font-bold'>Name : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={acname2}
                onChange={(e) => setacname2(e.target.value)} />
              <label className='font-bold'>Company : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={accmpname2}
                onChange={(e) => setaccmpname2(e.target.value)} />
            </div>
            {errors.acname2 && <p className='text-red-500'>{errors.acname2}</p>}
            {errors.accmpname2 && <p className='text-red-500'>{errors.accmpname2}</p>}
            <div className='flex'>
              <label className='font-bold'>Phone : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={acphone2}
                onChange={(e) => setacphone2(e.target.value)} />
              <label className='font-bold'>E-mail : </label>
              <input className='w-full border-b-2 border-black outline-none' type="email" value={acemail2}
                onChange={(e) => setacemail2(e.target.value)} />
            </div>
            {errors.acphone2 && <p className='text-red-500'>{errors.acphone2}</p>}
            {errors.acemail2 && <p className='text-red-500'>{errors.acemail2}</p>}
          </div>
          <div className='mt-5'>
            <div className='flex'>
              <label className='font-bold'>Name : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={acname3}
                onChange={(e) => setacname3(e.target.value)} />
              <label className='font-bold'>Company : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={accmpname3}
                onChange={(e) => setaccmpname3(e.target.value)} />
            </div>
            {errors.acname3 && <p className='text-red-500'>{errors.acname3}</p>}
            {errors.accmpname3 && <p className='text-red-500'>{errors.accmpname3}</p>}
            <div className='flex'>
              <label className='font-bold'>Phone : </label>
              <input className='w-full border-b-2 border-black outline-none' type="text" value={acphone3}
                onChange={(e) => setacphone3(e.target.value)} />
              <label className='font-bold'>E-mail : </label>
              <input className='w-full border-b-2 border-black outline-none' type="email" value={acemail3}
                onChange={(e) => setacemail3(e.target.value)} />
            </div>
            {errors.acphone3 && <p className='text-red-500'>{errors.acphone3}</p>}
            {errors.acemail3 && <p className='text-red-500'>{errors.acemail3}</p>}
          </div>
        </div>
        <div className='w-1/2 p-3 ml-3 border-2 rounded-md'>
          <h1 className='mb-2 font-extrabold border-b-2'>SCOPE OF WORK</h1>
          <div>
            <textarea className='w-full p-2 border-2 rounded-md outline-none' name="" id="" rows="8" value={scopework}
              onChange={(e) => setscopework(e.target.value)}></textarea>
          </div>
          {errors.scopework && <span className="text-red-500">{errors.scopework}</span>}
        </div>
      </section>

      <section className='flex mt-5 '>
        <div className="md:w-[25%] sm:w-[50%] mx-3 p-3 border-2 rounded-md">
          <h1 className='mb-2 font-extrabold border-b-2'>CUSTOMER TYPE</h1>
          <Multiselect
            options={CustTypeOptions.options}
            displayValue="name"
            onSelect={(selectedList) => setCustomerTypes(selectedList)}
            onRemove={(selectedList) => setCustomerTypes(selectedList)}
            placeholder="Select Customer Types"
            className={`w-full ${errors.customerTypes ? 'border-red-500' : 'border-black'}`}
          />

          {errors.customerTypes && <div className="text-red-500">{errors.customerTypes}</div>}
        </div>

        <div className="w-full md:w-[25%] mr-3 p-3 border-2 rounded-md">
          <h1 className='mb-2 font-extrabold border-b-2'>JOB AND WORK TYPE</h1>
          <Multiselect
            options={JobAndWorkType.options}
            displayValue="name"
            onSelect={(selectedList) => setJobAndWorkTypes(selectedList)}
            onRemove={(selectedList) => setJobAndWorkTypes(selectedList)}
            placeholder="Select Job and Work Types"
            className={`w-full ${errors.jobAndWorkTypes ? 'border-red-500' : 'border-black'}`}
          />

          {errors.jobAndWorkTypes && <div className="text-red-500">{errors.jobAndWorkTypes}</div>}
        </div>

        <div className="md:w-[25%] sm:w-[50%] mx-3 p-3 border-2 rounded-md">
          <h1 className='mb-2 font-extrabold border-b-2'>AGENCY INFORMATION</h1>

          <div className='flex'>
            <label className='font-bold'>EPA ID #</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={epaId}
              onChange={(e) => setEpaId(e.target.value)}
            />
          </div>
          {errors.epaId && <div className="text-red-500">{errors.epaId}</div>}

          <div className='flex'>
            <label className='font-bold'>Haz.Manifest:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={hazManifest}
              onChange={(e) => setHazManifest(e.target.value)}
            />
          </div>
          {errors.hazManifest && <div className="text-red-500">{errors.hazManifest}</div>}

          <div className='flex'>
            <label className='font-bold'>Non-Haz. Man.:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={nonHazManifest}
              onChange={(e) => setNonHazManifest(e.target.value)}
            />
          </div>
          {errors.nonHazManifest && <div className="text-red-500">{errors.nonHazManifest}</div>}


          <div className='flex'>
            <label className='font-bold'>Non-Haz. Man.&lt;1%:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={nonHazManLT1}
              onChange={(e) => setNonHazManLT1(e.target.value)}
            />
          </div>
          {errors.nonHazManLT1 && <div className="text-red-500">{errors.nonHazManLT1}</div>}


          <div className='flex'>
            <label className='font-bold'>Trash:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={trash}
              onChange={(e) => setTrash(e.target.value)}
            />
          </div>
          {errors.trash && <div className="text-red-500">{errors.trash}</div>}


          <div className='flex'>
            <label className='font-bold'>Project type:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            />
          </div>
          {errors.projectType && <div className="text-red-500">{errors.projectType}</div>}


          <div className='flex'>
            <label className='font-bold'>Building size:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={buildingSize}
              onChange={(e) => setBuildingSize(e.target.value)}
            />
          </div>
          {errors.buildingSize && <div className="text-red-500">{errors.buildingSize}</div>}


          <div className='flex'>
            <label className='font-bold'>Number of floors:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={numberOfFloors}
              onChange={(e) => setNumberOfFloors(e.target.value)}
            />
          </div>
          {errors.numberOfFloors && <div className="text-red-500">{errors.numberOfFloors}</div>}


          <div className='flex'>
            <label className='font-bold'>Building age:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={buildingAge}
              onChange={(e) => setBuildingAge(e.target.value)}
            />
          </div>
          {errors.buildingAge && <div className="text-red-500">{errors.buildingAge}</div>}


          <div className='flex'>
            <label className='font-bold'>No. of dwelling units:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={numDwellingUnits}
              onChange={(e) => setNumDwellingUnits(e.target.value)}
            />
          </div>
          {errors.numDwellingUnits && <div className="text-red-500">{errors.numDwellingUnits}</div>}


          <div className='flex'>
            <label className='font-bold'>Present/Prior use:</label>
            <input
              className='w-full border-b-2 border-black outline-none'
              type="text"
              value={priorUse}
              onChange={(e) => setPriorUse(e.target.value)}
            />
          </div>
          {errors.priorUse && <div className="text-red-500">{errors.priorUse}</div>}


          <div className='flex'>
            <label className='p-2 font-bold'>Procedure:</label>
            <div>
              <Multiselect
                options={UsProcedure.options}
                displayValue="name"
                singleSelect={true}
                placeholder="Select a Procedure"
                className='w-full p-2 outline-none cursor-pointer'
                onSelect={agencyinfoselect}
              />

            </div>
            {errors.procedure && <div className="text-red-500">{errors.procedure}</div>}
          </div>

          <div className='flex'>
            <label className='font-bold'>Survey : </label>
            <div>
              <input className='ml-4' type="radio" name="survey" id="yes" value="Yes" onChange={(e) => setSurvey(e.target.value)} /> <label className='font-bold'>Yes</label>
              <input className='ml-4' type="radio" name="survey" id="no" value="No" onChange={(e) => setSurvey(e.target.value)} /> <label className='font-bold'>NO</label>
            </div>
          </div>
        </div>


        <div className="md:w-[25%] sm:w-[50%] ml-3 p-3 border-2 rounded-md">
          <div className='flex flex-col p-3 border-2 rounded-md'>
            <label className='font-bold'>Contract Amount:</label>
            <div className='flex'>
              $<input
                className='w-full border-b-2 border-black outline-none'
                type="text"
                value={contractAmount}
                onChange={(e) => setContractAmount(e.target.value)}
              />
            </div>
            {errors.contractAmount && <div className="text-red-500">{errors.contractAmount}</div>}
          </div>

          <div className='flex flex-col p-3 mt-3 border-2 rounded-md'>
            <h1 className='mb-2 font-extrabold border-b-2'>LOCK BOX COMBO</h1>
            <div>
              <textarea
                className='w-full p-2 border-2 rounded-md outline-none'
                rows="4"
                value={lockBoxCombo}
                onChange={(e) => setLockBoxCombo(e.target.value)}
              ></textarea>
            </div>
            {errors.lockBoxCombo && <div className="text-red-500">{errors.lockBoxCombo}</div>}
          </div>

          <div className='flex flex-col p-3 mt-3 border-2 rounded-md'>
            <h1 className='mb-2 font-extrabold border-b-2'>Special instructions or additional notes:</h1>
            <div>
              <textarea
                className='w-full p-2 border-2 rounded-md outline-none'
                rows="4"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
              ></textarea>
            </div>
            {errors.specialInstructions && <div className="text-red-500">{errors.specialInstructions}</div>}
          </div>
        </div>

      </section>
      <button
        onClick={handleSave}
        className='float-right px-5 py-2 m-6 text-white bg-blue-500 rounded-lg hover:bg-gray-800 active:bg-gray-900 focus:outline-none'
        aria-label="Save"
      >
        Submit
      </button>
    </>
  )
}

export default Form