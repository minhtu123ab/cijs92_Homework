import React, { useState } from 'react';
import { Button } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let register = localStorage.getItem("register");
    register = register ? JSON.parse(register) : [];
    const navigate = useNavigate();
    const [value, setValue] = useState({
        nameRegister: "",
        useNameRegister: "",
        passwordRegister: "",
        passwordRegisterAgain: "",
    });

    const [touched, setTouched] = useState({
        nameRegister: false,
        useNameRegister: false,
        passwordRegister: false,
        passwordRegisterAgain: false,
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [errorPassAgain, setErrorPassAgain] = useState("");

    const onChangeValue = (field) => (e) => {
        setValue({ ...value, [field]: e.target.value });
    };

    // Cập nhật hàm onBlur để cập nhật trạng thái touched cho từng trường cụ thể
    const onBlurField = (field) => () => {
        setTouched({ ...touched, [field]: true });
    };

    const check = (field) => {
        if (!touched[field]) return true; // Chỉ kiểm tra khi field đã được tương tác
        if (!value[field]) return false; // Nếu field đã tương tác và giá trị là trống
        return true;
    };
    const checkRepeatName = () => {
        let count = 0;
        for(let i = 0; i < register.length; i++){
            if(value.nameRegister === register[i].nameRegister){
                count ++;
            }
        }
        if(count != 0){
            return false;
        }
        return true;
    };

    const checkRepeatUseName = () => {
        let count = 0;
        for(let i = 0; i < register.length; i++){
            if(value.useNameRegister === register[i].useNameRegister){
                count ++;
            }
        }
        if(count != 0){
            return false;
        }
        return true;
    };
    

    const onClickRegister = (e) => {
        e.preventDefault();
        let countName = 0;
        let countUseName = 0;
        for(let i = 0; i < register.length; i++){
            if(value.nameRegister === register[i].nameRegister){
                countName ++;
            }
            if(value.useNameRegister === register[i].useNameRegister){
                countUseName ++;
            }
        }
        if(countName != 0 || countUseName != 0){
            toast.error("Thông tin đã có người đăng kí")
            setValue({
                nameRegister: "",
                useNameRegister: "",
                passwordRegister: "",
                passwordRegisterAgain: "",
            });
            setTouched({
                nameRegister: false,
                useNameRegister: false,
                passwordRegister: false,
                passwordRegisterAgain: false,
            });
        } else if (!value.nameRegister || !value.useNameRegister || !value.passwordRegister || !value.passwordRegisterAgain) {
            setErrorMessage("Vui lòng nhập đầy đủ thông tin");
            setValue({
                nameRegister: "",
                useNameRegister: "",
                passwordRegister: "",
                passwordRegisterAgain: "",
            });
            setTouched({
                nameRegister: false,
                useNameRegister: false,
                passwordRegister: false,
                passwordRegisterAgain: false,
            });
        } else if (value.passwordRegister != value.passwordRegisterAgain){
            setErrorPassAgain("Mật khẩu nhập lại không đúng");
            setValue({
                nameRegister: "",
                useNameRegister: "",
                passwordRegister: "",
                passwordRegisterAgain: "",
            });
            setTouched({
                nameRegister: false,
                useNameRegister: false,
                passwordRegister: false,
                passwordRegisterAgain: false,
            });
        } else {
            register.push(value);
            localStorage.setItem("register", JSON.stringify(register));
            setErrorMessage("");
            setErrorPassAgain(""); 
            setValue({
                nameRegister: "",
                useNameRegister: "",
                passwordRegister: "",
                passwordRegisterAgain: "",
            });
            setTouched({
                nameRegister: false,
                useNameRegister: false,
                passwordRegister: false,
                passwordRegisterAgain: false,
            });
            toast.success("Đăng ký thành công, hãy đăng nhập");
            setTimeout(() => {
                navigate("/login"); 
            }, 1500);
        }
    };
    
    return (
        <div className='login-all-backgroud'>
        <div className='login'>
        <ToastContainer />
        <div className='login-app-all'>
            <form className='login-app' onSubmit={onClickRegister}>
                <h1 className='login-app-title'>Đăng Ký</h1>
                <div className='label-input'>
                    <label>Tên người dùng</label>
                    <input 
                      className='login-app-input' 
                      type='text' 
                      placeholder='Tên người dùng' 
                      value={value.nameRegister} 
                      onChange={onChangeValue('nameRegister')}
                      onBlur={onBlurField('nameRegister')}
                    />
                    {!check("nameRegister") && <p className='error-register'>Vui lòng nhập tên người dùng</p>}
                    {!checkRepeatName() && <p className='error-register'>Tên người dùng đã có người sử dụng</p>}
                    {errorMessage && <p className='error-register'>{errorMessage}</p>}
                </div>
                <div className='label-input'>
                    <label>Tên đăng nhập</label>
                    <input className='login-app-input' type='text' placeholder='Tên đăng nhập' value={value.useNameRegister} onChange={onChangeValue('useNameRegister')} onBlur={onBlurField("useNameRegister")} />
                    {!check("useNameRegister") && <p className='error-register'>Vui lòng nhập tên đăng nhập</p>}
                    {!checkRepeatUseName() && <p className='error-register'>Tên đăng nhập đã có người sử dụng</p>}
                </div>
                <div className='label-input'>
                    <label>Mật khẩu</label>
                    <input className='login-app-input' type='password' placeholder='Mật khẩu' value={value.passwordRegister} onChange={onChangeValue('passwordRegister')} onBlur={onBlurField("passwordRegister")}/>
                    {!check("passwordRegister") && <p className='error-register'>Vui lòng nhập mật khẩu</p>}
                    {errorPassAgain && <p className='error-register'>{errorPassAgain}</p>}
                </div>
                <div className='label-input'>
                    <label>Nhập lại mật khẩu</label>
                    <input className='login-app-input' type='password' placeholder='Nhập lại mật khẩu' value={value.passwordRegisterAgain} onChange={onChangeValue('passwordRegisterAgain')} onBlur={onBlurField("passwordRegisterAgain")} />
                    {!check("passwordRegisterAgain") && <p className='error-register'>Vui lòng nhập lại mật khẩu</p>}
                </div>
            
                <div className='login-app-button-all'>
                    <button type="submit" className='login-app-button' onClick={onClickRegister}>Đăng Ký</button>
                </div>
            </form>
        </div>
    </div>
        </div>
    );
};

export default Register;
