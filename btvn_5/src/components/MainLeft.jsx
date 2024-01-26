import React, {useState}  from 'react'

const MainLeft = () => {
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onChangeValue = (value) => (even) => {
        setUser({...user, [value] : even.target.value});
    };

    const onSubmit = (even) => {
        even.preventDefault();
        if(user.fullName === "" || user.email === "" || user.password === "" || user.confirmPassword === ""){
            alert("Bạn cần nhập đầy đủ thông tin đăng kí");
        }
        if(user.password != user.confirmPassword){
            alert("Mật khẩu nhập lại không đúng");
        }
        else{
            alert("Đăng kí thành công");
            alert(JSON.stringify(user));
            setUser({...user, fullName : "", email: "", password: "",confirmPassword:""})
        }
    };

  return (
    <div className='main-left'>
        <div className='main-left-in'>
            <div className='header-main-left'>
                <h2>Hello!</h2>
                <p className='header-main-2'>Please signup to continue</p>
            </div>
            <form className='form-sign-up' onSubmit={onSubmit}>
                <label className='name-input'>Full Name</label>
                <input className='input-all' placeholder='John Doe' value={user.fullName} onChange={onChangeValue("fullName")}/>
                <label className='name-input'>Email Address</label>
                <input className='input-all' placeholder='johndoe@gmail.com' value={user.email} onChange={onChangeValue("email")} type='email'/>
                <label className='name-input'>Password</label>
                <input className='input-all' placeholder='Password' value={user.password} onChange={onChangeValue("password")} type='password'/>
                <label className='name-input'>Confirm Password</label>
                <input className='input-all' placeholder='Confirm Password' value={user.confirmPassword} onChange={onChangeValue("confirmPassword")} type='password'/>
                <button type='submit' className='btn'>Sign Up</button>
            </form>
            <div className='footer-main'>
                <p>or</p>
                <p>Signup with</p>
                <div className='img-contact'>
                    <a href='https://www.facebook.com/profile.php?id=100039022268121&mibextid=LQQJ4d'><img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'/></a>
                    <a href='https://www.facebook.com/profile.php?id=100039022268121&mibextid=LQQJ4d'><img src='https://banner2.cleanpng.com/20180330/zae/kisspng-social-media-iphone-organization-logo-twitter-5abe3024502f30.2043853815224136043284.jpg'/></a>
                </div>
                <div>
                    <span>I'm already a member!</span>
                    <a className='link-sign-in' href="#">Sign In</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLeft