export default function Login() {
    return (
        <div class="user-container login">
            <header class="headers">
                <h2>Login</h2>
                <button class="btn close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </header>
            <form>
                <div class="form-group long-line">

                    <div class="input-wrapper">
                        <span><i class="fa-solid fa-envelope"></i></span>
                        <input name="email" type="text" placeholder="Email" />
                    </div>
                    <p class="form-error">Email is not valid!</p>
                </div>

                <div class="form-group long-line">

                    <div class="input-wrapper">
                        <span><i class="fa-solid fa-lock"></i></span>
                        <input name="password" type="password" placeholder="Password" />
                    </div>
                    <p class="form-error">Password is not valid!</p>
                </div>

                <div class="form-actions">
                    <div>
                        <p>Don't have an account?</p>
                        <button class="form-actions btn">Register</button>
                    </div>
                    <button class="submit" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}