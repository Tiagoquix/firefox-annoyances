// ==================================================================================================================
// Disable Machine Learning / Artificial Intelligence features
// https://firefox-source-docs.mozilla.org/toolkit/components/ml/extensions.html
// ==================================================================================================================

// Core (master switches)
user_pref("browser.ml.enable", false);
user_pref("extensions.ml.enabled", false);

// AI sidebar chat (also disables AI-related options in other places)
user_pref("browser.ml.chat.enabled", false);

// "Ask an AI Chatbot" context menu item
// It should be disabled by the above preference, but there seems to be a regression
// introduced in Firefox 140 where it does not to that, so we have to use an additional
// preference to get rid of it.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1994785
user_pref("browser.ml.chat.page", false);

// Tab grouping AI suggestions
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);

// ==================================================================================================================
// Disable tab hover previews
// Visuals are annoying. Newer previews sometimes don't show the entire tab title.
// Older preview which only has text loads faster and is nicer on the eyes.
// ==================================================================================================================
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);

// ==================================================================================================================
// Disable "Copy Link without Site Tracking" context menu option
// Creates confusion/duplication with the normal "Copy Link", and most of the time doesn't make the URL actually clear.
// It's better to do it yourself or just use ClearURLs for uBlock Origin from Adlift and visit the link to copy.
// ==================================================================================================================
user_pref("privacy.query_stripping.strip_on_share.enabled", false);

// ==================================================================================================================
// Disable full-screen transition and warning
// Why fade to black when entering full-screen?
// Even without animations, it's should obvious for most people that you've asked for full-screen.
// ==================================================================================================================
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// ==================================================================================================================
// Disable pointer lock warning
// I use the website https://loadout.tf/ for creating cool cosmetic loadouts for my mercenaries in the game
// Team Fortress 2. But everytime I rotate my character the warning appears, which makes it really obnoxious.
// ==================================================================================================================
user_pref("pointer-lock-api.warning.timeout", 0);

// ==================================================================================================================
// Disable picture-in-picture media controls
// Multitasking is an illusion. You better either focus on the video or on the contet you're consuming.
// Picture-in-picture is bad. Watch the video in a bigger proportion.
// ==================================================================================================================
user_pref("extensions.pictureinpicture.enable_picture_in_picture_overrides", true);
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// ==================================================================================================================
// Disable various promotions to Mozilla's own services such as:
// Firefox Mobile app; Mozilla VPN; Mozilla Focus etc.
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

// ==================================================================================================================
// Force URLs to be visually always completely shown and don't hide anything from them
// Forces padlock (certificates) and HTTPS text to be shown and prefer normal URLs rather than search terms
// Arkenfox foces Search Terms OFF and enables network.IDN_show_punycode, so they are not included here.
// ==================================================================================================================
user_pref("browser.urlbar.trimHttps", false);
user_pref("browser.urlbar.trimURLs", false);

// ==================================================================================================================
// Disable ALT key from opening the menu bar (File, Edit etc. actions)
// ==================================================================================================================
user_pref("ui.key.menuAccessKeyFocuses", false);

// ==================================================================================================================
// Linux-specific tweaks
// Force scrollbar to always be visible
// Force Firefox to use native file picker (useful for KDE users)
// ==================================================================================================================
user_pref("widget.gtk.overlay-scrollbars.enabled", false);
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);
