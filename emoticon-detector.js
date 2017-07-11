const unicode = require("emoji-unicode-map");

module.exports = class Emoticon {

    /**
     * Gets graphic emoticon map
     * @return {Object}
     */
    static getAll() {
        return unicode.emoji;
    }

    static EMOTICONS() {
        return {
            happy: [
                ':‑)',
                ':-]',
                ':-3',
                ':->',
                '8-)',
                ':-}',
                ':o)',
                ':c)',
                ':^)',
                '=]',
                '=)',
                ':)',
                ':]',
                ':3',
                ':>',
                '8)',
                ':}'
            ],
            laughing: [
                ':‑D',
                '8‑D',
                'x‑D',
                'X‑D',
                ':D',
                '8D',
                'xD',
                'XD',
                '=D',
                '=3',
                'B^D'
            ],
            double_chin: [
                ':-))'
            ],
            frown: [
                ':‑(',
                ':‑c',
                ':‑<',
                ':‑[',
                ':-||',
                '>:[',
                ':{',
                ':@',
                '>:('
            ],
            crying: [
                ':\'‑(',
                ':\'('
            ],
            tears_of_happiness: [
                ':\'‑)',
                ':\')',
            ],
            disgust: [
                'D‑\':',
                'D:<',
                'D:',
                'D8',
                'D;',
                'D=',
                'DX'
            ],
            surprise: [
                ':‑O',
                ':O',
                ':‑o',
                ':o',
                ':-0',
                '8‑0',
                '>:O'
            ],
            kiss: [
                ':-*',
                ':*',
                ':×'
            ],
            wink: [
                ';‑)',
                ';)',
                '*-)',
                '*)',
                ';‑]',
                ';]',
                ';^)',
                ':‑,',
                ';D'
            ],
            playful: [
                ':‑P',
                ':P',
                'X‑P',
                'XP',
                'x‑p',
                'xp',
                ':‑p',
                ':p',
                ':‑Þ',
                ':Þ',
                ':‑þ',
                ':þ',
                ':‑b',
                ':b',
                'd:',
                '=p',
                '>:P'
            ],
            skeptical: [
                ':‑/',
                ':/',
                ':‑.',
                '>:\\',
                '>:/',
                ':\\',
                ':\\',
                '=\\',
                ':L',
                ':L',
                ':S'
            ],
            indecision: [
                ':‑|',
                ':|'
            ],
            embarassed: [
                ':$'
            ],
            tongue_tied: [
                ':‑X',
                ':‑#',
                ':‑&',
                ':X',
                ':#',
                ':&'
            ],
            angel: [
                'O:‑)',
                '0:‑3',
                '0:‑)',
                'O:)',
                '0:3',
                '0:)',
                '0;^)'
            ],
            evil: [
                '>:‑)',
                '>:)',
                '}:‑)',
                '}:)',
                '}:)',
                '3:)',
                '>;)'
            ],
            cool: [
                '|;‑)',
                '|‑O'
            ],
            toungue_in_cheek: [
                ':‑J'
            ],
            partied: [
                '#‑)'
            ],
            drunk: [
                '%‑)',
                '%)'
            ],
            sick: [
                ':‑###..',
                ':###..'
            ],
            dumb: [
                '<:‑|'
            ]

        }
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