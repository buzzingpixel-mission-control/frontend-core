import FormValues from './FormValues';
import FetchOptionsBuilder from '../FetchOptionsBuilder';

const SubmitNewUser = async (formValues: FormValues) => {
    try {
        const response = await fetch(
            '/api/request/user-admin/add-user',
            FetchOptionsBuilder(formValues),
        );

        const json = await response.json();

        if (json.success === false || json.error || json.error?.message) {
            return Promise.reject(new Error(
                json.error?.message || json.message,
            ));
        }

        return true;
    } catch (error) {
        return Promise.reject(new Error('Unable to add user'));
    }
};

export default SubmitNewUser;
