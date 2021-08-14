const adminTemplate = `
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/coach-demo/view-all-coaches.html">Manage All Coaches</a>
            </li>
        </ul>
        <form>
            <!-- Full Name -->
            <div class="mb-3">
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullName" placeholder="John Doe"
                    aria-describedby="fullNameHelp">
                <div id="fullNameHelp" class="form-text">Enter your full name (FirstName, LastName).</div>
            </div>

            <!-- Profile Image URL -->
            <div class="mb-3">
                <label for="profilePictureUrl" class="form-label">Profile Image URL</label>
                <input type="text" class="form-control" id="profilePictureUrl">
            </div>

            <!-- Email Address -->
            <div class="mb-3">
                <label for="inputEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" placeholder="example@pgecom.com" id="inputEmail"
                    aria-describedby="emailHelp">
            </div>

            <!-- PGecom Staff -->
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">PGecom Staff</label>
                <select class="form-select" id="isPGecomStaff" aria-label="Default select example">
                    <option selected>yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <!-- HubSpot Calendar URL -->
            <div class="mb-3 hubspotCalendarUrl" id="hubspot-calendar-section">
                <label for="hubspotCalendarUrl" class="form-label">HubSpot Calendar URL</label>
                <input type="text" class="form-control" id="hubspotCalendarUrl"
                    placeholder="https://meetings.hubspot.com/accime" aria-describedby="hubSpotCalendarUrlHelp">
                <div id="hubSpotCalendarUrl" class="form-text">Please enter your hubspot calendar url.</div>
            </div>

            <!-- List of expertise -->
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Select all your expertise</label>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Dropshipping" id="expertise-dropshipping">
                        <label class="form-check-label" for="flexCheckDefault">
                            Dropshipping
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Shopify" id="expertise-shopify">
                        <label class="form-check-label" for="flexCheckChecked">
                            Shopify
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Facebook Ads" id="expertise-facebook-ads">
                        <label class="form-check-label" for="flexCheckChecked">
                            Facebook Ads
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Google Ads" id="expertise-google-ads">
                        <label class="form-check-label" for="flexCheckChecked">
                            Google Ads
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Tiktok Ads" id="expertise-tiktok-ads">
                        <label class="form-check-label" for="flexCheckChecked">
                            TikTok Ads
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="SnapChat Ads" id="expertise-snapchat-ads">
                        <label class="form-check-label" for="flexCheckChecked">
                            SnapChat Ads
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="SnapChat Ads" id="expertise-snapchat-ads">
                        <label class="form-check-label" for="flexCheckChecked">
                            Pinterest Ads
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="TLC" id="expertise-tlc">
                        <label class="form-check-label" for="flexCheckChecked">
                            TLC
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Crypto Currency" id="expertise-crypto-currency">
                        <label class="form-check-label" for="flexCheckChecked">
                            Crypto Currency
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Affiliate Marketing" id="expertise-affiliate-marketing">
                        <label class="form-check-label" for="flexCheckChecked">
                            Affiliate Marketing
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Ebay" id="expertise-ebay">
                        <label class="form-check-label" for="flexCheckChecked">
                            Ebay
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Amazon FBA" id="expertise-amazon-fba">
                        <label class="form-check-label" for="flexCheckChecked">
                            Amazon FBA
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Petron Pay" id="expertise-petron-pay">
                        <label class="form-check-label" for="flexCheckChecked">
                            Petron Pay
                        </label>
                    </div>

                </div>
            </div>
            <button type="submit" class="btn btn-primary">Add Coach</button>
        </form>

`;
