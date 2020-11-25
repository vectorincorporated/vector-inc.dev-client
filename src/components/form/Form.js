import React from "react";

import styles from "./From.module.css";
import FormBtn from "./form-btn/FormBtn";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            phone: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    onSubmit = e => {
        // TODO: implement with BE
    };

    render() {
        return (
            <form className={styles.form} onSubmit={this.onSubmit}>
                <input className={styles.formField}
                       type='text'
                       name='name'
                       placeholder='YOUR NAME *'
                       onChange={this.handleInputChange}
                       required={true} />

                {
                    this.props?.options?.isPhone &&
                    <input className={styles.formField}
                           type='text'
                           name='phone'
                           onChange={this.handleInputChange}
                           placeholder='YOUR PHONE (Optional)' />
                }

                <input className={styles.formField}
                       type='text'
                       name='email'
                       onChange={this.handleInputChange}
                       placeholder='YOUR E-MAIL *'
                       required={true} />

                <textarea className={styles.formField}
                          name='message'
                          onChange={this.handleInputChange}
                          placeholder='LEAVE YOUR MESSAGE HERE... (optional)' />

                <FormBtn options={this.props.options} />
            </form>
        )
    }
}

export default Form;
