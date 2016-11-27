/**
 * Global namespace
 * @type {object}
 */
var globals = globals || {};
var powersed = powersed || {};

/**
 * Backbone globals
 */
powersed.views = powersed.views || {};
powersed.models = powersed.models || {};
powersed.collections = powersed.collections || {};
powersed.routers = powersed.routers || {};

/**
 * Global array of BB views initialized in app.js
 * This should eventually be created dynamically, not manually
 * @type {string[]}
 */
globals.views = ['form', 'headerView', 'footerView', 'profileView', 'chatsListView', 'mentorsView', 'connectAccountView', 'singleChatView'];

/**
 * All api urls
 * @type {{getProfile: string, getMentors: string, getChats: string}}
 */
globals.api = {
    getProfile: 'dist/data/profile.json',
    getMentors: 'dist/data/mentors.json',
    getChats: 'dist/data/chats.json',
    getChat: 'dist/data/single-chat.json'
};