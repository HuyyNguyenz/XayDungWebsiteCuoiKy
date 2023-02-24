import { FormValidate } from "../interface";

const useFormValidation = (formData: FormValidate) => {
    const validatedData: FormValidate = {
        username: (formData.username as string).length < 6 ? 'Username tối thiểu 6 ký tự' : '',
        email: (formData.email as string).includes('@') && (formData.email as string).includes('.') ? '' : 'Email không hợp lệ',
        password: (formData.password as string).length < 8 ? 'Mật khẩu tối thiểu 8 ký tự' : '',
        confirmPassword: (formData.confirmPassword as string) !== (formData.password as string) ? 'Mật khẩu không trùng khớp' : ''
    }

    return validatedData;
}

export default useFormValidation;