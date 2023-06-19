export interface UserType {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_no: string;
    username: string;
    otp: number;
    password: string;
    social_token: string;
    token: string;
    image_url: string;
    dob: Date;
    login_by: boolean;
    is_active: boolean;
    email_verified_at: Date;
    remember_token: string;
    created_at: Date;
    updated_at: Date;
}
