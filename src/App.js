import './App.css';
import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { useReactToPrint } from "react-to-print";
function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  // const db = [0,1,2,3,4,7,8,9];
  // const generateId = () => {
  //   return Math.floor(Math.random() * 9) + 1;
  // }
  // const check = (dt,id) => {
  //   if(dt.includes(id)){
  //     return true
  //   }
  //   return false
  // }
  // const generateUniq = (dt) => {
  //   let id = generateId();
  //   while(check(dt,id)){
  //     id = generateId()
  //   }
  //   return id
  // }
  // console.log(generateUniq(db))
  // Define all of the requst URL---------------------------
  const rootUrl = 'http://localhost:5000/api/'           //|
  const usersUrl =rootUrl + 'users';                     //|                 
  const registerUrl = rootUrl + 'registerUser';          //|
  const loginUser = rootUrl + 'loginUser';               //|
  const loggedIn = rootUrl + 'loggedIn';                 //|
  const logoutUser = rootUrl + 'logoutUser';             //|
  const deleteUser = rootUrl + 'deleteuser';             //|
  const updateUser = rootUrl + 'updateUser';             //|
  const verifyEmailAndSendOtp = rootUrl + 'verifyEmail'; //|
  const verifyOtp = rootUrl + 'verifyOtp';               //|
  const getUsersOtp = rootUrl + 'getUsersOtp';           //|
  const updatePassword = rootUrl + 'updatePassword';     //|  
  const sendCompanyOtp = rootUrl + 'sendCompanyOtp';     //|
  const registerCompany = rootUrl + 'registerCompany';   //|
  // Define all of the requst URL---------------------------
  // const [userEmail,setUserEmail] = useState("");
  // const [responseMessage,setresponseMessage] = useState("");
  // const [showOtp,setshowOtp] = useState(false);
  // const [otp,setOtp] = useState("");
  // const [showpasswordForm,setshowpasswordForm] = useState(false);
  // const [newpassword,setnewpassword] = useState("");
  // const [newpasswordRepeat,setnewpasswordRepeat] = useState("");
  // // Submit email for verify and otp
  // const sendEmailAsync = async () => {
  //   await axios.post(verifyEmailAndSendOtp,{
  //     email:userEmail
  //   }).then(dt=>{
  //     setresponseMessage(dt.data.message)
  //     if(dt.data.succes){
  //       setshowOtp(dt.data.succes)
  //     }
  //   })
  // }
  // const submitEmail = (e) => {
  //   e.preventDefault();
  //   sendEmailAsync();
  //   console.log(userEmail);
  // }
  // // Submit otp and verify it
  // const sendOtpAsync = async () => {
  //   await axios.post(verifyOtp,{
  //     email:userEmail,
  //     otp:otp
  //   }).then(dt=>{
  //     setresponseMessage(dt.data.message);
  //     setshowpasswordForm(dt.data.succes);
  //   })
  // }
  // const submitOtp = (e) => {
  //   e.preventDefault();
  //   sendOtpAsync();
  //   console.log(otp)
  // }
  // // Submit paswordchanging
  // const sendPasswordsAsync = async () => {
  //   await axios.post(updatePassword,{
  //     email:userEmail,
  //     otp:otp,
  //     newpassword:newpassword,
  //     newpasswordRepeat:newpasswordRepeat
  //   }).then(dt=>{
  //     setresponseMessage(dt.data.message)
  //     if(dt.data.succes){
  //       setTimeout(()=>{
  //         window.location.reload();
  //       },1100)
  //     }
  //   })
  // }
  // const submitPassword = (e) => {
  //   e.preventDefault();
  //   sendPasswordsAsync();
  // }
  const [showotp,setshowotp] = useState(false);
  const [responseMessage,setresponseMessage] = useState("");
  const [otp,setotp] = useState("");
  const [registerCompanyData,setRegisterCompanyData] = useState({
    name:"",
    email:"",
    infoAboutCompany:"",
    companyLogo:"",
    password:"",
    passwordRepeat:"",
  }) 
  const getCompanyData = (e) => {
    const {name,value} = e.target;
    setRegisterCompanyData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const sendCompanyOtpAsync = async () => {
    axios.post(sendCompanyOtp,{
      email:registerCompanyData.email
    }).then(dt=>{
      setresponseMessage(dt.data.message);
      setshowotp(dt.data.succes);
    })
  }
  const submitCompanyData = (e) => {
    e.preventDefault();
    sendCompanyOtpAsync();
    console.log(registerCompanyData);
  }
  const registerCompanyAsync = async () => {
    axios.post(registerCompany,{...registerCompanyData,otp:otp}).then(dt=>{
      setresponseMessage(dt.data.message)
    })
  }
  const register = (e) => {
    e.preventDefault();
    registerCompanyAsync();
  }
  return (
    <div className="App">
      <button onClick={handlePrint}>Save</button>
      <div class="container">
  <table ref={componentRef} class="responsive-table">
    <caption>Top 10 Grossing Animated Films of All Time</caption>
    <thead>
      <tr>
        <th scope="col">Film Title</th>
        <th scope="col">Released</th>
        <th scope="col">Studio</th>
        <th scope="col">Worldwide Gross</th>
        <th scope="col">Domestic Gross</th>
        <th scope="col">International Gross</th>
        <th scope="col">Budget</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="7">Sources: <a href="http://en.wikipedia.org/wiki/List_of_highest-grossing_animated_films" rel="external">Wikipedia</a> &amp; <a href="http://www.boxofficemojo.com/genres/chart/?id=animation.htm" rel="external">Box Office Mojo</a>. Data is current as of March 31, 2021.</td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <th scope="row">The Lion King (2019 remake)</th>
        <td data-title="Released">2019</td>
        <td data-title="Studio">Disney</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,657,870,986</td>
        <td data-title="Domestic Gross" data-type="currency">$543,638,043</td>
        <td data-title="International Gross" data-type="currency">$1,114,232,943</td>
        <td data-title="Budget" data-type="currency">$260,000,000</td>
      </tr>
      <tr>
        <th scope="row">Frozen II</th>
        <td data-title="Released">2019</td>
        <td data-title="Studio">Disney</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,450,026,933</td>
        <td data-title="Domestic Gross" data-type="currency">$477,373,578</td>
        <td data-title="International Gross" data-type="currency">$972,653,355</td>
        <td data-title="Budget" data-type="currency">$150,000,000</td>
      </tr>
      <tr>
        <th scope="row">Frozen</th>
        <td data-title="Released">2013</td>
        <td data-title="Studio">Disney</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,281,019,275</td>
        <td data-title="Domestic Gross" data-type="currency">$400,953,009</td>
        <td data-title="International Gross" data-type="currency">$880,066,266</td>
        <td data-title="Budget" data-type="currency">$150,000,000</td>
      </tr>
       <tr>
        <th scope="row">Incredibles 2</th>
        <td data-title="Released">2018</td>
        <td data-title="Studio">Disney Pixar</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,243,089,244</td>
        <td data-title="Domestic Gross" data-type="currency">$608,581,744</td>
        <td data-title="International Gross" data-type="currency">$634,507,500</td>
        <td data-title="Budget" data-type="currency">$200,000,000</td>
      </tr>
      <tr>
        <th scope="row">Minions</th>
        <td data-title="Released">2015</td>
        <td data-title="Studio">Universal</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,159,444,662</td>
        <td data-title="Domestic Gross" data-type="currency">$336,045,770</td>
        <td data-title="International Gross" data-type="currency">$823,398,892</td>
        <td data-title="Budget" data-type="currency">$74,000,000</td>
      </tr>
      <tr>
        <th scope="row">Toy Story 4</th>
        <td data-title="Released">2019</td>
        <td data-title="Studio">Disney Pixar</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,073,394,593</td>
        <td data-title="Domestic Gross" data-type="currency">$434,038,008</td>
        <td data-title="International Gross" data-type="currency">$639,356,585</td>
        <td data-title="Budget" data-type="currency">$200,000,000</td>
      </tr>
      <tr>
        <th scope="row">Toy Story 3</th>
        <td data-title="Released">2010</td>
        <td data-title="Studio">Disney Pixar</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,066,970,811</td>
        <td data-title="Domestic Gross" data-type="currency">$415,004,880</td>
        <td data-title="International Gross" data-type="currency">$651,965,931</td>
        <td data-title="Budget" data-type="currency">$200,000,000</td>
      </tr>
      <tr>
        <th scope="row">Despicable Me 3</th>
        <td data-title="Released">2017</td>
        <td data-title="Studio">Universal</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,034,800,131</td>
        <td data-title="Domestic Gross" data-type="currency">$264,624,300</td>
        <td data-title="International Gross" data-type="currency">$770,175,831</td>
        <td data-title="Budget" data-type="currency">$80,000,000</td>
      </tr>
      <tr>
        <th scope="row">Finding Dory</th>
        <td data-title="Released">2016</td>
        <td data-title="Studio">Disney Pixar</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,028,570,942</td>
        <td data-title="Domestic Gross" data-type="currency">$486,295,561</td>
        <td data-title="International Gross" data-type="currency">$542,275,381</td>
        <td data-title="Budget" data-type="currency">$175,000,000</td>
      </tr>
      <tr>
        <th scope="row">Zootopia</th>
        <td data-title="Released">2016</td>
        <td data-title="Studio">Disney</td>
        <td data-title="Worldwide Gross" data-type="currency">$1,023,792,558</td>
        <td data-title="Domestic Gross" data-type="currency">$341,268,248</td>
        <td data-title="International Gross" data-type="currency">$682,524,310</td>
        <td data-title="Budget" data-type="currency">$150,000,000</td>
      </tr>
    </tbody>
  </table>
</div>

      {/* <h1>Request Testing</h1>
      {responseMessage}
      <form onSubmit={submitCompanyData}>
        <input type="text" placeholder='name..' name='name' value={registerCompanyData.name} onChange={getCompanyData}  />
        <input type="email" placeholder='email..' name='email' value={registerCompanyData.email} onChange={getCompanyData}  />
        <input type="text" placeholder='info..' name='infoAboutCompany' value={registerCompanyData.infoAboutCompany} onChange={getCompanyData}  />
        <input type="text" placeholder='logo..' name='companyLogo' value={registerCompanyData.companyLogo} onChange={getCompanyData}  />
        <input type="password" placeholder='password..' name='password' value={registerCompanyData.password} onChange={getCompanyData}  />
        <input type="password" placeholder='passwordRepeat..' name='passwordRepeat' value={registerCompanyData.passwordRepeat} onChange={getCompanyData}  />
        
        <input type="submit" value="next" />
      </form>
      {
          showotp && 
          <form onSubmit={register}>
            <input type="text" placeholder='otp' value={otp} onChange={(e)=>{setotp(e.target.value)}} />
            <input type="submit" value="register" />
          </form>
          


        } */}
      
      {/* {responseMessage}
      <form onSubmit={submitEmail}>
        <input required type="email" placeholder='email...' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} />
        {
          !showOtp && <input type="submit" value="verify" />
        }
      </form>
      {
        showOtp && 
        <form onSubmit={submitOtp}>
          <input type="text" placeholder='otp...' value={otp} onChange={(e)=>{setOtp(e.target.value)}} />
          {!showpasswordForm && <input type="submit" value="send Otp" />}
        </form>
      }
      {
        showpasswordForm && 
        <form onSubmit={submitPassword}>
          <input type="password" placeholder='new passw...' value={newpassword} onChange={(e)=>{setnewpassword(e.target.value)}} />

          <input type="password" placeholder='new passwRepeat...' value={newpasswordRepeat} onChange={(e)=>{setnewpasswordRepeat(e.target.value)}} />
          <input type="submit" />

        </form>
      } */}
      


    </div>
  );
}

export default App;
