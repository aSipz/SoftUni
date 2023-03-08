export default function Register() {
    return (
        <div class="user-container register">
            <header class="headers">
                <h2>Register</h2>
                <button class="btn close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </header>
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <div class="input-wrapper">
                            <span class="error"><i class="fa-solid fa-user"></i></span>
                            <input name="firstName" type="text" placeholder="First name" class="error" />
                        </div>
                        <p class="form-error">
                            First name should be at least 3 characters long!
                        </p>
                    </div>
                    <div class="form-group">

                        <div class="input-wrapper">
                            <span><i class="fa-solid fa-user"></i></span>
                            <input name="lastName" type="text" placeholder="Last name" />
                        </div>
                        <p class="form-error">
                            Last name should be at least 3 characters long!
                        </p>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">

                        <div class="input-wrapper">
                            <span><i class="fa-solid fa-user"></i></span>
                            <input name="username" type="text" placeholder="Username" />
                        </div>
                        <p class="form-error">Username is not valid!</p>
                    </div>
                    <div class="form-group">

                        <div class="input-wrapper">
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <input name="email" type="text" placeholder="Email" />
                        </div>
                        <p class="form-error">Email is not valid!</p>
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group">

                        <div class="input-wrapper">
                            <span><i class="fa-solid fa-lock"></i></span>
                            <input name="password" type="password" placeholder="Password" />
                        </div>
                        <p class="form-error">Password is not valid!</p>
                    </div>
                    <div class="form-group">

                        <div class="input-wrapper">
                            <span><i class="fa-solid fa-lock"></i></span>
                            <input name="repass" type="password" placeholder="Retype Password" />
                        </div>
                        <p class="form-error">Passwords doesn't match!</p>
                    </div>

                </div>

                <div class="form-group long-line">

                    <div class="input-wrapper">
                        <span><i class="fa-solid fa-image-portrait"></i></span>
                        <input name="imageUrl" type="text" placeholder="Image Url" />
                    </div>
                    <p class="form-error">ImageUrl is not valid!</p>
                </div>


                <div class="form-actions">
                    <div>
                        <p>Already have an account?</p>
                        <button class="form-actions btn">Login</button>
                    </div>
                    <button class="submit" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}