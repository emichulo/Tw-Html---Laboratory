class RegisterFormController {
    static fields = [
        "firstName",
        "lastName",
        "birthday",
        "email",
        "password",
        "confirmPassword"
    ];
    constructor(){
        for (const field of RegisterFormController.fields)this.bindElement(field);
    }
    bindElement(field) {
        document.getElementById(field).addEventListener("input", (event)=>{
            this.formData = {
                ...this.formData,
                [field]: event.target.value
            };
            console.log(this.formData);
            this.onDataChanged(field);
        });
    }
    onDataChanged = (field)=>{
        if (field === "firstName") {
            if (this.formData.firstName.length < 2) this.setValidation("firstName", "Your name must have at least 2 characters.");
            else this.setValidation("firstName", "Looks good!");
            if (this.formData.firstName.length == 0) this.setValidation("firstName", "  ");
        }
        if (field === "lastName") {
            if (this.formData.lastName.length < 2) this.setValidation("lastName", "Your name must have at least 2 characters.");
            else this.setValidation("lastName", "Looks good!");
        }
        if (field === "confirmPassword") {
            if (this.formData.password != this.formData.confirmPassword) this.setValidation("confirmPassword", "Password and Confirm Password must be the same!");
            else this.setValidation("confirmPassword", "Looks good!");
        }
        if (field === "password") {
            const expression = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g;
            if (expression.test(this.formData.password)) this.setValidation("password", "Password week");
            else this.setValidation("password", "Looks good!");
        }
    };
    setValidation = (field, message)=>{
        document.getElementById(`${field}-validation`).innerHTML = message;
    };
}
const controller = new RegisterFormController();

//# sourceMappingURL=index.6b86260e.js.map
