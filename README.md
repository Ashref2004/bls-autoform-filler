# BLS Auto Form Filler (Tampermonkey Script)

> A Tampermonkey userscript that automatically fills and submits BLS form fields in seconds with human-like typing simulation.

![Tampermonkey](https://img.shields.io/badge/Requires-Tampermonkey-black?logo=tampermonkey)
![License](https://img.shields.io/github/license/Ashref2004/bls-autoform-filler)
![GitHub Repo stars](https://img.shields.io/github/stars/Ashref2004/bls-autoform-filler?style=social)

---

## 📌 Overview

**BLS Auto Form Filler** is a powerful automation script built for **Tampermonkey** that detects BLS appointment forms and fills them automatically based on your saved profile (`userData`).  
It simulates human typing and interaction, ensuring the form is filled accurately in a fraction of a second.

---

## ✨ Features

- 🖊 **Auto-fill all required fields** (First Name, Last Name, Email, Mobile No, City, Location)
- ⌨ **Human-like typing simulation**
- 🎯 **Dropdown & hidden fields auto-selection**
- 🚀 **Auto-submit** after filling
- 🎨 **Highlighting system** (green highlight when filling, soft green when completed)
- 🔄 **Retry mechanism** if the form takes time to load

---

## ⚙ How It Works

The script uses the following configuration inside `userData`:

```javascript
'use strict';

const userData = {
    firstName: "YourFirstName",
    lastName: "YourLastName",
    email: "youremail@example.com",
    mobileNo: "YourMobileNumber",
    city: "YourCity",
    location: "YourVisaCenter"
};
```

Simply replace the values with your real personal details.  
When the BLS form loads, the script will:

1. Detect the form fields.
2. Fill each field with your `userData`.
3. Select dropdown options (e.g., Visa Center).
4. Auto-submit the form.

---

## 🛠 Installation

### 1️⃣ Install Tampermonkey
- **Google Chrome / Microsoft Edge:** [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Mozilla Firefox:** [Install from Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Safari (Mac):** [Install from Safari Extensions Gallery](https://www.tampermonkey.net/?browser=safari)

### 2️⃣ Clone or Download this Repository

#### Linux / Mac
```bash
git clone https://github.com/Ashref2004/bls-autoform-filler.git
cd bls-autoform-filler
```

#### Windows (Command Prompt)
```cmd
git clone https://github.com/Ashref2004/bls-autoform-filler.git
cd bls-autoform-filler
```

#### Windows (PowerShell)
```powershell
git clone https://github.com/Ashref2004/bls-autoform-filler.git
cd bls-autoform-filler
```

Or download as ZIP from GitHub and extract it.

### 3️⃣ Add the Script to Tampermonkey
1. Open Tampermonkey dashboard in your browser.
2. Click **Create a new script**.
3. Paste the content of `bls-autoform-filler.user.js` into the editor.
4. Click **File → Save**.

### 4️⃣ Edit Your Personal Information
- Inside the script, update the `userData` section with your real details.

### 5️⃣ Visit the BLS Form Page
- The script will detect the form and fill it automatically.

---

## 📱 Running on Mobile

You can also run the bot on your phone:

### Android
1. Install **Kiwi Browser** or **Yandex Browser** from Google Play.
2. Add the **Tampermonkey extension** from the Chrome Web Store.
3. Add the script just like on desktop.
4. Visit the BLS form page — it will autofill and submit.

### iOS (iPhone/iPad)
1. Install **Safari** with Tampermonkey extension from the App Store.
2. Add the script in Tampermonkey.
3. Open the BLS form in Safari — it will autofill.

---

## 📋 Example Output

When running, you will see:
- Green highlight on active fields.
- Light green background when a field is completed.
- A floating indicator **"BLS AutoFill: Running"** at the bottom right.

---

## ⚠ Important Notes

- **Personal use only.** Do not share your personal details with others.
- Works only on supported BLS form pages.
- Tampermonkey must be enabled for the script to run.
- Make sure your browser is allowed to run userscripts on the target site.

---

## 📜 License

This project is licensed under the MIT License.

---

**GitHub Repository:** [BLS Auto Form Filler](https://github.com/Ashref2004/bls-autoform-filler)
