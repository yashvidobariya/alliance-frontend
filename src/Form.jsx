import React, { useEffect, useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { CustTypeOptions, JobAndWorkType, UsProcedure, USStateOptions } from './Data';
import { account, Formdata } from '../src/Router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../src/style.css'
import emailjs from '@emailjs/browser';
import { zipdata } from '../src/Data'
import axios from 'axios';


const Form = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('');
  const [estimator, setestimator] = useState('');
  const [estimator1, setestimator1] = useState('');
  const [estimator2, setestimator2] = useState('');
  const [estimator3, setestimator3] = useState('');
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
  // ======same
  const [sameprojectcustmer, setsameprojectcustmer] = useState(false);
  const [sameprojectowner, setsameprojectowner] = useState(false);
  const [sameprojectrefferal, setsameprojectrefferal] = useState(false);

  const [samecustomerproject, setsamecustomerproject] = useState(false);
  const [samecustomerowner, setsamecustomerowner] = useState(false);
  const [samecustomerrefferal, setsamecustomerrefferal] = useState(false);

  const [sameownerproject, setsameownerproject] = useState(false);
  const [sameownercustomer, setsameownercustomer] = useState(false);
  const [sameownerprojects, setsameownerprojects] = useState(false);

  const [samerefferalcustomer, setsamerefferalcustomer] = useState(false);
  const [samerefferalproject, setsamerefferalproject] = useState(false);
  const [samerefferalowner, setsamerefferalowner] = useState(false);

  const [testingCompanies, setTestingCompanies] = useState({
    company1: false,
    company2: false,
    company3: false,
  });

  // const [samecontact12, setsamecontact12] = useState(false);
  // const [samecontact13, setsamecontact13] = useState(false);
  // const [samecontact21, setsamecontact21] = useState(false);
  // const [samecontact23, setsamecontact23] = useState(false);
  // const [samecontact31, setsamecontact31] = useState(false);
  // const [samecontact32, setsamecontact32] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  // const onRemove = (selectedList, removedItem) => {
  //   //console.log('Remaining Items:', selectedList);
  // };
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [zipError, setZipError] = useState({
    project: '',
    customer: '',
    owner: '',
    referral: '',
  });

  const handleFormChange = (company, checked) => {
    setTestingCompanies((prev) => ({
      ...prev,
      [company]: checked,
    }));
  };

  const { company1, company2, company3 } = testingCompanies;


  const handleInputChange = async (e) => {
    const value = e.target.value;
    setCustomerName(value);

    if (value.trim) {
      try {
        const url = `${account}?searchTerm=${value}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data", data);

        setSuggestions(Array.isArray(data) ? data : []);
        setIsDropdownVisible(data.length > 0);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
        setIsDropdownVisible(false);
      }
    } else {
      setSuggestions([]);
      setIsDropdownVisible(false);
    }
  };

  const handleEstimatorChange = (e, estimatorType) => {
    if (estimatorType === 'estimator') setestimator(e.target.value);
    if (estimatorType === 'estimator1') setestimator1(e.target.value);
    if (estimatorType === 'estimator2') setestimator2(e.target.value);
    if (estimatorType === 'estimator3') setestimator3(e.target.value);
  };

  const validation = () => {
    let newErrors = {};
    const totalSplit = Number(estimator2) + Number(estimator3);

    // if (acname1 || accmpname1 || acphone1 || acemail1) {
    //   if (!isTestingCompany1) {
    //     newErrors.testingCompany1 = 'Please check Testing Company before saving.';
    //   }
    // }

    // if (acname2 || accmpname2 || acphone2 || acemail2) {
    //   if (!isTestingCompany2) {
    //     newErrors.testingCompany2 = 'Please check Testing Company before saving.';
    //   }
    // }

    // if (acname3 || accmpname3 || acphone3 || acemail3) {
    //   if (!isTestingCompany3) {
    //     newErrors.testingCompany3 = 'Please check Testing Company before saving.';
    //   }
    // }

    // If there are errors, set them in state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
    // if (totalSplit !== 100) {
    //   newErrors.split = 'Estimator 2 and Estimator 3 must add up to 100.';
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (validation()) {
      const data = {
        estimator: estimator,
        estimator1: estimator1,
        estimator2: estimator2,
        estimator3: estimator3,
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
        ac_testing_cmp1: company1.toString(),
        ac_name2: acname2,
        ac_company2: accmpname2,
        ac_phone2: acphone2,
        ac_email2: acemail2,
        ac_testing_cmp2: company2.toString(),
        ac_name3: acname3,
        ac_company3: accmpname3,
        ac_phone3: acphone3,
        ac_email3: acemail3,
        ac_testing_cmp3: company3.toString(),
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
      console.log("data", data);

      try {
        // const response = await fetch(Formdata, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(data),
        // });
        // if (!response.ok) {
        //   alert("Form data not submitted");
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const result = await response.json();
        //  console.log('Saved Customer Data:', result);
        console.log('Saved Customer Data:', data);
        alert("Form data submitted");

        const templetedata = {
          estimator: estimator,
          estimator1: estimator1,
          estimator2: estimator2,
          estimator3: estimator3,
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
          ac_testing_cmp1: company1,
          ac_name2: acname2,
          ac_company2: accmpname2,
          ac_phone2: acphone2,
          ac_email2: acemail2,
          ac_testing_cmp2: company2,
          ac_name3: acname3,
          ac_company3: accmpname3,
          ac_phone3: acphone3,
          ac_email3: acemail3,
          ac_testing_cmp3: company3,
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
        if (Array.isArray(templetedata.customer_type)) {
          templetedata.customer_type = templetedata.customer_type.map(item => item.name).join(',');
        }
        if (Array.isArray(templetedata.job_and_work_type)) {
          templetedata.job_and_work_type = templetedata.job_and_work_type.map(item => item.name).join(',');
        }
        emailjs
          .send('service_i7fswl4', 'template_1e6inol', templetedata, 'H13j29Q1_S8tOEECv')
          .then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              alert("Email sent successfully!");
            },
            (error) => {
              console.log('FAILED...', error);
              alert("Failed to send email.");
            }
          );
      } catch (error) {
        alert("Form data not submitted");
        console.error('Error ', error);
      }
    };
  };

  const handleCheckboxChangecustomer = (e) => {
    setsameprojectcustmer(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setAddress(prev => prev === '' ? customerAddress : prev);
      setCity(prev => prev === '' ? customerCity : prev);
      setState(prev => prev === '' ? customerState : prev);
      setZip(prev => prev === '' ? customerZip : prev);
      setPhone(prev => prev === '' ? customerPhone : prev);
      setContact(prev => prev === '' ? customerContact : prev);
      setEmail(prev => prev === '' ? customerEmail : prev);
    } else {
      //   // setCustomerName('');
      setAddress('');
      setCity('');
      setState('');
      setZip('');
      setPhone('');
      setContact('');
      setEmail('');
    }
  };

  const handleCheckboxChangeowner = (e) => {
    setsameprojectowner(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setAddress(prev => prev === '' ? owneraddress : prev);
      setCity(prev => prev === '' ? ownercity : prev);
      setState(prev => prev === '' ? ownerstate : prev);
      setZip(prev => prev === '' ? ownerzip : prev);
      setPhone(prev => prev === '' ? ownerphone : prev);
      setContact(prev => prev === '' ? ownercontact : prev);
      setEmail(prev => prev === '' ? owneremail : prev);
    } else {
      setCustomerName('');
      setAddress('');
      setCity('');
      setState('');
      setZip('');
      setPhone('');
      setContact('');
      setEmail('');
    }
  };

  const handleCheckboxChangerefferal = (e) => {
    setsameprojectrefferal(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setAddress(prev => prev === '' ? referraladdress : prev);
      setCity(prev => prev === '' ? referralcity : prev);
      setState(prev => prev === '' ? referralstate : prev);
      setZip(prev => prev === '' ? referralzip : prev);
      setPhone(prev => prev === '' ? referralphone : prev);
      setContact(prev => prev === '' ? referralcontact : prev);
      setEmail(prev => prev === '' ? referralemail : prev);
    } else {
      // setCustomerName('');
      setAddress('');
      setCity('');
      setState('');
      setZip('');
      setPhone('');
      setContact('');
      setEmail('');
    }
  };

  const handleCheckboxChangecustomerproject = (e) => {
    setsamecustomerproject(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setCustomerAddress(prev => prev === '' ? address : prev);
      setCustomerCity(prev => prev === '' ? city : prev);
      setCustomerState(prev => prev === '' ? state : prev);
      setCustomerZip(prev => prev === '' ? zip : prev);
      setCustomerPhone(prev => prev === '' ? phone : prev);
      setCustomerContact(prev => prev === '' ? contact : prev);
      setCustomerEmail(prev => prev === '' ? email : prev);
    } else {
      setCustomerName('');
      setCustomerAddress("");
      setCustomerCity("");
      setCustomerState("");
      setCustomerZip("");
      setCustomerPhone("");
      setCustomerContact("");
      setCustomerEmail("");
    }
  };

  const handleCheckboxChangecustomerowner = (e) => {
    setsamecustomerowner(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setCustomerAddress(prev => prev === '' ? owneraddress : prev);
      setCustomerCity(prev => prev === '' ? ownercity : prev);
      setCustomerState(prev => prev === '' ? ownerstate : prev);
      setCustomerZip(prev => prev === '' ? ownerzip : prev);
      setCustomerPhone(prev => prev === '' ? ownerphone : prev);
      setCustomerContact(prev => prev === '' ? ownercontact : prev);
    } else {
      setCustomerName('');
      setCustomerAddress("");
      setCustomerCity("");
      setCustomerState("");
      setCustomerZip("");
      setCustomerPhone("");
      setCustomerContact("");
      setCustomerEmail("");
    }
  };

  const handleCheckboxChangecustomerrefferal = (e) => {
    setsamecustomerrefferal(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setCustomerAddress(prev => prev === '' ? referraladdress : prev);
      setCustomerCity(prev => prev === '' ? referralcity : prev);
      setCustomerState(prev => prev === '' ? referralstate : prev);
      setCustomerZip(prev => prev === '' ? referralzip : prev);
      setCustomerPhone(prev => prev === '' ? referralphone : prev);
      setCustomerContact(prev => prev === '' ? referralcontact : prev);
      setCustomerEmail(prev => prev === '' ? referralemail : prev);
    } else {
      setCustomerName('');
      setCustomerAddress("");
      setCustomerCity("");
      setCustomerState("");
      setCustomerZip("");
      setCustomerPhone("");
      setCustomerContact("");
      setCustomerEmail("");
    }
  };

  const handleCheckboxChangeownerrefferal = (e) => {
    setsameownerproject(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setOwneraddress(prev => prev === '' ? referraladdress : prev);
      setOwnercity(prev => prev === '' ? referralcity : prev);
      setOwnerstate(prev => prev === '' ? referralstate : prev);
      setOwnerzip(prev => prev === '' ? referralzip : prev);
      setOwnerphone(prev => prev === '' ? referralphone : prev);
      setOwnercontact(prev => prev === '' ? referralcontact : prev);
      setOwneremail(prev => prev === '' ? referralemail : prev);
    } else {
      setCustomerName('');
      setOwneraddress("");
      setOwnercity("");
      setOwnerstate("");
      setOwnerzip("");
      setOwnerphone("");
      setOwnercontact("");
      setOwneremail("");
    }
  };

  const handleCheckboxChangeownercustomer = (e) => {
    setsameownercustomer(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setOwneraddress(prev => prev === '' ? customerAddress : prev);
      setOwnercity(prev => prev === '' ? customerCity : prev);
      setOwnerstate(prev => prev === '' ? customerState : prev);
      setOwnerzip(prev => prev === '' ? customerZip : prev);
      setOwnerphone(prev => prev === '' ? customerPhone : prev);
      setOwnercontact(prev => prev === '' ? customerContact : prev);
      setOwneremail(prev => prev === '' ? customerEmail : prev);
    } else {
      setCustomerName('');
      setOwneraddress("");
      setOwnercity("");
      setOwnerstate("");
      setOwnerzip("");
      setOwnerphone("");
      setOwnercontact("");
      setOwneremail("");
    }
  };

  const handleCheckboxChangeownerproject = (e) => {
    setsameownerprojects(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setOwneraddress(prev => prev === '' ? address : prev);
      setOwnercity(prev => prev === '' ? city : prev);
      setOwnerstate(prev => prev === '' ? state : prev);
      setOwnerzip(prev => prev === '' ? zip : prev);
      setOwnerphone(prev => prev === '' ? phone : prev);
      setOwnercontact(prev => prev === '' ? contact : prev);
      setOwneremail(prev => prev === '' ? email : prev);
    } else {
      setCustomerName('');
      setOwneraddress("");
      setOwnercity("");
      setOwnerstate("");
      setOwnerzip("");
      setOwnerphone("");
      setOwnercontact("");
      setOwneremail("");
    }
  };

  const handleCheckboxChangerefferalproject = (e) => {
    setsamerefferalproject(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setreferraladdress(prev => prev === '' ? address : prev);
      setreferralcity(prev => prev === '' ? city : prev);
      setreferralstate(prev => prev === '' ? state : prev);
      setreferralzip(prev => prev === '' ? zip : prev);
      setreferralphone(prev => prev === '' ? phone : prev);
      setreferralcontact(prev => prev === '' ? contact : prev);
      setreferralemail(prev => prev === '' ? email : prev);
    } else {
      setCustomerName('');
      setreferraladdress("");
      setreferralcity("");
      setreferralstate("");
      setreferralzip("");
      setreferralphone("");
      setreferralcontact("");
      setreferralemail("");
    }
  };

  const handleCheckboxChangerefferalcustomer = (e) => {
    setsamerefferalcustomer(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setreferraladdress(prev => prev === '' ? customerAddress : prev);
      setreferralcity(prev => prev === '' ? customerCity : prev);
      setreferralstate(prev => prev === '' ? customerState : prev);
      setreferralzip(prev => prev === '' ? customerZip : prev);
      setreferralphone(prev => prev === '' ? customerPhone : prev);
      setreferralcontact(prev => prev === '' ? customerContact : prev);
      setreferralemail(prev => prev === '' ? customerEmail : prev);
    } else {
      setCustomerName('');
      setreferraladdress("");
      setreferralcity("");
      setreferralstate("");
      setreferralzip("");
      setreferralphone("");
      setreferralcontact("");
      setreferralemail("");
    }
  };

  const handleCheckboxChangerefferalowner = (e) => {
    setsamerefferalowner(e.target.checked);
    if (e.target.checked) {
      // setCustomerName(customerName);
      setreferraladdress(prev => prev === '' ? owneraddress : prev);
      setreferralcity(prev => prev === '' ? ownercity : prev);
      setreferralstate(prev => prev === '' ? ownerstate : prev);
      setreferralzip(prev => prev === '' ? ownerzip : prev);
      setreferralphone(prev => prev === '' ? ownerphone : prev);
      setreferralemail(prev => prev === '' ? ownercontact : prev);
      setreferralcontact(prev => prev === '' ? owneremail : prev);
    } else {
      // setCustomerName('');
      setreferraladdress("");
      setreferralcity("");
      setreferralstate("");
      setreferralzip("");
      setreferralphone("");
      setreferralcontact("");
      setreferralemail("");
    }
  };

  // const handlecontact12 = (e) => {
  //   setsamecontact12(e.target.checked);
  //   if (e.target.checked) {
  //     // setCustomerName(customerName);
  //     setacname1(prev => prev === '' ? acname2 : prev);
  //     setaccmpname1(prev => prev === '' ? accmpname2 : prev);
  //     setacphone1(prev => prev === '' ? acphone2 : prev);
  //     setacemail1(prev => prev === '' ? acemail2 : prev);

  //   } else {
  //     // setCustomerName('');
  //     setacname1("");
  //     setaccmpname1("");
  //     setacphone1("");
  //     setacemail1("");
  //   }
  // };

  // const handlecontact13 = (e) => {
  //   setsamecontact13(e.target.checked);
  //   if (e.target.checked) {
  //     // setCustomerName(customerName);
  //     setacname1(prev => prev === '' ? acname3 : prev);
  //     setaccmpname1(prev => prev === '' ? accmpname3 : prev);
  //     setacphone1(prev => prev === '' ? acphone3 : prev);
  //     setacemail1(prev => prev === '' ? acemail3 : prev);

  //   } else {
  //     // setCustomerName('');
  //     setacname1("");
  //     setaccmpname1("");
  //     setacphone1("");
  //     setacemail1("");
  //   }
  // };

  // const handlecontact21 = (e) => {
  //   setsamecontact21(e.target.checked);
  //   if (e.target.checked) {
  //     // setCustomerName(customerName);
  //     setacname2(prev => prev === '' ? acname1 : prev);
  //     setaccmpname2(prev => prev === '' ? accmpname1 : prev);
  //     setacphone2(prev => prev === '' ? acphone1 : prev);
  //     setacemail2(prev => prev === '' ? acemail1 : prev);

  //   } else {
  //     // setCustomerName('');
  //     setacname2("");
  //     setaccmpname2("");
  //     setacphone2("");
  //     setacemail2("");
  //   }
  // };

  // const handlecontact23 = (e) => {
  //   setsamecontact23(e.target.checked);
  //   if (e.target.checked) {
  //     // setCustomerName(customerName);
  //     setacname2(prev => prev === '' ? acname3 : prev);
  //     setaccmpname2(prev => prev === '' ? accmpname3 : prev);
  //     setacphone2(prev => prev === '' ? acphone3 : prev);
  //     setacemail2(prev => prev === '' ? acemail3 : prev);

  //   } else {
  //     // setCustomerName('');
  //     setacname2("");
  //     setaccmpname2("");
  //     setacphone2("");
  //     setacemail2("");
  //   }
  // };

  // const handlecontact31 = (e) => {
  //   setsamecontact31(e.target.checked);
  //   if (e.target.checked) {
  //     // setCustomerName(customerName);
  //     setacname3(prev => prev === '' ? acname1 : prev);
  //     setaccmpname3(prev => prev === '' ? accmpname1 : prev);
  //     setacphone3(prev => prev === '' ? acphone1 : prev);
  //     setacemail3(prev => prev === '' ? acemail1 : prev);

  //   } else {
  //     // setCustomerName('');
  //     setacname3("");
  //     setaccmpname3("");
  //     setacphone3("");
  //     setacemail3("");
  //   }
  // };

  // const handlecontact32 = (e) => {
  //   setsamecontact32(e.target.checked);
  //   if (e.target.checked) {
  //     // setCustomerName(customerName);
  //     setacname3(prev => prev === '' ? acname2 : prev);
  //     setaccmpname3(prev => prev === '' ? accmpname2 : prev);
  //     setacphone3(prev => prev === '' ? acphone2 : prev);
  //     setacemail3(prev => prev === '' ? acemail2 : prev);

  //   } else {
  //     // setCustomerName('');
  //     setacname3("");
  //     setaccmpname3("");
  //     setacphone3("");
  //     setacemail3("");
  //   }
  // };

  const handleSelect = (type, selectedItem) => {
    if (selectedItem) {
      switch (type) {
        case 'project':
          setState(selectedItem.name);
          break;
        case 'customer':
          setCustomerState(selectedItem.name);
          break;
        case 'owner':
          setOwnerstate(selectedItem.name);
          break;
        case 'referral':
          setreferralstate(selectedItem.name);
          break;
        default:
          break;
      }
      setSelectedItem(selectedItem);
    }
  };

  // useEffect to synchronize states based on checkboxes
  useEffect(() => {
    if (selectedItem) {
      if (samecustomerproject) setCustomerState(selectedItem.name);
      if (sameownerprojects) setOwnerstate(selectedItem.name);
      if (samerefferalproject) setreferralstate(selectedItem.name);
      if (sameprojectcustmer) setState(selectedItem.name);
      if (sameownercustomer) setOwnerstate(selectedItem.name);
      if (samerefferalcustomer) setreferralstate(selectedItem.name);
      if (sameprojectowner) setState(selectedItem.name);
      if (samecustomerowner) setOwnerstate(selectedItem.name);
      if (samerefferalowner) setreferralstate(selectedItem.name);
      if (sameprojectrefferal) setState(selectedItem.name);
      if (samecustomerrefferal) setOwnerstate(selectedItem.name);
      // if (sameownerprojects) setreferralstate(selectedItem.name);
    }
  }, [selectedItem, samecustomerproject, sameownerprojects, samerefferalproject, sameprojectcustmer, sameownercustomer, samerefferalcustomer, sameprojectowner, samecustomerowner, samerefferalowner, sameownerprojects]);


  const agencyinfoselect = (selectedList, selectedItem) => {
    if (selectedItem) {
      setProcedure(selectedItem.name);
      console.log("select agencyinfoselect", selectedItem);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setCustomerName(suggestion.account_name);
    setIsDropdownVisible(false);
  };

  const handleZipChange = async (e, type) => {
    const zip = e.target.value;
    console.log("zip", zip);

    switch (type) {
      case 'project':
        setZip(zip);
        break;
      case 'customer':
        setCustomerZip(zip);
        break;
      case 'owner':
        setOwnerzip(zip);
        break;
      case 'referral':
        setreferralzip(zip);
        break;
      default:
        break;
    }

    if (zip.length === 5) {
      try {
        const response = await axios.get(`https://api.zippopotam.us/us/${zip}`);
        const city = response.data.places[0]['place name'];
        const state = response.data.places[0]['state abbreviation'];

        // Set city and state based on type
        switch (type) {
          case 'project':
            setCity(city);
            setState(state);
            setZipError(prev => ({ ...prev, project: '' }));
            break;
          case 'customer':
            setCustomerCity(city);
            setCustomerState(state);
            setZipError(prev => ({ ...prev, customer: '' }));
            break;
          case 'owner':
            setOwnercity(city);
            setOwnerstate(state);
            setZipError(prev => ({ ...prev, owner: '' }));
            break;
          case 'referral':
            setreferralcity(city);
            setreferralstate(state);
            setZipError(prev => ({ ...prev, referral: '' }));
            break;
          default:
            break;
        }

      } catch (error) {
        console.error("Error fetching data", error);
        resetCityState(type);
        setZipError(prev => ({ ...prev, [type]: 'Please enter a valid ZIP code' }));
      }
    } else {
      resetCityState(type);
      setZipError(prev => ({ ...prev, [type]: 'ZIP code must be 5 digits' }));
    }
  };

  const resetCityState = (type) => {
    switch (type) {
      case 'project':
        setCity('');
        setState('');
        break;
      case 'customer':
        setCustomerCity('');
        setCustomerState('');
        break;
      case 'owner':
        setOwnercity('');
        setOwnerstate('');
        break;
      case 'referral':
        setreferralcity('');
        setreferralstate('');
        break;
      default:
        break;
    }
  };


  return (
    <>
      <div className="header">
        <img src="/image/logo.png" className="logo" alt="Logo" />
        <h1 className="title">TICK SHEET</h1>
      </div>

      <div className="form-container">
        <div>
          <div className="input-group">
            <label className="label">Estimator 1: </label>
            <input className="input" type="text" value={estimator} onChange={(e) => handleEstimatorChange(e, 'estimator')} />
          </div>
          <div className="input-group">
            <label className="label">Estimator 2: </label>
            <input className="input" type="text" value={estimator1} onChange={(e) => handleEstimatorChange(e, 'estimator1')} />
          </div>
          <div className="input-group">
            <label className="label">Estimator 3: </label>
            <input className="input" type="text" value={estimator2} onChange={(e) => handleEstimatorChange(e, 'estimator2')} />
          </div>
          {/* <div className="input-group">
            <label className="label">Estimator 3 Percentage: </label>
            <input className="input" type="text" value={estimator3} onChange={(e) => handleEstimatorChange(e, 'estimator3')} />
          </div> */}
          {errors.estimator && <p className="error-message">{errors.estimator}</p>}
          {errors.split && <p className="error-message">{errors.split}</p>}


          <div className="input-group">
            <label className="label">Proposal#: </label>
            <input className="input" type="text" value={proposal} onChange={(e) => setproposal(e.target.value)} />
          </div>
          {errors.proposal && <p className="error-message">{errors.proposal}</p>}
        </div>

        <div>
          <div className="input-group">
            <label className="label">Job Walk Date: </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MM/dd/YYYY"
              isClearable
              placeholderText="Select a date"
            />
            {errors.selectedDate && <p className="error-message">{errors.selectedDate}</p>}
          </div>

          <div className="input-group">
            <label className="label">Job Walk Time: </label>
            <input type="time" id="timeInput" name="timeInput" value={time} onChange={(e) => setTime(e.target.value)} />
            {errors.time && <p className="error-message">{errors.time}</p>}
          </div>
        </div>
      </div>


      <section className='project-section'>
        <div className="container-project">
          <h1 className="header">PROJECT</h1>

          <div className="flex-row">
            <label className="label">JOB NAME : </label>
            <input
              className="input-field"
              type="text"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />
          </div>
          {errors.jobName && <p className="error-text">{errors.jobName}</p>}

          <div className="flex-row">
            <label className="label">Contact : </label>
            <input
              className="input-field"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label className="label">Phone : </label>
            <input
              className="input-field"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {errors.contact && <p className="error-text">{errors.contact}</p>}
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <div className="flex-row">
            <label className="label">Address : </label>
            <input
              className="input-field"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {errors.address && <p className="error-text">{errors.address}</p>}

          <div className="flex items-center flex-grow space-x-2 responsive-flex-project">
            <div className="flex">
              <label className="owner-label">City : </label>
              <input
                className="project-input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            {errors.city && <p className="error-text">{errors.city}</p>}

            <div className="flex items-center">
              <label className="owner-label">State : </label>
              <div className="state-selector">
                <Multiselect
                  options={USStateOptions.options}
                  displayValue="name"
                  onSelect={(selectedList, selectedItem) => handleSelect('project', selectedItem)}
                  singleSelect={true}
                  selectedValues={samecustomerproject && customerState ? [{ name: customerState }] : state ? [{ name: state }] : undefined}
                  placeholder="State"
                />
              </div>
            </div>
            {errors.state && <p className="error-text">{errors.state}</p>}

            <div className="flex items-center flex-grow space-x-2">
              <label className="owner-label">Zip : </label>
              <input
                className="owner-input"
                type="text"
                value={zip}
                onChange={(e) => { setZip(e.target.value); handleZipChange(e, 'project'); }}
              />
            </div>
            {errors.zip && <p className="error-text">{errors.zip}</p>}
            {zipError.project && <p className="error-text">{zipError.project}</p>}
          </div>

          <div className="flex-row">
            <label className="label">E-mail : </label>
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {errors.email && <p className="error-text">{errors.email}</p>}

          <br />
          <input
            type="checkbox"
            id="sameaddress"
            name="sameaddress"
            className="checkbox"
            value="sameaddress"
            checked={sameprojectcustmer}
            disabled={
              !(sameprojectcustmer || sameprojectowner || sameprojectrefferal) &&
              (address !== '' || city !== '' || state !== '' || zip !== '' || phone !== '' || contact !== '' || email !== '')
            }
            onChange={handleCheckboxChangecustomer}
          />
          <label htmlFor="sameaddress" className="checkbox-label">Same contact - Customer</label><br />

          <input
            type="checkbox"
            id="sameaddressowner"
            name="sameaddressowner"
            className="checkbox"
            value="sameaddressowner"
            checked={sameprojectowner}
            disabled={
              !(sameprojectcustmer || sameprojectowner || sameprojectrefferal) &&
              (address !== '' || city !== '' || state !== '' || zip !== '' || phone !== '' || contact !== '' || email !== '')
            }
            onChange={handleCheckboxChangeowner}
          />
          <label htmlFor="sameaddressowner" className="checkbox-label">Same contact - Owner</label><br />

          <input
            type="checkbox"
            id="sameaddressrefferal"
            name="sameaddressrefferal"
            className="checkbox"
            value="sameaddressrefferal"
            checked={sameprojectrefferal}
            disabled={
              !(sameprojectcustmer || sameprojectowner || sameprojectrefferal) &&
              (address !== '' || city !== '' || state !== '' || zip !== '' || phone !== '' || contact !== '' || email !== '')
            }
            onChange={handleCheckboxChangerefferal}
          />
          <label htmlFor="sameaddressrefferal" className="checkbox-label">Same contact - Refferal</label>
        </div>


        <div class="container-customer">
          <h1 class="heading">CUSTOMER</h1>
          <div class="field">
            <label class="label">CUSTOMER:</label>
            <input class="input" type="text" value={customerName} onChange={(e) => { setCustomerName(e.target.value); handleInputChange(e); }} />
          </div>

          {errors.customerName && <p class="error-message">{errors.customerName}</p>}
          {isDropdownVisible && suggestions && suggestions.length > 0 && (
            <ul class="suggestions">
              {suggestions.map((suggestion) => (
                <li key={suggestion.account_id} class="suggestion-item" onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion.account_name}
                </li>
              ))}
            </ul>
          )}

          <div class="field">
            <label class="label">Contact:</label>
            <input class="input" type="text" value={customerContact} onChange={(e) => setCustomerContact(e.target.value)} />
            <label class="label">Cell:</label>
            <input class="input" type="text" value={customerCell} onChange={(e) => setCustomerCell(e.target.value)} />
          </div>

          {errors.customerCell && <p class="error-message">{errors.customerCell}</p>}
          {errors.customerContact && <p class="error-message">{errors.customerContact}</p>}

          <div class="field">
            <label class="label">Claim #:</label>
            <input class="input" type="text" value={claimNumber} onChange={(e) => setClaimNumber(e.target.value)} />
            <label class="label">PO #:</label>
            <input class="input" type="text" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} />
          </div>

          {errors.claimNumber && <p class="error-message">{errors.claimNumber}</p>}
          {errors.poNumber && <p class="error-message">{errors.poNumber}</p>}

          <div class="flex">
            <label class="label">Address:</label>
            <input class="input" type="text" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
          </div>

          {errors.customerAddress && <p class="error-message">{errors.customerAddress}</p>}

          <div class="flex items-center flex-grow space-x-2 responsive-flex-project">
            <div class="flex">
              <label class="label">City:</label>
              <input class="customer-input" type="text" value={customerCity} onChange={(e) => setCustomerCity(e.target.value)} />
            </div>
            {errors.customerCity && <p class="error-message">{errors.customerCity}</p>}

            <div class="flex items-center">
              <label class="owner-label">State:</label>
              <div class="multiselect-container">
                <Multiselect
                  options={USStateOptions.options}
                  displayValue="name"
                  onSelect={(selectedList, selectedItem) => handleSelect('customer', selectedItem)}
                  singleSelect={true}
                  selectedValues={sameprojectcustmer && state ? [{ name: state }] : customerState ? [{ name: customerState }] : undefined}
                  placeholder="State"
                  className="multiselect"
                />
              </div>
              {errors.customerState && <p class="error-message">{errors.customerState}</p>}
            </div>

            <div class="flex items-center flex-grow space-x-2">
              <label class="label">Zip:</label>
              <input class="input" type="text" value={customerZip} onChange={(e) => { setCustomerZip(e.target.value); handleZipChange(e, 'customer'); }} />
            </div>
            {errors.customerZip && <p class="error-message">{errors.customerZip}</p>}
            {zipError.customer && <p class="error-message">{zipError.customer}</p>}
          </div>

          <div class="field">
            <label class="label">Phone:</label>
            <input class="input" type="text" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
            <label class="label">E-mail:</label>
            <input class="input" type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
          </div>

          {errors.customerEmail && <p class="error-message">{errors.customerEmail}</p>}
          {errors.customerPhone && <p class="error-message">{errors.customerPhone}</p>}

          <br />
          <input
            type="checkbox"
            id="sameaddress-project-customer"
            name="sameaddress-project-customer"
            class="checkbox"
            value="sameaddress-project-customer"
            checked={samecustomerproject}
            disabled={
              !(samecustomerproject || samecustomerowner || samecustomerrefferal) &&
              (customerAddress !== '' || customerCity !== '' || customerState !== '' || customerZip !== '' || customerPhone !== '' || customerContact !== '' || customerEmail !== '')
            }
            onChange={handleCheckboxChangecustomerproject}
          />
          <label for="sameaddress-project" class="checkbox-label">Same contact - Project</label><br />

          <input
            type="checkbox"
            id="sameaddress-project-owner"
            name="sameaddress-project-owner"
            value="sameaddress-project-owner"
            class="checkbox"
            checked={samecustomerowner}
            disabled={
              !(samecustomerproject || samecustomerowner || samecustomerrefferal) &&
              (customerAddress !== '' || customerCity !== '' || customerState !== '' || customerZip !== '' || customerPhone !== '' || customerContact !== '' || customerEmail !== '')
            }
            onChange={handleCheckboxChangecustomerowner}
          />
          <label for="sameaddress-owner" class="checkbox-label">Same contact - Owner</label><br />

          <input
            type="checkbox"
            id="sameaddress-project-refferal"
            name="sameaddress-project-refferal"
            value="sameaddress-project-refferal"
            class="checkbox"
            checked={samecustomerrefferal}
            disabled={
              !(samecustomerproject || samecustomerowner || samecustomerrefferal) &&
              (customerAddress !== '' || customerCity !== '' || customerState !== '' || customerZip !== '' || customerPhone !== '' || customerContact !== '' || customerEmail !== '')
            }
            onChange={handleCheckboxChangecustomerrefferal}
          />
          <label for="sameaddress-refferal" class="checkbox-label">Same contact - Refferal</label>
        </div>
      </section>

      <section className='owner-section'>
        <div className='owner-container'>
          <h1 className='owner-title'>OWNER</h1>
          <div className='flex'>
            <label className='owner-label'>OWNER : </label>
            <input className='owner-input' type="text" value={ownername} onChange={(e) => setOwnername(e.target.value)} />
          </div>

          <div className='flex'>
            <label className='owner-label'>Contact : </label>
            <input className='owner-input' type="text" value={ownercontact} onChange={(e) => setOwnercontact(e.target.value)} />
            {errors.ownercontact && <span className="error-text">{errors.ownercontact}</span>}
            <label className='owner-label'>Cell : </label>
            <input className='owner-input' type="text" value={ownercell} onChange={(e) => setOwnercell(e.target.value)} />
          </div>
          {errors.ownercell && <span className="error-text">{errors.ownercell}</span>}

          {errors.ownername && <span className="error-text">{errors.ownername}</span>}
          <div className='flex'>
            <label className='owner-label'>Address : </label>
            <input className='owner-input' type="text" value={owneraddress} onChange={(e) => setOwneraddress(e.target.value)} />
          </div>
          {errors.owneraddress && <span className="error-text">{errors.owneraddress}</span>}

          <div className='flex items-center flex-grow space-x-2 responsive-flex-project'>
            <div className='flex'>
              <label className='owner-label'>City : </label>
              <input className='owners-input' type="text" value={ownercity} onChange={(e) => setOwnercity(e.target.value)} />
            </div>
            {errors.ownercity && <span className="error-text">{errors.ownercity}</span>}
            <div className='flex items-center'>
              <label className='owner-label'>State : </label>
              <div className='state-select'>
                <Multiselect
                  options={USStateOptions.options}
                  displayValue="name"
                  onSelect={(selectedList, selectedItem) => handleSelect('owner', selectedItem)}
                  singleSelect={true}
                  selectedValues={sameownerprojects && state ? [{ name: state }] : ownerstate ? [{ name: ownerstate }] : undefined}
                  placeholder="State"
                  className="multiselect"
                />
              </div>
              {errors.ownerstate && <span className="error-text">{errors.ownerstate}</span>}
            </div>
            <div className='flex items-center flex-grow space-x-2'>
              <label className='owner-label'>Zip : </label>
              <input className='owner-input' type="text" value={ownerzip} onChange={(e) => { setOwnerzip(e.target.value); handleZipChange(e, 'owner') }} />
            </div>
            {errors.ownerzip && <span className="error-text">{errors.ownerzip}</span>}
            {zipError.owner && <p className='error-text'>{zipError.owner}</p>}
          </div>
          <div className='flex'>
            <label className='owner-label'>Phone : </label>
            <input className='owner-input' type="text" value={ownerphone} onChange={(e) => setOwnerphone(e.target.value)} />
            <label className='owner-label'>E-mail : </label>
            <input className='owner-input' type="email" value={owneremail} onChange={(e) => setOwneremail(e.target.value)} />
          </div>
          {errors.ownerphone && <span className="error-text">{errors.ownerphone}</span>}
          {errors.owneremail && <span className="error-text">{errors.owneremail}</span>}
          <br />
          <input
            type="checkbox"
            id="sameaddress-project"
            className="checkbox"
            name="sameaddress"
            value="sameaddress"
            checked={sameownerprojects}
            onChange={handleCheckboxChangeownerproject}
            disabled={
              !(sameownerprojects || sameownercustomer || sameownerproject) &&
              (owneraddress !== '' || ownercity !== '' || ownerstate !== '' || ownerzip !== '' || ownerphone !== '' || ownercontact !== '' || owneremail !== '')
            }
          />
          <label htmlFor="sameaddress-project" className='checkbox-label'>Same contact - Project</label><br />

          <input
            type="checkbox"
            id="sameaddress-customer"
            name="sameaddress"
            className="checkbox"
            value="sameaddress"
            checked={sameownercustomer}
            onChange={handleCheckboxChangeownercustomer}
            disabled={
              !(sameownerprojects || sameownercustomer || sameownerproject) &&
              (owneraddress !== '' || ownercity !== '' || ownerstate !== '' || ownerzip !== '' || ownerphone !== '' || ownercontact !== '' || owneremail !== '')
            }
          />
          <label htmlFor="sameaddress-customer" className='checkbox-label'>Same contact - Customer</label><br />

          <input
            type="checkbox"
            id="sameaddress-referral"
            name="sameaddress"
            value="sameaddress"
            className="checkbox"
            checked={sameownerproject}
            onChange={handleCheckboxChangeownerrefferal}
            disabled={
              !(sameownerprojects || sameownercustomer || sameownerproject) &&
              (owneraddress !== '' || ownercity !== '' || ownerstate !== '' || ownerzip !== '' || ownerphone !== '' || ownercontact !== '' || owneremail !== '')
            }
          />
          <label htmlFor="sameaddress-referral" className='checkbox-label'>Same contact - Referral</label>
        </div>

        <div className='container-refferal'>
          <h1 className='header'>REFERRAL</h1>

          <div className='flex'>
            <label className='label'>REFERRAL NAME: </label>
            <input
              className='input'
              type="text"
              value={referralname}
              onChange={(e) => setreferralname(e.target.value)}
            />
          </div>
          {errors.referralname && <div className="error">{errors.referralname}</div>}

          <div className='flex'>
            <label className='label'>Contact: </label>
            <input
              className='input'
              type="text"
              value={referralcontact}
              onChange={(e) => setreferralcontact(e.target.value)}
            />

            <label className='label'>Cell: </label>
            <input
              className='input'
              type="text"
              value={referralcell}
              onChange={(e) => setreferralcell(e.target.value)}
            />
          </div>
          {errors.referralcell && <div className="error">{errors.referralcell}</div>}
          {errors.referralcontact && <div className="error">{errors.referralcontact}</div>}

          <div className='flex-row'>
            <label className='label'>Address: </label>
            <input
              className='input'
              type="text"
              value={referraladdress}
              onChange={(e) => setreferraladdress(e.target.value)}
            />

          </div>
          {errors.referraladdress && <div className="error">{errors.referraladdress}</div>}

          <div class="flex items-center flex-grow space-x-2 responsive-flex-project">
            <div className='flex'>
              <label className='owner-label'>City: </label>
              <input
                className='referal-input'
                type="text"
                value={referralcity}
                onChange={(e) => setreferralcity(e.target.value)}
              />
            </div>
            {errors.referralcity && <div className="error">{errors.referralcity}</div>}

            <div className='flex items-center'>
              <label className='owner-label'>State:  </label>
              <div className='w-32 ml-2'>
                <Multiselect
                  options={USStateOptions.options}
                  displayValue="name"
                  onSelect={(selectedList, selectedItem) => handleSelect('referral', selectedItem)}
                  singleSelect={true}
                  selectedValues={sameprojectcustmer && state ? [{ name: state }] : referralstate ? [{ name: referralstate }] : undefined}
                  placeholder="State"
                  className="input"
                />
              </div>
            </div>
            {errors.referralstate && <div className="error">{errors.referralstate}</div>}

            <div className='flex flex-grow space-x-2 text-center'>
              <label className='label'>Zip : </label>
              <input className='input' type="text" value={referralzip}
                onChange={(e) => { setreferralzip(e.target.value); handleZipChange(e, 'referral') }} />
            </div>
            {zipError.referral && <p className='error'>{zipError.referral}</p>}
            {errors.referralzip && <div className="error">{errors.referralzip}</div>}
          </div>

          <div className='flex'>
            <label className='label'>Phone: </label>
            <input
              className='input'
              type="text"
              value={referralphone}
              onChange={(e) => setreferralphone(e.target.value)}
            />
            <label className='label'>E-mail: </label>
            <input
              className='input'
              type="email"
              value={referralemail}
              onChange={(e) => setreferralemail(e.target.value)}
            />
          </div>
          {errors.referralphone && <div className="error">{errors.referralphone}</div>}
          {errors.referralemail && <div className="error">{errors.referralemail}</div>}

          <br />
          <input
            type="checkbox"
            id="sameaddress-project"
            name="sameaddress"
            className="checkbox"
            value="sameaddress"
            checked={samerefferalproject}
            onChange={handleCheckboxChangerefferalproject}
            disabled={
              !(samerefferalproject || samerefferalcustomer || samerefferalowner) &&
              (referraladdress !== '' || referralcity !== '' || referralstate !== '' || referralzip !== '' || referralphone !== '' || referralcontact !== '' || referralemail !== '')
            }
          />
          <label htmlFor="sameaddress-project" className='checkbox-label'>Same contact - Project</label><br />

          <input
            type="checkbox"
            id="sameaddress-customer"
            name="sameaddress"
            value="sameaddress"
            className="checkbox"
            checked={samerefferalcustomer}
            onChange={handleCheckboxChangerefferalcustomer}
            disabled={
              !(samerefferalproject || samerefferalcustomer || samerefferalowner) &&
              (referraladdress !== '' || referralcity !== '' || referralstate !== '' || referralzip !== '' || referralphone !== '' || referralcontact !== '' || referralemail !== '')
            }
          />
          <label htmlFor="sameaddress-customer" className='checkbox-label'>Same contact - Customer</label><br />

          <input
            type="checkbox"
            id="sameaddress-owner"
            name="sameaddress"
            value="sameaddress"
            className="checkbox"
            checked={samerefferalowner}
            onChange={handleCheckboxChangerefferalowner}
            disabled={
              !(samerefferalproject || samerefferalcustomer || samerefferalowner) &&
              (referraladdress !== '' || referralcity !== '' || referralstate !== '' || referralzip !== '' || referralphone !== '' || referralcontact !== '' || referralemail !== '')
            }
          />
          <label htmlFor="sameaddress-owner" className='checkbox-label'>Same contact - Owner</label><br />
        </div>
      </section >

      <section className='contact-div'>
        <div className='contact-form'>
          <h1 className='section-title'>ADDITIONAL CONTACTS</h1>

          <div className='contact-section'>
            <div className='input-group'>
              <label className='label'>Name:</label>
              <input className='input' type="text" value={acname1} onChange={(e) => setacname1(e.target.value)} />
              <label className='label'>Company:</label>
              <input className='input' type="text" value={accmpname1} onChange={(e) => setaccmpname1(e.target.value)} />
            </div>
            {errors.acname1 && <p className='error'>{errors.acname1}</p>}
            {errors.accmpname1 && <p className='error'>{errors.accmpname1}</p>}

            <div className='input-group'>
              <label className='label'>Phone:</label>
              <input className='input' type="text" value={acphone1} onChange={(e) => setacphone1(e.target.value)} />
              <label className='label'>E-mail:</label>
              <input className='input' type="email" value={acemail1} onChange={(e) => setacemail1(e.target.value)} />
            </div>
            {errors.acphone1 && <p className='error'>{errors.acphone1}</p>}
            {errors.acemail1 && <p className='error'>{errors.acemail1}</p>}

            <div className='checkbox-group'>
              <input
                type="checkbox"
                id="testingCompany1"
                name="testingCompany1"
                className="contact-checkbox"
                value="testingCompany1"
                checked={company1}
                onChange={(e) => handleFormChange('company1', e.target.checked)}
              />
              <label htmlFor="testingCompany1" className='checkbox-label'>Testing Company</label>
            </div>
            {errors.testingCompany1 && <p className='error'>{errors.testingCompany1}</p>}
          </div>

          {/* Repeat the same structure for additional contacts (acname2, accmpname2, acphone2, acemail2) */}

          <div className='contact-section'>
            <div className='input-group'>
              <label className='label'>Name:</label>
              <input className='input' type="text" value={acname2} onChange={(e) => setacname2(e.target.value)} />
              <label className='label'>Company:</label>
              <input className='input' type="text" value={accmpname2} onChange={(e) => setaccmpname2(e.target.value)} />
            </div>
            {errors.acname2 && <p className='error'>{errors.acname2}</p>}
            {errors.accmpname2 && <p className='error'>{errors.accmpname2}</p>}

            <div className='input-group'>
              <label className='label'>Phone:</label>
              <input className='input' type="text" value={acphone2} onChange={(e) => setacphone2(e.target.value)} />
              <label className='label'>E-mail:</label>
              <input className='input' type="email" value={acemail2} onChange={(e) => setacemail2(e.target.value)} />
            </div>
            {errors.acphone2 && <p className='error'>{errors.acphone2}</p>}
            {errors.acemail2 && <p className='error'>{errors.acemail2}</p>}

            <div className='checkbox-group'>
              <input
                type="checkbox"
                id="testingCompany2"
                name="testingCompany2"
                className="contact-checkbox"
                value="testingCompany2"
                checked={company2}
                onChange={(e) => handleFormChange('company2', e.target.checked)}
              />
              <label htmlFor="testingCompany2" className='checkbox-label'>Testing Company 2</label>
            </div>
            {errors.testingCompany2 && <p className='error'>{errors.testingCompany2}</p>}
          </div>

          {/* Repeat for acname3, accmpname3, acphone3, acemail3 */}
          <div className='contact-section'>
            <div className='input-group'>
              <label className='label'>Name:</label>
              <input className='input' type="text" value={acname3} onChange={(e) => setacname3(e.target.value)} />
              <label className='label'>Company:</label>
              <input className='input' type="text" value={accmpname3} onChange={(e) => setaccmpname3(e.target.value)} />
            </div>
            {errors.acname3 && <p className='error'>{errors.acname3}</p>}
            {errors.accmpname3 && <p className='error'>{errors.accmpname3}</p>}

            <div className='input-group'>
              <label className='label'>Phone:</label>
              <input className='input' type="text" value={acphone3} onChange={(e) => setacphone3(e.target.value)} />
              <label className='label'>E-mail:</label>
              <input className='input' type="email" value={acemail3} onChange={(e) => setacemail3(e.target.value)} />
            </div>
            {errors.acphone3 && <p className='error'>{errors.acphone3}</p>}
            {errors.acemail3 && <p className='error'>{errors.acemail3}</p>}

            <div className='checkbox-group'>
              <input
                type="checkbox"
                id="testingCompany3"
                name="testingCompany3"
                className="contact-checkbox"
                value="testingCompany3"
                checked={company3}
                onChange={(e) => handleFormChange('company3', e.target.checked)}
              />
              <label htmlFor="testingCompany3" className='checkbox-label'>Testing Company 3</label>
            </div>
            {errors.testingCompany3 && <p className='error'>{errors.testingCompany3}</p>}
          </div>
        </div>

        <div className="additional-info">
          <h1 className='scope-title'>ADDITIONAL INFORMATION</h1>
          <div className='scope-of-work-container'>
            <div className="scope-work">
              <div className="additional-section">
                <h1 className='scope-title'>SCOPE OF WORK</h1>
                <div>
                  <textarea
                    className='scope-textarea'
                    name=""
                    id=""
                    rows="auto"
                    value={scopework}
                    onChange={(e) => setscopework(e.target.value)}
                  ></textarea>
                </div>
                {errors.scopework && <span className="error-message">{errors.scopework}</span>}
              </div>

              <div className="additional-section">
                <h1>CUSTOMER TYPE</h1>
                <Multiselect
                  options={CustTypeOptions.options}
                  displayValue="name"
                  onSelect={(selectedList) => setCustomerTypes(selectedList)}
                  onRemove={(selectedList) => setCustomerTypes(selectedList)}
                  placeholder="Select Customer Types"
                  className={`multiselect ${errors.customerTypes ? 'error' : ''}`}
                />
                {errors.customerTypes && <div className="error-message">{errors.customerTypes}</div>}
              </div>


              <div className="additional-section">
                <h1>JOB AND WORK TYPE</h1>
                <Multiselect
                  options={JobAndWorkType.options}
                  displayValue="name"
                  onSelect={(selectedList) => setJobAndWorkTypes(selectedList)}
                  onRemove={(selectedList) => setJobAndWorkTypes(selectedList)}
                  placeholder="Select Job and Work Types"
                  className={`multiselect ${errors.jobAndWorkTypes ? 'error' : ''}`}
                />
                {errors.jobAndWorkTypes && <div className="error-message">{errors.jobAndWorkTypes}</div>}
              </div>


            </div>

            <div className="scope-work">
              <h1>AGENCY INFORMATION</h1>

              <div className='flex'>
                <label className='label'>EPA ID #</label>
                <input
                  className='input'
                  type="text"
                  value={epaId}
                  onChange={(e) => setEpaId(e.target.value)}
                />
              </div>
              {errors.epaId && <div className="error-message">{errors.epaId}</div>}

              <div className='flex'>
                <label className='label'>Haz.Manifest:</label>
                <input
                  className='input'
                  type="text"
                  value={hazManifest}
                  onChange={(e) => setHazManifest(e.target.value)}
                />
              </div>
              {errors.hazManifest && <div className="error-message">{errors.hazManifest}</div>}

              <div className='flex'>
                <label className='label'>Non-Haz. Man.:</label>
                <input
                  className='input'
                  type="text"
                  value={nonHazManifest}
                  onChange={(e) => setNonHazManifest(e.target.value)}
                />
              </div>
              {errors.nonHazManifest && <div className="error-message">{errors.nonHazManifest}</div>}

              <div className='flex'>
                <label className='label'>Non-Haz. Man.&lt;1%:</label>
                <input
                  className='input'
                  type="text"
                  value={nonHazManLT1}
                  onChange={(e) => setNonHazManLT1(e.target.value)}
                />
              </div>
              {errors.nonHazManLT1 && <div className="error-message">{errors.nonHazManLT1}</div>}

              <div className='flex'>
                <label className='label'>Trash:</label>
                <input
                  className='input'
                  type="text"
                  value={trash}
                  onChange={(e) => setTrash(e.target.value)}
                />
              </div>
              {errors.trash && <div className="error-message">{errors.trash}</div>}

              <div className='flex'>
                <label className='label'>Project type:</label>
                <input
                  className='input'
                  type="text"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                />
              </div>
              {errors.projectType && <div className="error-message">{errors.projectType}</div>}

              <div className='flex'>
                <label className='label'>Building size:</label>
                <input
                  className='input'
                  type="text"
                  value={buildingSize}
                  onChange={(e) => setBuildingSize(e.target.value)}
                />
              </div>
              {errors.buildingSize && <div className="error-message">{errors.buildingSize}</div>}

              <div className='flex'>
                <label className='label'>Number of floors:</label>
                <input
                  className='input'
                  type="text"
                  value={numberOfFloors}
                  onChange={(e) => setNumberOfFloors(e.target.value)}
                />
              </div>
              {errors.numberOfFloors && <div className="error-message">{errors.numberOfFloors}</div>}

              <div className='flex'>
                <label className='label'>Building age:</label>
                <input
                  className='input'
                  type="text"
                  value={buildingAge}
                  onChange={(e) => setBuildingAge(e.target.value)}
                />
              </div>
              {errors.buildingAge && <div className="error-message">{errors.buildingAge}</div>}

              <div className='flex'>
                <label className='label'>No. of dwelling units:</label>
                <input
                  className='input'
                  type="text"
                  value={numDwellingUnits}
                  onChange={(e) => setNumDwellingUnits(e.target.value)}
                />
              </div>
              {errors.numDwellingUnits && <div className="error-message">{errors.numDwellingUnits}</div>}

              <div className='flex'>
                <label className='label'>Present/Prior use:</label>
                <input
                  className='input'
                  type="text"
                  value={priorUse}
                  onChange={(e) => setPriorUse(e.target.value)}
                />
              </div>
              {errors.priorUse && <div className="error-message">{errors.priorUse}</div>}

              <div className='flex-Procedure'>
                <label className='label'>Procedure:</label>
                <div>
                  <Multiselect
                    options={UsProcedure.options}
                    displayValue="name"
                    singleSelect={true}
                    placeholder="Select a Procedure"
                    className='multiselect'
                    onSelect={agencyinfoselect}
                  />
                </div>
                {errors.procedure && <div className="error-message">{errors.procedure}</div>}
              </div>

              <div className='flex'>
                <label className='label'>Survey:</label>
                <div>
                  <input className='radio-label' type="radio" name="survey" id="yes" value="Yes" onChange={(e) => setSurvey(e.target.value)} />
                  <label className='label'>Yes</label>
                  <input className='radio-label' type="radio" name="survey" id="no" value="No" onChange={(e) => setSurvey(e.target.value)} />
                  <label className='label'>NO</label>
                </div>
              </div>
            </div>


            <div className="scope-work">
              <div className='input-container'>
                <label className='label'>Contract Amount:</label>
                <div className='flex'>
                  $<input
                    className='input'
                    type="text"
                    value={contractAmount}
                    onChange={(e) => setContractAmount(e.target.value)}
                  />
                </div>
                {errors.contractAmount && <div className="error-message">{errors.contractAmount}</div>}
              </div>

              <div className='mt-3 input-container'>
                <h1 className='heading'>LOCK BOX COMBO</h1>
                <div>
                  <textarea
                    className='textarea'
                    rows="auto"
                    value={lockBoxCombo}
                    onChange={(e) => setLockBoxCombo(e.target.value)}
                  ></textarea>
                </div>
                {errors.lockBoxCombo && <div className="error-message">{errors.lockBoxCombo}</div>}
              </div>

              <div className='mt-3 input-container'>
                <h1 className='heading'>Special instructions or additional notes:</h1>
                <div>
                  <textarea
                    className='textarea'
                    rows="auto"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                  ></textarea>
                </div>
                {errors.specialInstructions && <div className="error-message">{errors.specialInstructions}</div>}
              </div>
            </div>
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

