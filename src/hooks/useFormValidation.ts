import { User } from "../interface";

const useFormValidation = (userData: User) => {
    const validatedUser: User = {
        username: userData.username.length < 6 ? 'Username tối thiểu 6 ký tự' : '',
        email: userData.email.includes('@') && userData.email.includes('.') ? '' : 'Email không hợp lệ',
        password: userData.password.length < 8 ? 'Mật khẩu tối thiểu 8 ký tự' : '',
        firstName: userData.firstName.length === 0 ? 'Mời bạn nhập họ và tên lót' : '',
        lastName: userData.lastName.length === 0 ? 'Mời bạn nhập tên' : '',
        role: '2',
    }

    return validatedUser;
}

export default useFormValidation;