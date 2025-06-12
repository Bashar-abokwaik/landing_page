import "./Popup.css"

function Popup({ handleCancleBtn }) {
    return (
        <div className="overlay">
            <div className="popup">
                <h2>Join Us</h2>

                <p>
                    Start your journey with us today!<br />
                    Sign up now and become part of an inspiring community that shares your passion and ambition.<br />
                    Don’t miss the chance — your first step begins here.
                </p>

                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Your Name" id="name" name="name" required />

                    <label htmlFor="weight">Weight</label>
                    <input type="number" placeholder="Enter Your Weight" id="weight" name="weight" required />

                    <label htmlFor="age">Age</label>
                    <input type="number" placeholder="Enter Your Age" id="age" name="age" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Your Email" id="email" name="email" required />

                    <fieldset>
                        <legend>Choose at least one service:</legend>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="resistance-training"
                                required
                            />
                            Resistance Training Offer
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="fitness-training"
                            />
                            Fitness Training
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="personal-trainer"
                            />
                            Personal Trainer
                        </label>
                    </fieldset>
                    <input className="submit" type="submit" value="Send" />
                </form>
                <button onClick={handleCancleBtn}>Cancel</button>
            </div>
        </div>

    )
}

export default Popup