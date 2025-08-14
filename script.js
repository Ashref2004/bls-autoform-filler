// ==UserScript==
// @name         BLS Auto Form Filler (100% Working)
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Automatically fills and submits BLS forms with complete interaction simulation
// @author       Enhanced AI
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    const userData = {
        firstName: "Mehloul",
        lastName: "Achraf",
        email: "achrafmehloul50@gmail.com",
        mobileNo: "782675199",
        city: "El Kerma",
        location: "Oran"
    };

    GM_addStyle(`
        .bls-autofill-highlight {
            box-shadow: 0 0 0 2px #4CAF50 !important;
            transition: all 0.3s ease;
        }
        .bls-autofill-complete {
            background-color: #e8f5e9 !important;
        }
    `);

    function findElement(selectors) {
        for (const selector of selectors) {
            const el = document.querySelector(selector);
            if (el) return el;
        }
        return null;
    }

    function simulateTyping(element, value) {
        if (!element) return false;

        element.classList.add('bls-autofill-highlight');

        element.focus();
        element.dispatchEvent(new FocusEvent('focus', { bubbles: true }));

        element.value = '';
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));

        for (let i = 0; i < value.length; i++) {
            setTimeout(() => {
                element.value = value.substring(0, i + 1);
                element.dispatchEvent(new Event('input', { bubbles: true }));
                element.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
                element.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true }));
                element.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));

                if (i === value.length - 1) {
                    element.dispatchEvent(new Event('change', { bubbles: true }));
                    element.classList.remove('bls-autofill-highlight');
                    element.classList.add('bls-autofill-complete');
                }
            }, i * 50);
        }

        return true;
    }

    function selectDropdown(selector, value) {
        const dropdown = findElement(selector);
        if (!dropdown) return false;

        dropdown.classList.add('bls-autofill-highlight');

        for (let i = 0; i < dropdown.options.length; i++) {
            if (dropdown.options[i].value === value ||
                dropdown.options[i].text.includes(value)) {
                dropdown.selectedIndex = i;
                dropdown.dispatchEvent(new Event('input', { bubbles: true }));
                dropdown.dispatchEvent(new Event('change', { bubbles: true }));
                dropdown.classList.remove('bls-autofill-highlight');
                dropdown.classList.add('bls-autofill-complete');
                return true;
            }
        }

        dropdown.focus();
        dropdown.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        dropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        if (dropdown.tagName === 'SELECT') {
            setTimeout(() => {
                const searchInput = document.querySelector('.select2-search__field');
                if (searchInput) {
                    simulateTyping(searchInput, value);
                    setTimeout(() => {
                        const firstResult = document.querySelector('.select2-results__option--highlighted');
                        if (firstResult) {
                            firstResult.click();
                        }
                    }, value.length * 50 + 200);
                }
            }, 200);
        }

        return true;
    }

    function isFormAvailable() {
        const requiredFields = [
            ['input[name*="First Name"], input[name*="Given Name"], input[name*="FirstName"], input[name*="firstname"]'],
            ['input[name*="Last Name"], input[name*="LastName"], input[name*="lastname"]'],
            ['input[name*="Email"], input[name*="email"]'],
            ['input[name*="Mobile"], input[name*="Phone"], input[name*="MobileNo"], input[name*="mobile"]'],
            ['input[name*="City"], input[name*="city"]'],
            ['select[name*="Location"], select[name*="location"], select[name*="VisaCenter"]']
        ];

        return requiredFields.every(fieldSelectors => findElement(fieldSelectors));
    }

    function fillForm() {
        simulateTyping(
            findElement(['input[name*="First Name"]', 'input[name*="Given Name"]', 'input[name*="FirstName"]', 'input[name*="firstname"]']),
            userData.firstName
        );

        simulateTyping(
            findElement(['input[name*="Last Name"]', 'input[name*="LastName"]', 'input[name*="lastname"]']),
            userData.lastName
        );

        simulateTyping(
            findElement(['input[name*="Email"]', 'input[name*="email"]']),
            userData.email
        );

        simulateTyping(
            findElement(['input[name*="Mobile"]', 'input[name*="Phone"]', 'input[name*="MobileNo"]', 'input[name*="mobile"]']),
            userData.mobileNo
        );

        simulateTyping(
            findElement(['input[name*="City"]', 'input[name*="city"]']),
            userData.city
        );

        selectDropdown(
            ['select[name*="Location"]', 'select[name*="location"]', 'select[name*="VisaCenter"]'],
            userData.location
        );

        setTimeout(() => {
            const dynamicDropdowns = document.querySelectorAll('select:not([name*="Location"]):not([name*="location"]):not([name*="VisaCenter"])');
            if (dynamicDropdowns.length > 0) {
                dynamicDropdowns.forEach(dd => {
                    if (dd.options.length > 0 && !dd.value) {
                        dd.selectedIndex = 1;
                        dd.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                });
            }

            const hiddenInputs = document.querySelectorAll('input[type="hidden"]');
            hiddenInputs.forEach(input => {
                if (input.name && !input.value) {
                    input.value = "1";
                }
            });
        }, 1000);
    }

    function submitForm() {
        setTimeout(() => {
            const submitBtn = findElement([
                'button[type="submit"]',
                'input[type="submit"]',
                'button[id*="submit"]',
                'button[class*="submit"]',
                'a[class*="submit"]',
                'a[id*="submit"]'
            ]);

            if (submitBtn) {
                submitBtn.classList.add('bls-autofill-highlight');
                setTimeout(() => {
                    submitBtn.click();
                    setTimeout(() => {
                        if (!document.querySelector('form')) {
                            window.close();
                        }
                    }, 3000);
                }, 500);
            }
        }, 1500);
    }

    function main() {
        if (isFormAvailable()) {
            console.log('BLS AutoFill: Form detected, starting fill process...');
            fillForm();
            submitForm();
        } else {
            setTimeout(() => {
                if (isFormAvailable()) {
                    main();
                } else {
                    console.log('BLS AutoFill: No form detected on this page');
                }
            }, 1000);
        }
    }

    main();

    const indicator = document.createElement('div');
    indicator.style.position = 'fixed';
    indicator.style.bottom = '10px';
    indicator.style.right = '10px';
    indicator.style.backgroundColor = '#4CAF50';
    indicator.style.color = 'white';
    indicator.style.padding = '5px 10px';
    indicator.style.borderRadius = '4px';
    indicator.style.zIndex = '999999';
    indicator.textContent = 'BLS AutoFill: Running';
    document.body.appendChild(indicator);
})();
