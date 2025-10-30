// ==================================================================================================================
// Disable Machine Learning / Artificial Intelligence features
// ==================================================================================================================

// ML components. See tor-browser#44045.

// tor-browser#42872, #42555, #44045: Disable ML translations.
user_pref("browser.translations.enable", false);

// Disables many (but not all) ML engines. Note, this does not have overall
// control over exposure to ML features. tor-browser#44045.
user_pref("browser.ml.enable", false);

// Disable third party AI chatbot. tor-browser#43989.
user_pref("browser.ml.chat.enabled", false);

// Disable LinkPreview. tor-browser#44045 and tor-browser#43867.
user_pref("browser.ml.linkPreview.enabled", false);

// Disable Smart Tab Groups. tor-browser#44045.
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);

// Don't expose ModelHub API for extensions. tor-browser#44045.
user_pref("extensions.ml.enabled", false);

// Don't enable ML generated alt text. tor-browser#44045.
// pdfjs.enableAltText controls whether MLManager is created,
// pdfjs.enableGuessAltText controls whether the MLManager can create an ML
// engine. pdfs.enableAltText controls whether the latter preference can be
// changed by the user in the UI, but also has the side effect of hiding the
// UI controls for the non-ML preference pdfjs.enableNewAltTextWhenAddingImage.
// See bugzilla bug 1943456 comment 12.
user_pref("pdfjs.enableAltText", false);
user_pref("pdfjs.enableAltTextForEnglish", false);
user_pref("pdfjs.enableGuessAltText", false);
user_pref("pdfjs.enableAltTextModelDownload", false);

// Disable SuggestBackendMl. tor-browser#44045.
user_pref("browser.urlbar.quicksuggest.mlEnabled", false);

// Disable SemanticHistory search. tor-browser#44045.
user_pref("places.semanticHistory.featureGate", false);

// "Ask an AI Chatbot" context menu item
// It should be disabled by the above preference, but there seems to be a regression
// introduced in Firefox 140 where it does not to that, so we have to use an additional
// preference to get rid of it.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1994785
user_pref("browser.ml.chat.page", false);

// ==================================================================================================================
// Disable various promotions to Mozilla's own services such as:
// Firefox Mobile app / Mozilla VPN / Mozilla Focus etc.
// They appear randomly in some sections of the browser
// ==================================================================================================================
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.url", "");

user_pref("browser.privatebrowsing.vpnpromourl", "");

user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);

user_pref("browser.vpn_promo.enabled", false);

user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");
user_pref("identity.sendtabpromo.url", "");

// Appears in settings as a new tab/group (like "General" / "Privacy & Security")
user_pref("browser.preferences.moreFromMozilla", false);

// Disable link to get more themes in Themes section
user_pref("lightweightThemes.getMoreURL", "");
