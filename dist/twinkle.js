/**
 * +-------------------------------------------------------------------------+
 * |                  === WARNING: GLOBAL GADGET FILE ===                    |
 * |                Changes to this page affect many users.                  |
 * |           Please discuss changes at [[WT:TW]] before editing.           |
 * +-------------------------------------------------------------------------+
 *
 * Imported from github [https://github.com/azatoth/twinkle].
 * All changes should be made in the repository, otherwise they will be lost.
 *
 * ----------
 *
 * This is AzaToth's Twinkle, the popular script sidekick for newbies, admins, and
 * every Wikipedian in between. Visit [[WP:TW]] for more information.
 */
// <nowiki>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* global Morebits */
// Check if account is experienced enough to use Twinkle
if (!Morebits.userIsInGroup('autoconfirmed') && !Morebits.userIsInGroup('confirmed')) {
    throw new Error('Twinkle: forbidden!');
}
// TypeScript: var declaration makes Twinkle available in global scope
var Twinkle = {
    initCallbacks: [],
    /**
     * Adds a callback to execute when Twinkle has loaded.
     * @param {function} func
     * @param {string} [name] - name of module used to check if is disabled.
     * If name is not given, module is loaded unconditionally.
     */
    addInitCallback: function (func, name) {
        Twinkle.initCallbacks.push({ func: func, name: name });
    },
    /**
     * This holds the default set of preferences used by Twinkle.
     * It is important that all new preferences added here, especially admin-only ones, are also added to
     * |Twinkle.config.sections| in twinkleconfig.js, so they are configurable via the Twinkle preferences panel.
     * For help on the actual preferences, see the comments in twinkleconfig.js.
     *
     * Formerly Twinkle.defaultConfig.twinkle and Twinkle.defaultConfig.friendly
     */
    defaultConfig: {
        // General
        userTalkPageMode: 'tab',
        dialogLargeFont: false,
        disabledModules: [],
        disabledSysopModules: [],
        // Portlet
        portletArea: null,
        portletId: null,
        portletName: null,
        portletType: null,
        portletNext: null,
        // ARV
        spiWatchReport: 'yes',
        // Block
        defaultToPartialBlocks: false,
        blankTalkpageOnIndefBlock: false,
        // Fluff (revert and rollback)
        autoMenuAfterRollback: false,
        openTalkPage: ['agf', 'norm', 'vand'],
        openTalkPageOnAutoRevert: false,
        rollbackInPlace: false,
        markRevertedPagesAsMinor: ['vand'],
        watchRevertedPages: ['agf', 'norm', 'vand', 'torev'],
        watchRevertedExpiry: 'yes',
        offerReasonOnNormalRevert: true,
        confirmOnFluff: false,
        confirmOnMobileFluff: true,
        showRollbackLinks: ['diff', 'others'],
        // DI (twinkleimage)
        notifyUserOnDeli: true,
        deliWatchPage: 'default',
        deliWatchUser: 'default',
        // PROD
        watchProdPages: 'yes',
        markProdPagesAsPatrolled: false,
        prodReasonDefault: '',
        logProdPages: false,
        prodLogPageName: 'PROD log',
        // CSD
        speedySelectionStyle: 'buttonClick',
        watchSpeedyPages: ['g3', 'g5', 'g10', 'g11', 'g12'],
        watchSpeedyExpiry: 'yes',
        markSpeedyPagesAsPatrolled: false,
        // these next two should probably be identical by default
        welcomeUserOnSpeedyDeletionNotification: ['db', 'g1', 'g2', 'g3', 'g4', 'g6', 'g10', 'g11', 'g12', 'g13', 'g14', 'a1', 'a2', 'a3', 'a5', 'a7', 'a9', 'a10', 'a11', 'f1', 'f2', 'f3', 'f7', 'f9', 'f10', 'u3', 'u5', 't3', 'p1', 'p2'],
        notifyUserOnSpeedyDeletionNomination: ['db', 'g1', 'g2', 'g3', 'g4', 'g6', 'g10', 'g11', 'g12', 'g13', 'g14', 'a1', 'a2', 'a3', 'a5', 'a7', 'a9', 'a10', 'a11', 'f1', 'f2', 'f3', 'f7', 'f9', 'f10', 'u3', 'u5', 't3', 'p1', 'p2'],
        warnUserOnSpeedyDelete: ['db', 'g1', 'g2', 'g3', 'g4', 'g6', 'g10', 'g11', 'g12', 'g13', 'g14', 'a1', 'a2', 'a3', 'a5', 'a7', 'a9', 'a10', 'a11', 'f1', 'f2', 'f3', 'f7', 'f9', 'f10', 'u3', 'u5', 't3', 'p1', 'p2'],
        promptForSpeedyDeletionSummary: [],
        deleteTalkPageOnDelete: true,
        deleteRedirectsOnDelete: true,
        deleteSysopDefaultToDelete: false,
        speedyWindowHeight: 500,
        speedyWindowWidth: 800,
        logSpeedyNominations: false,
        speedyLogPageName: 'CSD log',
        noLogOnSpeedyNomination: ['u1'],
        // Unlink
        unlinkNamespaces: ['0', '10', '100', '118'],
        // Warn
        defaultWarningGroup: '1',
        combinedSingletMenus: false,
        showSharedIPNotice: true,
        watchWarnings: 'yes',
        oldSelect: false,
        customWarningList: [],
        // XfD
        logXfdNominations: false,
        xfdLogPageName: 'XfD log',
        noLogOnXfdNomination: [],
        xfdWatchDiscussion: 'default',
        xfdWatchList: 'no',
        xfdWatchPage: 'default',
        xfdWatchUser: 'default',
        xfdWatchRelated: 'default',
        markXfdPagesAsPatrolled: true,
        // Hidden preferences
        autolevelStaleDays: 3,
        revertMaxRevisions: 50,
        batchMax: 5000,
        batchChunks: 50,
        // Deprecated options, as a fallback for add-on scripts/modules
        summaryAd: ' ([[WP:TW|TW]])',
        deletionSummaryAd: ' ([[WP:TW|TW]])',
        protectionSummaryAd: ' ([[WP:TW|TW]])',
        // Formerly defaultConfig.friendly:
        // Tag
        groupByDefault: true,
        watchTaggedPages: 'yes',
        watchMergeDiscussions: 'yes',
        markTaggedPagesAsMinor: false,
        markTaggedPagesAsPatrolled: true,
        tagArticleSortOrder: 'cat',
        customTagList: [],
        customFileTagList: [],
        customRedirectTagList: [],
        // Welcome
        topWelcomes: false,
        watchWelcomes: 'yes',
        welcomeHeading: 'Welcome',
        insertHeadings: true,
        insertUsername: true,
        insertSignature: true,
        quickWelcomeMode: 'norm',
        quickWelcomeTemplate: 'welcome',
        customWelcomeList: [],
        customWelcomeSignature: true,
        // Talkback
        markTalkbackAsMinor: true,
        insertTalkbackSignature: true,
        talkbackHeading: 'New message from ' + mw.config.get('wgUserName'),
        mailHeading: "You've got mail!",
        // Shared
        markSharedIPAsMinor: true
    },
    prefs: undefined,
    getPref: function (name) {
        if (typeof Twinkle.prefs === 'object' && Twinkle.prefs[name] !== undefined) {
            return Twinkle.prefs[name];
        }
        // Old preferences format, used before twinkleoptions.js was a thing
        if (typeof window.TwinkleConfig === 'object' && window.TwinkleConfig[name] !== undefined) {
            return window.TwinkleConfig[name];
        }
        if (typeof window.FriendlyConfig === 'object' && window.FriendlyConfig[name] !== undefined) {
            return window.FriendlyConfig[name];
        }
        return Twinkle.defaultConfig[name];
    },
    /**
     * **************** Twinkle.addPortlet() ****************
     *
     * Adds a portlet menu to one of the navigation areas on the page.
     * This is necessarily quite a hack since skins, navigation areas, and
     * portlet menu types all work slightly different.
     *
     * Available navigation areas depend on the skin used.
     * Vector:
     *  For each option, the outer nav class contains "vector-menu", the inner div class is "vector-menu-content", and the ul is "vector-menu-content-list"
     *  "mw-panel", outer nav class contains "vector-menu-portal". Existing portlets/elements: "p-logo", "p-navigation", "p-interaction", "p-tb", "p-coll-print_export"
     *  "left-navigation", outer nav class contains "vector-menu-tabs" or "vector-menu-dropdown". Existing portlets: "p-namespaces", "p-variants" (menu)
     *  "right-navigation", outer nav class contains "vector-menu-tabs" or "vector-menu-dropdown". Existing portlets: "p-views", "p-cactions" (menu), "p-search"
     *  Special layout of p-personal portlet (part of "head") through specialized styles.
     * Monobook:
     *  "column-one", outer nav class "portlet", inner div class "pBody". Existing portlets: "p-cactions", "p-personal", "p-logo", "p-navigation", "p-search", "p-interaction", "p-tb", "p-coll-print_export"
     *  Special layout of p-cactions and p-personal through specialized styles.
     * Modern:
     *  "mw_contentwrapper" (top nav), outer nav class "portlet", inner div class "pBody". Existing portlets or elements: "p-cactions", "mw_content"
     *  "mw_portlets" (sidebar), outer nav class "portlet", inner div class "pBody". Existing portlets: "p-navigation", "p-search", "p-interaction", "p-tb", "p-coll-print_export"
     *
     * @param {string} navigation -- id of the target navigation area (skin dependant, on vector either of "left-navigation", "right-navigation", or "mw-panel")
     * @param {string} id -- id of the portlet menu to create, preferably start with "p-".
     * @param {string} text -- name of the portlet menu to create. Visibility depends on the class used.
     * @param {string} type -- type of portlet. Currently only used for the vector non-sidebar portlets, pass "menu" to make this portlet a drop down menu.
     * @param {Node} nextnodeid -- the id of the node before which the new item should be added, should be another item in the same list, or undefined to place it at the end.
     *
     * @return Node -- the DOM node of the new item (a DIV element) or null
     */
    addPortlet: function (navigation, id, text, type, nextnodeid) {
        // sanity checks, and get required DOM nodes
        var root = document.getElementById(navigation) || document.querySelector(navigation);
        if (!root) {
            return null;
        }
        var item = document.getElementById(id);
        if (item) {
            if (item.parentNode && item.parentNode === root) {
                return item;
            }
            return null;
        }
        var nextnode;
        if (nextnodeid) {
            nextnode = document.getElementById(nextnodeid);
        }
        // verify/normalize input
        var skin = mw.config.get('skin');
        if (skin !== 'vector' || (navigation !== 'left-navigation' && navigation !== 'right-navigation')) {
            type = null; // menu supported only in vector's #left-navigation & #right-navigation
        }
        var outerNavClass, innerDivClass;
        switch (skin) {
            case 'vector':
                // XXX: portal doesn't work
                if (navigation !== 'portal' && navigation !== 'left-navigation' && navigation !== 'right-navigation') {
                    navigation = 'mw-panel';
                }
                outerNavClass = 'vector-menu vector-menu-' + (navigation === 'mw-panel' ? 'portal' : type === 'menu' ? 'dropdown' : 'tabs');
                innerDivClass = 'vector-menu-content';
                break;
            case 'modern':
                if (navigation !== 'mw_portlets' && navigation !== 'mw_contentwrapper') {
                    navigation = 'mw_portlets';
                }
                outerNavClass = 'portlet';
                break;
            case 'timeless':
                outerNavClass = 'mw-portlet';
                innerDivClass = 'mw-portlet-body';
                break;
            default:
                navigation = 'column-one';
                outerNavClass = 'portlet';
                break;
        }
        // Build the DOM elements.
        var outerNav = document.createElement('nav');
        outerNav.setAttribute('aria-labelledby', id + '-label');
        outerNav.className = outerNavClass + ' emptyPortlet';
        outerNav.id = id;
        if (nextnode && nextnode.parentNode === root) {
            root.insertBefore(outerNav, nextnode);
        }
        else {
            root.appendChild(outerNav);
        }
        var h3 = document.createElement('h3');
        h3.id = id + '-label';
        var ul = document.createElement('ul');
        if (skin === 'vector') {
            ul.className = 'vector-menu-content-list';
            // add invisible checkbox to keep menu open when clicked
            // similar to the p-cactions ("More") menu
            if (outerNavClass.indexOf('vector-menu-dropdown') !== -1) {
                var chkbox = document.createElement('input');
                chkbox.className = 'vector-menu-checkbox';
                chkbox.setAttribute('type', 'checkbox');
                chkbox.setAttribute('aria-labelledby', id + '-label');
                outerNav.appendChild(chkbox);
                // Vector gets its title in a span; all others except
                // timeless have no title, and it has no span
                var span = document.createElement('span');
                span.appendChild(document.createTextNode(text));
                h3.appendChild(span);
                var a = document.createElement('a');
                a.href = '#';
                $(a).click(function (e) {
                    e.preventDefault();
                });
                h3.appendChild(a);
            }
        }
        else {
            // Basically just Timeless
            h3.appendChild(document.createTextNode(text));
        }
        outerNav.appendChild(h3);
        if (innerDivClass) {
            var innerDiv = document.createElement('div');
            innerDiv.className = innerDivClass;
            innerDiv.appendChild(ul);
            outerNav.appendChild(innerDiv);
        }
        else {
            outerNav.appendChild(ul);
        }
        return outerNav;
    },
    /**
     * **************** Twinkle.addPortletLink() ****************
     * Builds a portlet menu if it doesn't exist yet, and add the portlet link.
     * @param task: Either a URL for the portlet link or a function to execute.
     * @param text
     * @param id
     * @param tooltip
     */
    addPortletLink: function (task, text, id, tooltip) {
        if (Twinkle.getPref('portletArea') !== null) {
            Twinkle.addPortlet(Twinkle.getPref('portletArea'), Twinkle.getPref('portletId'), Twinkle.getPref('portletName'), Twinkle.getPref('portletType'), Twinkle.getPref('portletNext'));
        }
        var link = mw.util.addPortletLink(Twinkle.getPref('portletId'), typeof task === 'string' ? task : '#', text, id, tooltip);
        $('.client-js .skin-vector #p-cactions').css('margin-right', 'initial');
        if (typeof task === 'function') {
            $(link).click(function (ev) {
                task();
                ev.preventDefault();
            });
        }
        if ($.collapsibleTabs) {
            $.collapsibleTabs.handleResize();
        }
        return link;
    },
    disabledModules: null,
    load: function () {
        // Don't activate on special pages other than those listed here, so
        // that others load faster, especially the watchlist.
        var activeSpecialPageList = ['Block', 'Contributions', 'Recentchanges', 'Recentchangeslinked']; // wgRelevantUserName defined for non-sysops on Special:Block
        if (Morebits.userIsSysop) {
            activeSpecialPageList = activeSpecialPageList.concat(['DeletedContributions', 'Prefixindex']);
        }
        if (mw.config.get('wgNamespaceNumber') === -1 &&
            activeSpecialPageList.indexOf(mw.config.get('wgCanonicalSpecialPageName')) === -1) {
            return;
        }
        // Prevent clickjacking
        if (window.top !== window.self) {
            return;
        }
        // Set custom Api-User-Agent header, for server-side logging purposes
        Morebits.wiki.api.setApiUserAgent('Twinkle (' + mw.config.get('wgWikiID') + ')');
        Twinkle.disabledModules = Twinkle.getPref('disabledModules').concat(Twinkle.getPref('disabledSysopModules'));
        // Redefine addInitCallback so that any modules being loaded now on are directly
        // initialised rather than added to initCallbacks array
        Twinkle.addInitCallback = function (func, name) {
            if (!name || Twinkle.disabledModules.indexOf(name) === -1) {
                func();
            }
        };
        // Initialise modules that were saved in initCallbacks array
        Twinkle.initCallbacks.forEach(function (module) {
            Twinkle.addInitCallback(module.func, module.name);
        });
        // Increases text size in Twinkle dialogs, if so configured
        if (Twinkle.getPref('dialogLargeFont')) {
            mw.util.addCSS('.morebits-dialog-content, .morebits-dialog-footerlinks { font-size: 100% !important; } ' +
                '.morebits-dialog input, .morebits-dialog select, .morebits-dialog-content button { font-size: inherit !important; }');
        }
        // Hide the lingering space if the TW menu is empty
        if (mw.config.get('skin') === 'vector' && Twinkle.getPref('portletType') === 'menu' && $('#p-twinkle').length === 0) {
            $('#p-cactions').css('margin-right', 'initial');
        }
    },
    // Non-polluting shims for common ES6 functions
    // Use destructuring on the Twinkle.shims object for convenient usage;
    // eg. const {arr_includes, str_startsWith} = Twinkle.shims;
    shims: {
        obj_values: function (obj) {
            // @ts-ignore
            return Object.values ? Object.values(obj) : Object.keys(obj).map(function (k) { return obj[k]; });
        },
        obj_entries: function (obj) {
            // @ts-ignore
            return Object.entries ? Object.entries(obj) : Object.keys(obj).map(function (k) { return [k, obj[k]]; });
        },
        arr_includes: function (arr, item) {
            return arr.indexOf(item) !== -1;
        },
        arr_find: function (arr, predicate) {
            // @ts-ignore
            return Array.prototype.find ? arr.find(predicate) : arr.filter(predicate)[0];
        },
        str_includes: function (str, item) {
            return str.indexOf(item) !== -1;
        },
        str_startsWith: function (str, text) {
            // @ts-ignore
            return String.prototype.startsWith ? str.startsWith(text) : str.indexOf(text) === 0;
        },
        str_endsWith: function (str, text) {
            // @ts-ignore
            if (String.prototype.endsWith) {
                // @ts-ignore
                return str.endsWith(text);
            }
            else {
                var lastIdx = str.lastIndexOf(text);
                return lastIdx !== -1 && lastIdx === str.length - text.length;
            }
        }
    },
    /**
     * Light but immensely hacky wrapper around Morebits.wiki.page that presets the change tags
     * and promisifies the core methods.
     */
    page: /** @class */ (function (_super) {
        __extends(Page, _super);
        // This is ugly, because Morebits.wiki.page uses an implementation pattern
        // that doesn't define any methods on Morebits.wiki.page.prototype.
        function Page(title, status) {
            var _this = _super.call(this, title, status) || this;
            _this.setChangeTags(Twinkle.changeTags);
            var functionsToPromisify = ['load', 'lookupCreation', 'save', 'append', 'prepend',
                'newSection', 'deletePage', 'undeletePage', 'protect', 'stabilize'];
            functionsToPromisify.forEach(function (func) {
                var origFunc = _this[func].bind(_this);
                _this[func] = function (onSuccess, onFailure) {
                    var _this = this;
                    var def = $.Deferred();
                    origFunc(function () {
                        if (onSuccess) {
                            onSuccess.call(_this, // pass context as this, mostly needed everywhere
                            _this // pass first arg as this, only needed for fnAutoSave
                            // which takes pageobj as argument
                            );
                        }
                        def.resolve(_this);
                    }, function () {
                        if (onFailure) {
                            onFailure.call(_this, _this); // same as above
                        }
                        def.reject(_this);
                    });
                    return def;
                };
            });
            return _this;
        }
        return Page;
    }(Morebits.wiki.page)),
    /**
     * Twinkle-specific data shared by multiple modules
     * Likely customized per installation
     * TODO: move these to a separate file?
     */
    // Custom change tag(s) to be applied to all Twinkle actions, create at Special:Tags
    changeTags: 'twinkle',
    // Available for actions that don't (yet) support tags
    // currently: FlaggedRevs and PageTriage
    summaryAd: ' ([[WP:TW|TW]])',
    // Various hatnote templates, used when tagging (csd/xfd/tag/prod/protect) to
    // ensure MOS:ORDER
    hatnoteRegex: 'short description|hatnote|main|correct title|dablink|distinguish|for|further|selfref|year dab|similar names|highway detail hatnote|broader|about(?:-distinguish| other people)?|other\\s?(?:hurricane(?: use)?s|people|persons|places|ships|uses(?: of)?)|redirect(?:-(?:distinguish|synonym|multi))?|see\\s?(?:wiktionary|also(?: if exists)?)',
    // Used in XFD and PROD
    makeFindSourcesDiv: function () {
        var makeLink = function (href, text) {
            return $('<a>').attr({ rel: 'nofollow', class: 'external text',
                target: '_blank', href: href }).text(text);
        };
        var title = encodeURIComponent(Morebits.pageNameNorm);
        return $('<div>')
            .addClass('plainlinks')
            .append('(', $('<i>').text('Find sources:'), ' ', makeLink('//www.google.com/search?as_eq=wikipedia&q=%22' + title + '%22', 'Google'), ' (', makeLink('//www.google.com/search?tbs=bks:1&q=%22' + title + '%22+-wikipedia', 'books'), ' - ', makeLink('//www.google.com/search?tbm=nws&q=%22' + title + '%22+-wikipedia', 'news'), ' - ', makeLink('//www.google.com/search?&q=%22' + title + '%22+site:news.google.com/newspapers&source=newspapers', 'newspapers'), ' - ', makeLink('//scholar.google.com/scholar?q=%22' + title + '%22', 'scholar'), ' - ', makeLink('https://www.google.com/search?safe=off&tbs=sur:fmc&tbm=isch&q=%22' + title + '%22+-site:wikipedia.org+-site:wikimedia.org', 'free images'), ' - ', makeLink('https://www.google.com/custom?hl=en&cx=007734830908295939403%3Agalkqgoksq0&cof=FORID%3A13%3BAH%3Aleft%3BCX%3AWikipedia%2520Reference%2520Search&q=%22' + title + '%22', 'WP refs'), ')', ' - ', makeLink('https://en.wikipedia.org/wiki/Wikipedia:Free_English_newspaper_sources', 'FENS'), ' - ', makeLink('https://www.jstor.org/action/doBasicSearch?Query=%22' + title + '%22&acc=on&wc=on', 'JSTOR'), ' - ', makeLink('https://www.nytimes.com/search/%22' + title + '%22', 'NYT'), ' - ', makeLink('https://wikipedialibrary.wmflabs.org/partners/', 'TWL'), ')')[0];
    }
};
// Some skin dependent config.
switch (mw.config.get('skin')) {
    case 'vector':
        Twinkle.defaultConfig.portletArea = 'right-navigation';
        Twinkle.defaultConfig.portletId = 'p-twinkle';
        Twinkle.defaultConfig.portletName = 'TW';
        Twinkle.defaultConfig.portletType = 'menu';
        Twinkle.defaultConfig.portletNext = 'p-search';
        break;
    case 'timeless':
        Twinkle.defaultConfig.portletArea = '#page-tools .sidebar-inner';
        Twinkle.defaultConfig.portletId = 'p-twinkle';
        Twinkle.defaultConfig.portletName = 'Twinkle';
        Twinkle.defaultConfig.portletType = null;
        Twinkle.defaultConfig.portletNext = 'p-userpagetools';
        break;
    default:
        Twinkle.defaultConfig.portletArea = null;
        Twinkle.defaultConfig.portletId = 'p-cactions';
        Twinkle.defaultConfig.portletName = null;
        Twinkle.defaultConfig.portletType = null;
        Twinkle.defaultConfig.portletNext = null;
}
/**
 * **************** General initialization code ****************
 */
var scriptpathbefore = mw.util.wikiScript('index') + '?title=', scriptpathafter = '&action=raw&ctype=text/javascript&happy=yes';
// Retrieve the user's Twinkle preferences
$.ajax({
    url: scriptpathbefore + 'User:' + encodeURIComponent(mw.config.get('wgUserName')) + '/twinkleoptions.js' + scriptpathafter,
    dataType: 'text'
})
    .fail(function () {
    mw.notify('Could not load your Twinkle preferences', { type: 'error' });
})
    .done(function (optionsText) {
    // Quick pass if user has no options
    if (optionsText === '') {
        return;
    }
    // Twinkle options are basically a JSON object with some comments. Strip those:
    optionsText = optionsText.replace(/(?:^(?:\/\/[^\n]*\n)*\n*|(?:\/\/[^\n]*(?:\n|$))*$)/g, '');
    // First version of options had some boilerplate code to make it eval-able -- strip that too. This part may become obsolete down the line.
    if (optionsText.lastIndexOf('window.Twinkle.prefs = ', 0) === 0) {
        optionsText = optionsText.replace(/(?:^window.Twinkle.prefs = |;\n*$)/g, '');
    }
    try {
        var options = JSON.parse(optionsText);
        if (options) {
            if (options.twinkle || options.friendly) { // Old preferences format
                Twinkle.prefs = $.extend(options.twinkle, options.friendly);
            }
            else {
                Twinkle.prefs = options;
            }
            // v2 established after unification of Twinkle/Friendly objects
            Twinkle.prefs.optionsVersion = Twinkle.prefs.optionsVersion || 1;
        }
    }
    catch (e) {
        mw.notify('Could not parse your Twinkle preferences', { type: 'error' });
    }
})
    .always(function () {
    $(Twinkle.load);
});
var TwinkleModule = /** @class */ (function () {
    function class_1() {
    }
    class_1.prototype.addMenu = function () {
        Twinkle.addPortletLink(this.makeWindow, this.portletName, this.portletId, this.portletTooltip);
    };
    return class_1;
}());
// allow global access
window.Twinkle = Twinkle;
window.TwinkleModule = TwinkleModule;
// </nowiki>
//# sourceMappingURL=twinkle.js.map