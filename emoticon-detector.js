const unicode = require("emoji-unicode-map");

module.exports = class Emoticon {

    /**
     * Gets graphic emoticon map
     * @return {Object}
     */
    static getAll() {
        return unicode.emoji;
    }

    static get EMOTICON_TEXT() {
        return /(\:\w+\:|\<[\/\\]?3|[\(\)\\\D|\*\$][\-\^]?[\:\;\=]|[\:\;\=B8][\-\^]?[3DOPp\@\$\*\\\)\(\/\|])(?=\s|[\!\.\?]|$)/;
    }
    /**
     * String to check if it is a graphic emoticon
     * @param {String} emoticon 
     */
    static isGraphicEmoticon(emoticon) {
        if (emoticon && Emoticon.getAll()[emoticon])
            return true;
        else
            return false;
    }

    /**
     * Checks a text emoticon
     * @param {String} emoticonText 
     */
    static isTextEmoticon(emoticonText) {
        if (emoticonText && emoticonText.match(Emoticon.EMOTICON_TEXT))
            return true;
        else
            return false;
    }
}