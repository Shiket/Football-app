import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
// na przykladzie react-final-form
// export const PasswordChangeForm = () => {
//     return (
//         <div>
//             <Form
//                 onSubmit={(props) => console.log(props)}
//                 render={({ handleSubmit }) => (
//                     <form onSubmit={handleSubmit}>
//                         <Field name='oldPassword' component='input' />
//                         <Field name='newPassword' component='input' />
//                         <button type='submit'>Zmien haslo</button>
//                     </form>
//                 )}
//             />
//         </div>
//     )
// }
class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
        </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
