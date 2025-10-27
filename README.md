# Firefox Annoyances
Mozilla Firefox is a great browser. But Mozilla keeps introducing useless features in their browser in order to keep up with competition. As of 27 October 2025, a great recent example would be the new Machine Learning / Artificial Intelligence features.

I find them annoying, but there are many inconsistent recommendations around the internet to disable them in `about:config`. This repository shall serve as a centralized way for users to contribute new preferences as a quick way for people to use in their `user.js`.

What is useless/bloat is subjective, but this is my personal list, and I think it could be of help for more people.

This project is intended to be simple and not a big general template; it's more of an additional simple thing to already existing projects. As long as Mozilla doesn't add more annoyances, this project should have a low count of preferences changes.__
I recommend you to stick to vanilla Firefox and apply custom prefs on top of it instead of using forks such as LibreWolf.

# How to use
This .js can be used as a standalone file, but I made it for personal use and I'd recommend you to use it in conjuction with [Arkenfox's user.js](https://github.com/arkenfox/user.js). It's a great template, and things that are covered there won't be covered here.

To use this as a standalone thing, you can download the `annoyances.js` file, install it into the "Root Directory" of the Firefox profile you are using (see `about:profiles`) and rename it to `user.js`.

To use it in conjuction with Arkenfox, copy the entirety of the `annoyances.js` contents and append them to your `user-overrides.js` file.

# Syntax explanation
```javascript
// Syntax explanation:
// We have three options: boolean, number and string
//
// Boolean: "true" or "false"
// Number: 1, 2, 3
// String is a specific text: "www.example.com"
//
// For Booleans and Numbers, this syntax should be used:
user_pref("preference.name", VALUE);
// Where VALUE is either true/false/a number. It should not be in quotes, unless the preference accepts multiple VALUEs.
//
// For Strings, this syntax should be used:
user_pref("preference.name", "STRING");
// Where STRING must be in quotes
```

# License
This project is licensed under the UNLICENSE. If you contribute to it, you agree to its license. Basically, do whatever you want, it's public domain, no need for attribution/copyright.

# Thanks
If you use this project: thanks! You're awesome.
