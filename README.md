# Introduction

Mozilla Firefox is a great browser. However, Mozilla keeps introducing useless/bloated Machine Learning (Artificial Intelligence) features in their browser in order to "keep up" with competition.

I find them annoying, but there are many inconsistent recommendations across the internet to disable them in `about:config`. This repository shall serve as a centralized way for users to contribute new preferences as a quick way for people to use in their `user.js`.

# Deactivations

Currently, the following is disabled in Mozilla Firefox by this project:

- Everything that uses Machine Learning — this includes in-browser local translations and alternative text that is auto-generated for PDF files.
- Mozilla self-promotion inside their Firefox browser (Mozilla VPN, Mozilla Focus, "More from Mozilla" and so on).

# How to use

The `annoyances.js` file can be used as a standalone file, but I would recommend you to use it in conjuction with [Arkenfox's user.js](https://github.com/arkenfox/user.js). It's a great template, and things that are covered there won't be covered here.

To use this as a standalone thing, you can download the `annoyances.js` file, install it into the `Root Directory` of the Firefox profile you are using (see `about:profiles`) and rename it to `user.js`.

To use it in conjuction with Arkenfox, append the contents of `annoyances.js` to your `user-overrides.js` file.

Contributions, criticsm and suggestions are welcome! Feel free to open issues or pull requests to discuss additions, changes and removals.

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
// Where VALUE is either true/false/a number.
// It should not be in quotes, unless the preference accepts multiple VALUEs.
//
// For Strings, this syntax should be used:
user_pref("preference.name", "STRING");
// Where STRING must be in quotes
```

# License

This project is licensed under the UNLICENSE. If you contribute to it, you agree to its license.

Some of the work integrated into this project was based on the Tor Project's work. Tor Browser is licensed under the Mozilla Public License 2.0. Special thanks for them for such great work.

# Thanks

If you use this project: thanks! You're awesome.
